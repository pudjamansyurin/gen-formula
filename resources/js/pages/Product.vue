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
                <v-toolbar
                    :color="selected.length ? 'grey darken-4' : 'white'"
                    :dark="!!selected.length"
                    flat
                >
                    <template v-if="!selected.length">
                        <v-toolbar-title>Products</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-scroll-x-transition>
                            <v-text-field
                                v-if="searchBox"
                                v-model="search"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-scroll-x-transition>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    @click="toggleSearchBox"
                                    color="primary"
                                    v-on="on"
                                    icon
                                >
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </template>
                            <span>Search</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    @click="dialog = true"
                                    color="green"
                                    v-on="on"
                                    icon
                                >
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <span>Create</span>
                        </v-tooltip>
                    </template>

                    <template v-else>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn @click="selected = []" v-on="on" icon>
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </template>
                            <span>Cancel</span>
                        </v-tooltip>

                        <v-toolbar-title>
                            {{ `${selected.length} selected` }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="red" v-on="on" icon>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </template>
                            <span>Delete</span>
                        </v-tooltip>

                        <v-tooltip v-if="selected.length == 1" bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" color="blue" icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit</span>
                        </v-tooltip>
                    </template>
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
                                    label="Dessert name"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    v-model="editedItem.calories"
                                    label="Calories"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    v-model="editedItem.fat"
                                    label="Fat (g)"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    v-model="editedItem.carbs"
                                    label="Carbs (g)"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    v-model="editedItem.protein"
                                    label="Protein (g)"
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
    </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { actions } from "@/store/product/types";

const { GET_PRODUCTS } = actions;

export default {
    name: "Product",
    data() {
        return {
            dialog: false,
            editedIndex: -1,
            editedItem: {
                name: "",
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
            defaultItem: {
                name: "",
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0
            },
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
            ]
        };
    },
    computed: {
        ...mapState("app", ["loading"]),
        ...mapState("product", ["products"]),
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            const index = this.desserts.indexOf(item);
            confirm("Are you sure you want to delete this item?") &&
                this.desserts.splice(index, 1);
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
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            } else {
                this.desserts.push(this.editedItem);
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
        },
        // dialog(val) {
        //     val || this.close();
        // },
        selected(val) {
            console.log(val);
        }
    }
};
</script>

<style></style>
