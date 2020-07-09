<template>
    <v-col cols="12">
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="productPrices"
            :search="search"
            :options.sync="options"
            :server-items-length="total"
            :loading="!!loading"
            :dense="dense"
            :page="1"
            :items-per-page="10"
            sort-by="changed_at"
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

            <template v-slot:item.price="{ item }">{{
                item.price | currency
            }}</template>

            <template v-slot:item.changed_at="{ item }">{{
                item.changed_at | moment("from")
            }}</template>
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
                            <validation-provider
                                name="product_id"
                                v-slot="{ errors, valid }"
                            >
                                <v-select
                                    v-model="form.product_id"
                                    :items="parentItems"
                                    :readonly="id > 0"
                                    :error-messages="errors"
                                    :success="valid"
                                    :loading="!!loading"
                                    chips
                                    item-text="name"
                                    item-value="id"
                                    label="Product"
                                    hint="The product being updated"
                                    persistent-hint
                                ></v-select>
                            </validation-provider>

                            <v-menu
                                ref="menuChangedAt"
                                v-model="menuChangedAt"
                                :return-value.sync="form.changed_at"
                                :close-on-content-click="false"
                                min-width="290px"
                                offset-y
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <validation-provider
                                        name="changed_at"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-text-field
                                            v-model="form.changed_at"
                                            :error-messages="errors"
                                            :success="valid"
                                            label="Changed At"
                                            hint="When the price changed"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </validation-provider>
                                </template>
                                <v-date-picker
                                    v-model="form.changed_at"
                                    :max="$moment().format('YYYY-MM-DD')"
                                    no-title
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menuChangedAt = false"
                                        >Cancel</v-btn
                                    >
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="
                                            $refs.menuChangedAt.save(
                                                form.changed_at
                                            )
                                        "
                                        >OK</v-btn
                                    >
                                </v-date-picker>
                            </v-menu>

                            <validation-provider
                                name="price"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    label="Product price"
                                    type="number"
                                    v-model.number="form.price"
                                    :error-messages="errors"
                                    :success="valid"
                                    prefix="Rp"
                                    counter
                                    hint="The updated product price"
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
                                :disabled="invalid || !!loading"
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
                <v-card-title>Confirmation</v-card-title>
                <v-divider></v-divider>

                <v-card-text class="pt-2" style="max-height: 300px;">
                    Are you sure to delete {{ formDeleteContent }}
                    <v-chip-group column small active-class="primary--text">
                        <v-chip v-for="item in selected" :key="item.id">
                            <span v-if="id > 0">
                                <strong>{{ item.price | currency }}</strong>
                                {{ item.changed_at | moment("from") }}
                            </span>
                            <span v-else>
                                <strong>{{ item.product.name }}</strong>
                                {{ item.price | currency }}
                            </span>
                        </v-chip>
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
import { map, clone, cloneDeep, debounce, kebabCase, startCase } from "lodash";
import {
    GET_MODEL,
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";
import { TOGGLE_DENSE } from "@/store/app/mutation-types";
import pluralize from "pluralize";
import { ProductPrice } from "@/models";

const model = "productPrice";

export default {
    name: model,
    props: {
        id: Number
    },
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
                { text: "Product", value: "product.name" },
                { text: "Price", value: "price", align: "right" },
                { text: "Changed At", value: "changed_at" },
                { text: "Updater", value: "user.name" }
            ],
            menuChangedAt: false,
            parentItems: [],
            form: null
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["productPrices"]),
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
                return `this ${startCase(model)} ?`;
            }
            return `these ${length} ${pluralize(startCase(model))} ?`;
        },
        apiUrl() {
            let models = kebabCase(model).split("-");

            return `${models[0]}/${this.id}/${models[1]}`;
        }
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DENSE]),
        ...mapActions("model", [
            GET_MODEL,
            GET_MODELS,
            SAVE_MODEL,
            DELETE_MODELS
        ]),
        toggleSearch() {
            this.searchBox = !this.searchBox;
            if (!this.searchBox) {
                this.search = "";
            }
        },
        create() {
            this.form = cloneDeep(ProductPrice);
            if (this.id > 0) {
                this.form.product_id = this.id;
            }

            this.dialog = true;
        },
        edit() {
            this.form = cloneDeep(this.selected[0]);
            this.parentItems.splice(0, 1, this.form.product);

            console.log(this.form);

            this.dialog = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.$refs.form.reset();
            });
        },
        fetchParent: async function() {
            await this.GET_MODELS({
                model: "product",
                params: {
                    itemsPerPage: -1
                }
            }).then(({ data }) => {
                this.childItems = map(data, ({ id, name }) => {
                    return {
                        id,
                        name
                    };
                });
            });
        },
        fetchItem: async function() {
            await this.GET_MODELS({
                model,
                url: this.apiUrl,
                params: {
                    ...this.options,
                    search: this.search
                }
            }).then(({ meta }) => {
                const { total } = meta;
                this.total = total;
            });
        },
        saveItem() {
            this.SAVE_MODEL({
                model,
                url: this.apiUrl,
                payload: this.form
            })
                .then(async () => {
                    await this.fetchItem();
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
                url: this.apiUrl,
                ids: map(this.selected, "id")
            });
            await this.fetchItem();
            this.selected = [];
            this.dialogDelete = false;
        }
    },
    mounted() {
        this.fetchParent();
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
