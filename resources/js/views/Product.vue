<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="products"
            :total="total"
            @unselect="selected = []"
            @fetch="fetch"
            @create="create"
            @edit="edit"
            @delete="dialogDelete = true"
        >
            <template v-slot:item.name="{ item }">
                <v-chip
                    :to="childRoute(item.id)"
                    :color="item.prices.length ? 'green' : 'red'"
                    :small="dense"
                    >{{ item.name }}</v-chip
                >
            </template>
            <template v-slot:item.price_latest="{ item }">{{
                item.price_latest | currency
            }}</template>
            <template v-slot:item.price_count="{ item }">{{
                item.prices.length
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
import { Product } from "../models";
import { eHandler } from "../utils/helper";
import pluralize from "pluralize";
import TheDataTable from "../components/TheDataTable.vue";
import TheDialogForm from "../components/TheDialogForm.vue";
import TheDialogDelete from "../components/TheDialogDelete.vue";

const model = "product";

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
                    text: "Last.Price",
                    value: "price_latest",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Tot.Price",
                    value: "price_count",
                    align: "center",
                    sortable: false,
                },
                { text: "Creator", value: "user.name" },
                { text: "Updated At", value: "updated_at" },
            ],
            dialog: false,
            dialogDelete: false,
            form: {},
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["products"]),
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        create() {
            this.form = this.$_.cloneDeep(Product);
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
        childRoute(id) {
            return {
                name: "price",
                params: { id },
            };
        },
    },
};
</script>

<style></style>
