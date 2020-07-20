<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="prices"
            :total="total"
            @fetch="fetchItem"
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
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Price } from "@/models";
import { ajaxErrorHandler, castParamsId } from "../helpers";
import pluralize from "pluralize";
import TheDataTable from "../components/TheDataTable.vue";

const model = "price";

export default {
    name: model,
    props: ["id"],
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
                { text: "Product", value: "product.name" },
                { text: "Price", value: "price", align: "right", width: 150 },
                { text: "Changed At", value: "changed_at" },
                { text: "Updater", value: "user.name" }
            ],
            dialog: false,
            dialogDelete: false,
            menuChangedAt: false,
            list_products: [],
            form: null
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["prices"]),
        formTitle() {
            const { id } = this.form;
            return id === -1 ? "New" : "Edit";
        },
        formDeleteContent() {
            const { length } = this.selected;
            const single = length === 1;

            if (single) {
                return `this ${this.$_.startCase(model)} ?`;
            }
            return `these ${length} ${pluralize(this.$_.startCase(model))} ?`;
        },
        apiUrl() {
            let id = castParamsId(this.id);

            return `product/${id}/${model}`;
        }
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
        fetchProducts: async function() {
            await this.GET_MODELS({
                model: "product",
                params: {
                    itemsPerPage: -1,
                    temporary: true
                }
            })
                .then(({ data }) => {
                    this.list_products = this.$_.map(data, el =>
                        this.$_.pick(el, ["id", "name"])
                    );
                })
                .catch(e => ajaxErrorHandler(e));
        },
        fetchItem: async function(params) {
            if (params) {
                this.params = params;
            }

            await this.GET_MODELS({
                model,
                url: this.apiUrl,
                params: this.params
            })
                .then(({ meta }) => {
                    const { total } = meta;
                    this.total = total;
                })
                .catch(e => ajaxErrorHandler(e));
        },
        saveItem() {
            const { form: payload } = this;

            this.SAVE_MODEL({
                model,
                payload,
                url: `product/${payload.product_id}/${model}`
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
                url: this.apiUrl,
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
        dialog: function(val) {
            if (val && this.list_products.length == 0) {
                this.fetchProducts();
            }
        }
    }
};
</script>

<style></style>
