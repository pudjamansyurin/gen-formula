<template>
    <v-col cols="12">
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="formulas"
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
                    color="primary"
                    @click="editPercent(item.id)"
                    :small="dense"
                    >{{ item.name }}</v-chip
                >
            </template>
            <template v-slot:item.updated_at="{ item }">{{
                item.updated_at | moment("from")
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
                                name="name"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    label="Formula name"
                                    type="text"
                                    v-model="form.name"
                                    :error-messages="errors"
                                    :success="valid"
                                    counter
                                    hint="This is to identify the formula"
                                    persistent-hint
                                ></v-text-field>
                            </validation-provider>

                            <validation-provider
                                name="description"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    label="Formula description"
                                    type="text"
                                    v-model="form.description"
                                    :error-messages="errors"
                                    :success="valid"
                                    counter
                                    hint="Short description about the formula"
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

        <v-dialog
            v-model="dialogPercent"
            max-width="700px"
            persistent
            scrollable
        >
            <v-card :loading="!!loading">
                <v-card-title>
                    <span class="headline">{{ formPercentTitle }}</span>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text style="max-height: 500px;">
                    <validation-observer ref="form_percent">
                        <v-form>
                            <v-row>
                                <v-col>
                                    <validation-provider
                                        name="products_id"
                                        rules="required"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-autocomplete
                                            v-model="formPercent"
                                            :items="list_products"
                                            :error-messages="errors"
                                            :success="valid"
                                            :loading="!!loading"
                                            chips
                                            multiple
                                            auto-select-first
                                            clearable
                                            deletable-chips
                                            item-text="name"
                                            item-value="id"
                                            label="Related products"
                                            hint="The related products"
                                            persistent-hint
                                            return-object
                                        ></v-autocomplete>
                                    </validation-provider>

                                    <validation-provider
                                        rules="min_value:100|max_value:100"
                                        name="total_percentage"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-text-field
                                            class="mt-3"
                                            label="Total Percentage"
                                            type="number"
                                            :value="totalPercentage"
                                            :error-messages="errors"
                                            :success="valid"
                                            suffix="%"
                                            hint="This shoudl be 100%"
                                            readonly
                                            filled
                                            persistent-hint
                                        ></v-text-field>
                                    </validation-provider>
                                </v-col>
                                <v-col>
                                    <validation-provider
                                        v-for="(el, key) in formPercent"
                                        :key="el.id"
                                        rules="required|min_value:1|max_value:100"
                                        :name="`percent[${el.id}]`"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-text-field
                                            :label="el.name"
                                            type="number"
                                            v-model.number="el.percent"
                                            :error-messages="errors"
                                            :success="valid"
                                            suffix="%"
                                            hint="This product's percentage"
                                            persistent-hint
                                        ></v-text-field>
                                    </validation-provider>
                                </v-col>
                            </v-row>
                        </v-form>
                    </validation-observer>
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" text @click="closePercent"
                        >Cancel</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        :disabled="!!loading"
                        @click="savePercentItem()"
                        color="primary"
                        large
                        >Save</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-col>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {
    map,
    find,
    pick,
    reduce,
    get,
    clone,
    cloneDeep,
    debounce,
    startCase
} from "lodash";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";
import { TOGGLE_DENSE } from "@/store/app/mutation-types";
import pluralize from "pluralize";
import { Formula } from "@/models";

const model = "formula";

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
                { text: "Creator", value: "user.name" },
                { text: "Updated At", value: "updated_at" }
            ],
            dialogPercent: false,
            list_products: [],
            form: null,
            formPercent: []
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["formulas"]),
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
        formPercentTitle() {
            return get(this.form, "name") || "Related products";
        },
        formDeleteContent() {
            const { length } = this.selected;
            const single = length === 1;

            if (single) {
                return `this ${model} ?`;
            }
            return `these ${length} ${pluralize(model)} ?`;
        },
        totalPercentage() {
            // return reduce(
            //     this.formPercent,
            //     (sum, el) => {
            //         return sum + Number(el.percent);
            //     },
            //     0
            // );
            console.log(this.formPercent);

            return 100;
        }
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DENSE]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        toggleSearch() {
            this.searchBox = !this.searchBox;
            if (!this.searchBox) {
                this.search = "";
            }
        },
        create() {
            this.form = cloneDeep(Formula);
            this.dialog = true;
        },
        edit() {
            this.form = cloneDeep(this.selected[0]);
            this.dialog = true;
        },
        editPercent(id) {
            this.form = cloneDeep(find(this.formulas, { id: id }));
            this.formPercent = [
                ...map(this.form.percents, el => {
                    return {
                        id: el.product.id,
                        name: el.product.name,
                        percent: el.percent
                    };
                })
            ];

            this.dialogPercent = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.$refs.form.reset();
            });
        },
        closePercent() {
            this.dialogPercent = false;
            this.$nextTick(() => {
                this.$refs.form_percent.reset();
            });
        },
        fetchProducts: async function() {
            await this.GET_MODELS({
                model: "product",
                params: {
                    itemsPerPage: -1
                }
            }).then(({ data }) => {
                this.list_products = map(data, el => pick(el, ["id", "name"]));
            });
        },
        fetchItem: async function() {
            await this.GET_MODELS({
                model,
                params: {
                    ...this.options,
                    search: this.search
                }
            }).then(({ meta }) => {
                this.total = meta.total;
            });
        },
        savePercentItem() {
            // validate
            this.$refs.form_percent.validate().then(valid => {
                if (valid) {
                    // this.SAVE_MODEL({
                    //     model,
                    //     payload: this.form
                    // })
                    //     .then(async () => {
                    //         console.log("fetching");
                    //         await this.fetchItem();
                    //         this.selected = [];
                    //         console.log("closing");
                    //         this.close();
                    //     })
                    //     .catch(errors => {
                    //         this.$refs.form.setErrors(errors);
                    //     });
                }
            });
        },
        saveItem() {
            this.SAVE_MODEL({
                model,
                payload: this.form
            })
                .then(async () => {
                    console.log("fetching");

                    await this.fetchItem();
                    this.selected = [];

                    console.log("closing");
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
            });
            await this.fetchItem();
            this.selected = [];
            this.dialogDelete = false;
        }
    },
    mounted() {
        this.fetchProducts();
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
