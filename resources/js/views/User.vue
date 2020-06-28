<template>
    <v-col cols="12">
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="users"
            :search="search"
            :options.sync="options"
            :server-items-length="total"
            :loading="!!loading"
            :dense="dense"
            :page="1"
            :items-per-page="10"
            sort-by="updated_at"
            sort-desc
            show-select
            must-sort
            class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar :dark="!!selected.length" flat>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-show="selected.length" @click="selected = []" v-on="on" icon>
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </template>
                        <span>Cancel</span>
                    </v-tooltip>

                    <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>

                    <v-spacer></v-spacer>

                    <v-slide-x-reverse-transition>
                        <v-text-field
                            v-show="!selected.length && searchBox"
                            v-model="search"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-slide-x-reverse-transition>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-show="!selected.length" @click="toggleSearch" v-on="on" icon>
                                <v-icon>
                                    mdi-magnify{{
                                    searchBox ? "-close" : ""
                                    }}
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Search</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-show="!selected.length" @click="dialog = true" v-on="on" icon>
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Create</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-show="selected.length"
                                @click="dialogDelete = true"
                                v-on="on"
                                icon
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-show="selected.length == 1" @click="edit" v-on="on" icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                </v-toolbar>
            </template>
            <template v-slot:item.last_at="{ item }">
                {{
                item.last_at | moment("from")
                }}
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500px" persistent>
            <validation-observer v-slot="{ invalid, handleSubmit }" ref="form">
                <v-form @submit.prevent="handleSubmit(saveItem())">
                    <v-card :loading="!!loading">
                        <v-card-title>
                            <span class="headline">{{ formTitle }} Item</span>
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                            <validation-provider name="name" v-slot="{ errors, valid }">
                                <v-text-field
                                    label="Product name"
                                    name="name"
                                    type="text"
                                    v-model="form.name"
                                    :error-messages="errors"
                                    :success="valid"
                                    counter
                                    hint="This is to identify the product"
                                    persistent-hint
                                ></v-text-field>
                            </validation-provider>

                            <validation-provider name="description" v-slot="{ errors, valid }">
                                <v-text-field
                                    label="Product description"
                                    name="description"
                                    type="text"
                                    v-model="form.description"
                                    :error-messages="errors"
                                    :success="valid"
                                    counter
                                    hint="Short description about the product"
                                    persistent-hint
                                ></v-text-field>
                            </validation-provider>
                        </v-card-text>

                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                :disabled="invalid || !!loading"
                                type="submit"
                                color="primary"
                                large
                            >Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </validation-observer>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="290" persistent scrollable>
            <v-card :loading="!!loading">
                <v-card-title>Confirmation</v-card-title>
                <v-divider></v-divider>

                <v-card-text class="pt-2" style="max-height: 300px;">
                    Are you sure to delete {{ formDeleteContent }}
                    <v-chip-group column small active-class="primary--text">
                        <v-chip v-for="item in selected" :key="item.id">
                            {{
                            item.name
                            }}
                        </v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="darken-1" @click="dialogDelete = false" text>Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!!loading"
                        @click="deleteItem"
                        color="red"
                        dark
                        large
                    >Yes, sure</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { map, clone, cloneDeep, debounce, upperFirst } from "lodash";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";
import pluralize from "pluralize";
import { User } from "@/models";

const model = "user";

export default {
    name: model,
    data() {
        return {
            dense: true,
            searchBox: false,
            dialog: false,
            dialogDelete: false,
            total: 0,
            search: "",
            options: {},
            selected: [],
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role" },
                { text: "Last At", value: "last_at" },
                { text: "Last Ip", value: "last_ip" }
            ],
            form: cloneDeep(User)
        };
    },
    computed: {
        ...mapState("app", ["loading"]),
        ...mapState("model", [pluralize(model)]),
        toolbarTitle() {
            const { length } = this.selected;

            if (length > 0) {
                return `${length} selected`;
            }
            return `${upperFirst(pluralize(model))}`;
        },
        formTitle() {
            const { id } = this.form;
            return id === -1 ? "New" : "Edit";
        },
        formDeleteContent() {
            const { length } = this.selected;
            const single = length === 1;

            if (single) {
                return `this ${model} ?`;
            }
            return `these ${length} ${pluralize(model)} ?`;
        }
    },
    methods: {
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        fetch: async function() {
            await this.GET_MODELS({
                model,
                params: {
                    ...this.options,
                    search: this.search
                }
            }).then(total => {
                this.total = total;
            });
        },
        toggleSearch() {
            this.searchBox = !this.searchBox;
            if (!this.searchBox) {
                this.search = "";
            }
        },
        edit() {
            this.form = cloneDeep(this.selected[0]);
            this.dialog = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.form = cloneDeep(User);
                this.$refs.form.reset();
            });
        },
        deleteItem: async function() {
            await this.DELETE_MODELS({
                model,
                ids: map(this.selected, "id")
            });
            await this.fetch();
            this.selected = [];
            this.dialogDelete = false;
        },
        saveItem() {
            this.SAVE_MODEL({
                model,
                payload: this.form
            })
                .then(async () => {
                    await this.fetch();
                    this.selected = [];
                    this.close();
                })
                .catch(errors => {
                    this.$refs.form.setErrors(errors);
                });
        }
    },
    watch: {
        options: {
            handler() {
                this.fetch();
            },
            deep: true
        },
        search: debounce(function() {
            this.fetch();
        }, 500)
    }
};
</script>

<style></style>
