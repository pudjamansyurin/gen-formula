<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="products"
            :total="total"
            @fetch="fetchItem"
            @create="create"
            @edit="edit"
            @delete="dialogDelete = true"
        >
            <template v-slot:item.name="{ item }">
                <v-chip
                    :to="childRoute(item.id)"
                    color="primary"
                    :small="dense"
                    >{{ item.name }}</v-chip
                >
            </template>
            <template v-slot:item.latest_price="{ item }">{{
                item.latest_price | currency
            }}</template>
            <template v-slot:item.prices_len="{ item }">{{
                item.prices.length
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
import { Product } from "@/models";
import { ajaxErrorHandler } from "../helpers";
import pluralize from "pluralize";
import TheDataTable from "../components/TheDataTable.vue";

const model = "product";

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
                    text: "Last.Price",
                    value: "latest_price",
                    align: "right",
                    sortable: false,
                    width: 150
                },
                {
                    text: "Tot.Price",
                    value: "prices_len",
                    align: "center",
                    sortable: false
                },
                { text: "Creator", value: "user.name" },
                { text: "Updated At", value: "updated_at" }
            ],
            dialog: false,
            dialogDelete: false,
            form: null
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        ...mapState("model", ["products"]),
        formTitle() {
            const { id } = this.form;
            return id === -1 ? "New" : "Edit";
        },
        formDeleteContent() {
            const { length } = this.selected;
            const single = length === 1;

            if (single) {
                return `this ${model} ?`;
            }
            return `these ${length} ${pluralize(model)} ?`;
        }
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
        fetchItem: async function() {
            await this.GET_MODELS({
                model,
                params: {
                    ...this.options,
                    search: this.search
                }
            })
                .then(({ meta }) => {
                    this.total = meta.total;
                })
                .catch(e => ajaxErrorHandler(e));
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
        },
        childRoute(id) {
            return {
                name: "price",
                params: { id }
            };
        }
    }
};
</script>

<style></style>
