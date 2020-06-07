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
            show-select
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

                    <v-toolbar-title>
                        {{
                            selected.length
                                ? `${selected.length} selected`
                                : "Products"
                        }}
                    </v-toolbar-title>
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
                                <v-icon>{{
                                    searchBox
                                        ? "mdi-magnify-close"
                                        : "mdi-magnify"
                                }}</v-icon>
                            </v-btn>
                        </template>
                        <span>Search</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-show="!selected.length"
                                @click="dialog = true"
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
                            <v-btn
                                v-show="selected.length == 1"
                                @click="editItem"
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
            <template v-slot:item.updated_at="{ item }">
                {{ item.updated_at | moment("from") }}
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    v-model="editedItem.name"
                                    label="Product name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="290" scrollable>
            <v-card>
                <v-card-title>Confirmation</v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle class="mt-2">
                    Are you sure to delete
                    {{
                        singleSelect
                            ? "this product ?"
                            : `these ${selected.length} products ?`
                    }}
                </v-card-subtitle>
                <v-card-text style="height: 300px;">
                    <v-list dense>
                        <v-list-item-group>
                            <template v-for="item in selected">
                                <v-list-item :key="`item-${item.id}`">
                                    <v-list-item-content>
                                        <v-list-item-title
                                            v-text="item.name"
                                        ></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider
                                    :key="`divider-${item.id}`"
                                ></v-divider>
                            </template>
                        </v-list-item-group>
                    </v-list>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="darken-1" @click="deleteDialog = false" text>
                        Cancel
                    </v-btn>

                    <v-btn color="red" @click="deleteItem" dark>
                        Yes, sure
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { actions } from "@/store/product/types";
import { map } from "lodash";

const { GET_PRODUCTS } = actions;

export default {
    name: "Product",
    data() {
        return {
            searchBox: false,
            search: "",
            total: 0,
            options: {},
            selected: [],
            headers: [
                {
                    text: "Name",
                    // align: "start",
                    // sortable: false,
                    value: "name"
                },
                { text: "Creator", value: "creator" },
                { text: "Updated At", value: "updated_at" }
            ],
            dialog: false,
            deleteDialog: false,
            editedIndex: -1,
            defaultItem: {
                name: ""
            },
            editedItem: {
                name: ""
            }
        };
    },
    computed: {
        ...mapState("app", ["loading"]),
        ...mapState("product", ["products"]),
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
        singleSelect() {
            return this.selected.length === 1;
        }
    },
    methods: {
        ...mapActions("product", [GET_PRODUCTS]),
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
            const item = this.selected[0];
            this.editedIndex = item.id;
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem() {
            const indexes = map(this.selected, "id");
            console.log(indexes);
            let action = confirm("Are you sure you want to delete this item?");
            console.log(action);

            // this.products.splice(index, 1);
            this.deleteDialog = false;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        save() {
            if (this.editedIndex > -1) {
                console.log("updating...");
                // Object.assign(this.products[this.editedIndex], this.editedItem);
            } else {
                console.log("creating...");
                // this.products.push(this.editedItem);
            }
            this.close();
        }
    },
    mounted() {
        this.fetch();
    },
    watch: {
        options: {
            handler() {
                this.fetch();
            },
            deep: true
        }
        // dialog(val) {
        //     val || this.close();
        // }
    }
};
</script>

<style></style>
