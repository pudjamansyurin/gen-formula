<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="formulas"
            :total="total"
            @fetch="fetchItem"
            @create="create"
            @edit="edit"
            @delete="dialogDelete = true"
        >
            <template v-slot:item.name="{ item }">
                <v-chip
                    color="primary"
                    @click="editPercent(item.id)"
                    :small="dense"
                    >{{ item.name }}</v-chip
                >
            </template>
            <template v-slot:item.total_price="{ item }">{{
                item.total_price | currency
            }}</template>
            <template v-slot:item.percents_len="{ item }">{{
                item.percents.length
            }}</template>
            <template v-slot:item.updated_at="{ item }">{{
                item.updated_at | moment("from")
            }}</template>
        </the-data-table>

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

        <v-dialog
            v-model="dialogPercent"
            max-width="700px"
            persistent
            scrollable
        >
            <v-card :loading="!!loading">
                <v-card-title class="headline grey lighten-2" primary-title>
                    <span class="headline">{{ formPercentTitle }}</span>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text style="max-height: 500px;">
                    <validation-observer ref="form_percent">
                        <v-form>
                            <v-row>
                                <v-col>
                                    <validation-provider
                                        name="formula"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-autocomplete
                                            v-model="form.percents"
                                            :items="list_products"
                                            :error-messages="errors"
                                            :success="valid"
                                            :loading="!!loading"
                                            chips
                                            multiple
                                            auto-select-first
                                            clearable
                                            deletable-chips
                                            item-text="product.name"
                                            item-value="product.id"
                                            label="Related products"
                                            hint="The related products"
                                            persistent-hint
                                            return-object
                                        ></v-autocomplete>
                                    </validation-provider>

                                    <validation-provider
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
                                        v-for="(el, key) in form.percents"
                                        :key="el.product.id"
                                        :name="`formula.${key}.percent`"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-text-field
                                            :label="el.product.name"
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
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Formula } from "@/models";
import { ajaxErrorHandler } from "../helpers";
import pluralize from "pluralize";
import TheDataTable from "../components/TheDataTable.vue";

const model = "formula";

export default {
    name: model,
    components: {
        TheDataTable
    },
    data() {
        return {
            model,
            params: null,
            total: 0,
            selected: [],
            headers: [
                { text: "Name", value: "name" },
                { text: "Description", value: "description" },
                {
                    text: "Tot.Price",
                    value: "total_price",
                    align: "right",
                    sortable: false,
                    width: 150
                },
                {
                    text: "Rel.Product",
                    value: "percents_len",
                    align: "center",
                    sortable: false
                },
                { text: "Creator", value: "user.name" },
                { text: "Updated At", value: "updated_at" }
            ],
            dialog: false,
            dialogDelete: false,
            dialogPercent: false,
            list_products: [],
            form: this.$_.cloneDeep(Formula)
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["formulas"]),
        formTitle() {
            const { id } = this.form;
            return id === -1 ? "New" : "Edit";
        },
        formPercentTitle() {
            return this.form.name || "Related products";
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
            return this.$_.reduce(
                this.form.percents,
                (sum, el) => {
                    return sum + Number(el.percent);
                },
                0
            );
        }
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        create() {
            this.form = this.$_.cloneDeep(Formula);
            this.dialog = true;
        },
        edit() {
            this.form = this.$_.cloneDeep(this.selected[0]);
            this.dialog = true;
        },
        editPercent(id) {
            this.form = this.$_.cloneDeep(
                this.$_.find(this.formulas, { id: id })
            );
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
                    itemsPerPage: -1,
                    temporary: true
                }
            })
                .then(({ data }) => {
                    this.list_products = this.$_.map(data, ({ id, name }) => {
                        return {
                            product: {
                                id,
                                name
                            },
                            percent: 0
                        };
                    });
                })
                .catch(e => ajaxErrorHandler(e));
        },
        fetchItem: async function(params) {
            if (params) {
                this.params = params;
            }

            await this.GET_MODELS({
                model,
                params: this.params
            })
                .then(({ meta }) => {
                    this.total = meta.total;
                })
                .catch(e => ajaxErrorHandler(e));
        },
        savePercentItem() {
            // validate
            this.$refs.form_percent.validate().then(valid => {
                if (valid) {
                    this.SAVE_MODEL({
                        url: `formula/${this.form.id}/percent`,
                        payload: {
                            formula: this.$_.map(this.form.percents, el => {
                                return {
                                    product_id: el.product.id,
                                    percent: el.percent
                                };
                            })
                        }
                    })
                        .then(async data => {
                            this.UPDATE_MODEL({
                                model,
                                data
                            });
                            this.closePercent();
                        })
                        .catch(e => {
                            let errors = ajaxErrorHandler(e);
                            this.$refs.form_percent.setErrors(errors);
                        });
                }
            });
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
                .catch(e => {
                    let errors = ajaxErrorHandler(e);
                    this.$refs.form.setErrors(errors);
                });
        },
        deleteItem: async function() {
            await this.DELETE_MODELS({
                model,
                ids: this.$_.map(this.selected, "id")
            })
                .then(async () => {
                    await this.fetchItem();
                    this.selected = [];
                    this.dialogDelete = false;
                })
                .catch(e => ajaxErrorHandler(e));
        }
    },
    watch: {
        dialogPercent: function(val) {
            if (val && this.list_products.length == 0) {
                this.fetchProducts();
            }
        }
    }
};
</script>

<style></style>
