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
            show-select
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

                    <v-toolbar-title>{{toolbarTitle}}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>

                    <v-spacer></v-spacer>

                    <v-scroll-x-transition>
                        <v-text-field
                            v-show="!selected.length && searchBox"
                            v-model="search"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-scroll-x-transition>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-show="!selected.length"
                                @click="toggleSearchBox"
                                v-on="on"
                                icon
                            >
                                <v-icon>mdi-magnify{{ searchBox ? "-close" : "" }}</v-icon>
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
                                @click="deleteDialog = true"
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
                            <v-btn v-show="selected.length == 1" @click="editItem" v-on="on" icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit</span>
                    </v-tooltip>
                </v-toolbar>
            </template>
            <template v-slot:item.updated_at="{ item }">{{ item.updated_at | moment("from") }}</template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500px" persistent>
            <validation-observer v-slot="{ invalid, validated, handleSubmit }" ref="form">
                <v-form @submit.prevent="handleSubmit(save())">
                    <v-card :loading="!!loading">
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                            <validation-provider
                                name="name"
                                rules="required|min:3"
                                v-slot="{ errors, valid }"
                            >
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

                            <validation-provider
                                name="description"
                                rules="required|min:5"
                                v-slot="{ errors, valid }"
                            >
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
                                :disabled="invalid || !validated || !!loading"
                                type="submit"
                                color="primary"
                                large
                            >Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </validation-observer>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="290" persistent scrollable>
            <v-card :loading="!!loading">
                <v-card-title>Confirmation</v-card-title>
                <v-divider></v-divider>

                <v-card-text class="pt-2" style="max-height: 300px;">
                    Are you sure to delete {{ formDeleteContent }}
                    <v-chip-group column small active-class="primary--text">
                        <v-chip v-for="item in selected" :key="item.id">{{ item.name }}</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="darken-1" @click="deleteDialog = false" text>Cancel</v-btn>
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
import { actions } from "@/store/product/types";
import { map, cloneDeep } from "lodash";
import Product from "@/models/product";

const { GET_PRODUCTS, SAVE_PRODUCT, DELETE_PRODUCTS } = actions;

export default {
    name: "Product",
    data() {
        return {
            dense: true,
            searchBox: false,
            dialog: false,
            deleteDialog: false,
            total: 0,
            search: "",
            options: {},
            selected: [],
            headers: [
                { text: "Name", value: "name" },
                { text: "Description", value: "description" },
                { text: "Creator", value: "creator" },
                { text: "Updated At", value: "updated_at" }
            ],
            form: cloneDeep(Product)
        };
    },
    computed: {
        ...mapState("app", ["loading"]),
        ...mapState("product", ["products"]),
        toolbarTitle() {
            const { length } = this.selected;

            if (length > 0) {
                return `${length} selected`;
            }
            return "Products";
        },
        formTitle() {
            const { id } = this.form;
            return id === -1 ? "New Item" : "Edit Item";
        },
        formDeleteContent() {
            const { length } = this.selected;
            const single = length === 1;

            if (single) {
                return "this product ?";
            }
            return `these ${length} products ?`;
        }
    },
    methods: {
        ...mapActions("product", [GET_PRODUCTS, SAVE_PRODUCT, DELETE_PRODUCTS]),
        fetch() {
            this.GET_PRODUCTS(this.options).then(total => {
                this.total = total;
            });
        },
        toggleSearchBox() {
            this.searchBox = !this.searchBox;
            if (!this.searchBox) {
                this.search = "";
            }
        },
        editItem() {
            this.form = cloneDeep(this.selected[0]);
            this.dialog = true;
        },
        deleteItem() {
            const ids = map(this.selected, "id");
            this.DELETE_PRODUCTS(ids).then(_ => {
                this.deleteDialog = false;
            });
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.form = cloneDeep(Product);
                this.$refs.form.reset();
            });
        },
        save() {
            this.SAVE_PRODUCT(this.form).then(_ => {
                this.close();
            });
        }
    },
    mounted() {
        this.fetch();
    },
    watch: {
        // options: {
        //     handler() {
        //         this.fetch();
        //     },
        //     deep: true
        // }
        // dialog(val) {
        //     val || this.close();
        // }
    }
};
</script>

<style></style>
