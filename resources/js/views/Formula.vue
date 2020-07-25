<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="formulas"
            :total="total"
            @unselect="selected = []"
            @fetch="fetch"
            @create="create"
            @edit="edit"
            @delete="dialogDelete = true"
        >
            <template v-slot:item.name="{ item }">
                <v-chip
                    @click="editPercent(item.id)"
                    color="primary"
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

        <the-dialog-form
            v-model="dialog"
            :form="form"
            @close="close"
            @submit="save"
        >
            <validation-observer ref="form">
                <validation-provider name="name" v-slot="{ errors, valid }">
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
            </validation-observer>
        </the-dialog-form>

        <the-dialog-delete
            v-model="dialogDelete"
            :selected="selected"
            :model="model"
            @delete="deleteItem"
            @close="dialogDelete = false"
        >
            <template v-slot="{ item }">
                {{ item.name }}
            </template>
        </the-dialog-delete>

        <the-dialog-form
            v-model="dialogPercent"
            :title="formPercentTitle"
            @close="closePercent"
            @submit="savePercent"
            width="700px"
            readonly
        >
            <validation-observer ref="form_percent">
                <v-row>
                    <v-col cols="12" sm="6">
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
                                :readonly="!form.authorized"
                                :clearable="form.authorized"
                                chips
                                multiple
                                auto-select-first
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
                    <v-col cols="12" sm="6">
                        <validation-provider
                            v-for="(el, key) in form.percents"
                            :key="el.product.id"
                            :name="`formula.${key}.percent`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model.number="el.percent"
                                :label="el.product.name"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="!form.authorized"
                                type="number"
                                suffix="%"
                                hint="This product's percentage"
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>
                    </v-col>
                </v-row>
            </validation-observer>
        </the-dialog-form>
    </v-col>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
} from "../store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Formula } from "../models";
import { eHandler } from "../utils/helper";
import TheDataTable from "../components/TheDataTable.vue";
import TheDialogForm from "../components/TheDialogForm.vue";
import TheDialogDelete from "../components/TheDialogDelete.vue";

const model = "formula";

export default {
    name: model,
    components: {
        TheDataTable,
        TheDialogForm,
        TheDialogDelete,
    },
    data() {
        return {
            model,
            params: {},
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
                    width: 150,
                },
                {
                    text: "Rel.Product",
                    value: "percents_len",
                    align: "center",
                    sortable: false,
                },
                { text: "Creator", value: "user.name" },
                { text: "Updated At", value: "updated_at" },
            ],
            dialog: false,
            dialogDelete: false,
            dialogPercent: false,
            list_products: [],
            form: this.$_.cloneDeep(Formula),
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["formulas"]),
        formPercentTitle() {
            return this.form.name || "Related products";
        },
        totalPercentage() {
            return this.$_.reduce(
                this.form.percents,
                (sum, el) => {
                    return sum + Number(el.percent);
                },
                0
            );
        },
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
        fetchProducts: async function () {
            await this.GET_MODELS({
                model: "product",
                params: {
                    itemsPerPage: -1,
                    temporary: true,
                },
            })
                .then(({ data }) => {
                    this.list_products = this.$_.map(data, ({ id, name }) => {
                        return {
                            product: {
                                id,
                                name,
                            },
                            percent: 0,
                        };
                    });
                })
                .catch((e) => eHandler(e));
        },
        fetch: async function (params) {
            if (params) {
                this.params = params;
            }

            await this.GET_MODELS({
                model,
                params: this.params,
            })
                .then(({ meta }) => {
                    this.total = meta.total;
                })
                .catch((e) => eHandler(e));
        },
        savePercent() {
            // validate
            this.$refs.form_percent.validate().then((valid) => {
                if (valid) {
                    // pass validation
                    this.SAVE_MODEL({
                        url: `formula/${this.form.id}/percent`,
                        payload: {
                            formula: this.$_.map(this.form.percents, (el) => {
                                return {
                                    product_id: el.product.id,
                                    percent: el.percent,
                                };
                            }),
                        },
                    })
                        .then(async (data) => {
                            this.UPDATE_MODEL({
                                model,
                                data,
                            });
                            this.closePercent();
                        })
                        .catch((e) => {
                            let errors = eHandler(e);
                            this.$refs.form_percent.setErrors(errors);
                        });
                }
            });
        },
        save() {
            // validate
            this.$refs.form.validate().then((valid) => {
                if (valid) {
                    // pass validation
                    const { form: payload } = this;
                    // submit to backend
                    this.SAVE_MODEL({
                        model,
                        payload,
                    })
                        .then(async (data) => {
                            if (payload.id > 0) {
                                this.UPDATE_MODEL({
                                    model,
                                    data,
                                });
                            } else {
                                await this.fetch();
                            }
                            this.selected = [];
                            this.close();
                        })
                        .catch((e) => {
                            let errors = eHandler(e);
                            this.$refs.form.setErrors(errors);
                        });
                }
            });
        },
        deleteItem: async function () {
            await this.DELETE_MODELS({
                model,
                ids: this.$_.map(this.selected, "id"),
            })
                .then(async () => {
                    await this.fetch();
                    this.selected = [];
                    this.dialogDelete = false;
                })
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        dialogPercent: function (val) {
            if (val && this.list_products.length == 0) {
                this.fetchProducts();
            }
        },
    },
};
</script>

<style></style>
