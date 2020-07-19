<template>
    <v-col cols="12">
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="products"
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
                            <v-btn
                                v-show="selected.length"
                                @click="selected = []"
                                v-on="on"
                                icon
                            >
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
                            autofocus
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-slide-x-reverse-transition>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-show="!selected.length"
                                @click="toggleSearch"
                                v-on="on"
                                icon
                            >
                                <v-icon>
                                    {{
                                        searchBox
                                            ? "mdi-close-circle"
                                            : "mdi-magnify"
                                    }}
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>Search</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-show="!selected.length"
                                @click="create"
                                v-on="on"
                                icon
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Create</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-show="!selected.length"
                                @click="TOGGLE_DENSE"
                                v-on="on"
                                icon
                            >
                                <v-icon>{{
                                    dense ? "mdi-table" : "mdi-table-large"
                                }}</v-icon>
                            </v-btn>
                        </template>
                        <span>{{ dense ? "Larger" : "Smaller" }}</span>
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
                            <v-btn
                                v-show="selected.length == 1"
                                @click="edit"
                                v-on="on"
                                icon
                            >
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                </v-toolbar>
            </template>

            <template v-slot:item.name="{ item }">
                <v-chip
                    :to="childRoute(item.id)"
                    color="primary"
                    :small="dense"
                    >{{ item.name }}</v-chip
                >
            </template>
            <template v-slot:item.latest_price="{ item }">{{
                item.latest_price | currency
            }}</template>
            <template v-slot:item.prices_len="{ item }">{{
                item.prices.length
            }}</template>
            <template v-slot:item.updated_at="{ item }">{{
                item.updated_at | moment("from")
            }}</template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500px" persistent>
            <validation-observer v-slot="{ handleSubmit }" ref="form">
                <v-form @submit.prevent="handleSubmit(saveItem)">
                    <v-card :loading="!!loading">
                        <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                        >
                            <span class="headline">{{ formTitle }} Item</span>
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                            <validation-provider
                                name="name"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    label="Product name"
                                    type="text"
                                    v-model="form.name"
                                    :error-messages="errors"
                                    :success="valid"
                                    counter
                                    hint="This is to identify the product"
                                    persistent-hint
                                ></v-text-field>
                            </validation-provider>

                            <validation-provider
                                name="description"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    label="Product description"
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
                            <v-btn color="blue darken-1" text @click="close"
                                >Cancel</v-btn
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                :disabled="!!loading"
                                type="submit"
                                color="primary"
                                large
                                >Save</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-form>
            </validation-observer>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="290" persistent scrollable>
            <v-card :loading="!!loading">
                <v-card-title class="headline grey lighten-2" primary-title
                    >Confirmation</v-card-title
                >
                <v-divider></v-divider>

                <v-card-text class="pt-2" style="max-height: 300px;">
                    Are you sure to delete {{ formDeleteContent }}
                    <v-chip-group column small active-class="primary--text">
                        <v-chip v-for="item in selected" :key="item.id">{{
                            item.name
                        }}</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="darken-1" @click="dialogDelete = false" text
                        >Cancel</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!!loading"
                        @click="deleteItem"
                        color="red"
                        dark
                        large
                        >Yes, sure</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { map, clone, cloneDeep, debounce, startCase } from "lodash";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";
import { TOGGLE_DENSE } from "@/store/app/mutation-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import pluralize from "pluralize";
import { Product } from "@/models";

const model = "product";

export default {
    name: model,
    data() {
        return {
            searchBox: false,
            dialog: false,
            dialogDelete: false,
            total: 0,
            search: null,
            options: {},
            selected: [],
            headers: [
                { text: "Name", value: "name" },
                { text: "Description", value: "description" },
                {
                    text: "Last.Price",
                    value: "latest_price",
                    align: "right",
                    sortable: false,
                    width: 150
                },
                {
                    text: "Tot.Price",
                    value: "prices_len",
                    align: "center",
                    sortable: false
                },
                { text: "Creator", value: "user.name" },
                { text: "Updated At", value: "updated_at" }
            ],
            form: null
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["products"]),
        toolbarTitle() {
            const { length } = this.selected;

            if (length > 0) {
                return `${length} selected`;
            }
            return `${pluralize(startCase(model))}`;
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
        ...mapMutations("app", [TOGGLE_DENSE]),
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        toggleSearch() {
            this.searchBox = !this.searchBox;
            if (!this.searchBox) {
                this.search = "";
            }
        },
        create() {
            this.form = cloneDeep(Product);
            this.dialog = true;
        },
        edit() {
            this.form = cloneDeep(this.selected[0]);
            this.dialog = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.$refs.form.reset();
            });
        },
        fetchItem: async function() {
            await this.GET_MODELS({
                model,
                params: {
                    ...this.options,
                    search: this.search
                }
            })
                .then(({ meta }) => {
                    this.total = meta.total;
                })
                .catch(e => {});
        },
        saveItem() {
            const { form: payload } = this;

            this.SAVE_MODEL({
                model,
                payload
            })
                .then(async data => {
                    if (payload.id > 0) {
                        this.UPDATE_MODEL({
                            model,
                            data
                        });
                    } else {
                        await this.fetchItem();
                    }
                    this.selected = [];
                    this.close();
                })
                .catch(errors => {
                    this.$refs.form.setErrors(errors);
                });
        },
        deleteItem: async function() {
            await this.DELETE_MODELS({
                model,
                ids: map(this.selected, "id")
            })
                .then(async () => {
                    await this.fetchItem();
                    this.selected = [];
                    this.dialogDelete = false;
                })
                .catch(e => {});
        },
        childRoute(id) {
            return {
                name: "productPrice",
                params: { id }
            };
        }
    },
    watch: {
        options: {
            handler() {
                this.fetchItem();
            },
            deep: true
        },
        search: debounce(function() {
            this.fetchItem();
        }, 500)
    }
};
</script>

<style></style>
