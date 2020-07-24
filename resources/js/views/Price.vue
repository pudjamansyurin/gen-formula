<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="prices"
            :total="total"
            @unselect="selected = []"
            @fetch="fetch"
            @create="create"
            @edit="edit"
            @delete="dialogDelete = true"
        >
            <template v-slot:item.price="{ item }">{{
                item.price | currency
            }}</template>
            <template v-slot:item.changed_at="{ item }">{{
                item.changed_at | moment("from")
            }}</template>
        </the-data-table>

        <the-dialog-form
            v-model="dialog"
            :form="form"
            @close="close"
            @submit="save"
        >
            <validation-observer ref="form">
                <validation-provider
                    name="product_id"
                    v-slot="{ errors, valid }"
                >
                    <v-select
                        v-model="form.product_id"
                        :items="list_products"
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
                            @click="$refs.menuChangedAt.save(form.changed_at)"
                            >OK</v-btn
                        >
                    </v-date-picker>
                </v-menu>

                <validation-provider name="price" v-slot="{ errors, valid }">
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
                <span v-if="id > 0">
                    <strong>{{ item.price | currency }}</strong>
                    {{ item.changed_at | moment("from") }}
                </span>
                <span v-else>
                    <strong>{{ item.product.name }}</strong>
                    {{ item.price | currency }}
                </span>
            </template>
        </the-dialog-delete>
    </v-col>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
} from "../store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Price } from "../models";
import { eHandler, castParamsId } from "../utils/helper";
import TheDataTable from "../components/TheDataTable.vue";
import TheDialogForm from "../components/TheDialogForm.vue";
import TheDialogDelete from "../components/TheDialogDelete.vue";

const model = "price";

export default {
    name: model,
    props: ["id"],
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
                { text: "Product", value: "product.name" },
                { text: "Price", value: "price", align: "right", width: 150 },
                { text: "Changed At", value: "changed_at" },
                { text: "Updater", value: "user.name" },
            ],
            dialog: false,
            dialogDelete: false,
            menuChangedAt: false,
            list_products: [],
            form: {},
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["prices"]),
        formTitle() {
            const { id } = this.form;
            return id === -1 ? "New" : "Edit";
        },
        apiUrl() {
            let id = castParamsId(this.id);

            return `product/${id}/${model}`;
        },
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        create() {
            this.form = this.$_.cloneDeep(Price);
            let id = castParamsId(this.id);

            if (id > 0) {
                this.form.product_id = id;
            }
            this.dialog = true;
        },
        edit() {
            this.form = this.$_.cloneDeep(this.selected[0]);
            this.dialog = true;
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.$refs.form.reset();
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
                    this.list_products = this.$_.map(data, (el) =>
                        this.$_.pick(el, ["id", "name"])
                    );
                })
                .catch((e) => eHandler(e));
        },
        fetch: async function (params) {
            if (params) {
                this.params = params;
            }

            await this.GET_MODELS({
                model,
                url: this.apiUrl,
                params: this.params,
            })
                .then(({ meta }) => {
                    const { total } = meta;
                    this.total = total;
                })
                .catch((e) => eHandler(e));
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
                        url: `product/${payload.product_id}/${model}`,
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
                url: this.apiUrl,
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
        dialog: function (val) {
            if (val && this.list_products.length == 0) {
                this.fetchProducts();
            }
        },
    },
};
</script>

<style></style>
