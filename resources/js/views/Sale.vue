<template>
    <fragment>
        <app-top-bar
            v-model="options"
            :selected.sync="selected"
            :page="model"
            @edit="edit"
            @create="create"
            @delete="dialogDelete = true"
            mine-tab
            crud
        ></app-top-bar>

        <the-data
            v-model="selected"
            :items="sales"
            :options.sync="options"
            :headers="headers"
            :total="total"
            :model="model"
        >
            <template v-slot:card="{ item }">
                <v-btn
                    @click="edit(item)"
                    :color="chipColor(item)"
                    :outlined="!item.selected"
                    absolute
                    top
                    right
                    small
                    tile
                >
                    {{ item.rev.price | currency }}
                </v-btn>
                <v-card-text>
                    <div class="overline">
                        {{ item.updated_at | moment("from") }}
                    </div>
                    <div class="overline">
                        {{ item.user.name }}
                    </div>
                    <div class="subtitle-2 font-weight-bold">
                        {{ item.name }}
                    </div>
                </v-card-text>
            </template>

            <template v-slot:[`item.name`]="{ item }">
                <v-chip
                    @click="edit(item)"
                    :color="chipColor(item)"
                    :small="dense"
                    dark
                >
                    {{ item.name }}
                </v-chip>
            </template>
            <template v-slot:[`item.rev.price`]="{ item }">
                {{ item.rev.price | currency }}
            </template>
            <template v-slot:[`item.updated_at`]="{ item }">
                {{ item.updated_at | moment("from") }}
            </template>
        </the-data>

        <the-dialog-delete
            v-model="dialogDelete"
            :selected="selected"
            :model="model"
            @delete="remove"
            @close="dialogDelete = false"
        >
            <template v-slot="{ item }">{{ item.name }}</template>
        </the-dialog-delete>

        <the-dialog-form
            v-model="dialog"
            :form="form"
            :tabs="formTabs"
            :tab.sync="formTabIndex"
            :readonly="fieldDisabled"
            @close="close"
            @submit="save"
            :width="formWidth"
        >
            <template v-slot:DATA>
                <v-form @submit.prevent="save">
                    <validation-observer ref="form">
                        <validation-provider
                            name="name"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model="form.name"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                :filled="fieldDisabled"
                                label="Sale name"
                                type="text"
                                hint="This is to identify the sale"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

                        <validation-provider
                            name="component"
                            v-slot="{ errors, valid }"
                        >
                            <v-radio-group
                                :value="form._products.length"
                                @change="onComponentChange"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                :filled="fieldDisabled"
                                :row="!mobile"
                                hide-details="auto"
                            >
                                <template v-slot:label>
                                    <div class="caption">Component :</div>
                                </template>
                                <v-radio label="1 Product" :value="1"></v-radio>
                                <v-radio label="2 Product" :value="2"></v-radio>
                            </v-radio-group>
                        </validation-provider>
                        <v-divider class="mt-1"></v-divider>

                        <v-row v-if="form._products">
                            <v-col
                                v-for="(product, index) in form._products"
                                :key="index"
                            >
                                <v-card outlined>
                                    <v-card-text>
                                        <validation-provider
                                            :name="`_products.${index}.formula_id`"
                                            v-slot="{ errors, valid }"
                                        >
                                            <v-autocomplete
                                                v-model="product.formula"
                                                :items="listFormula"
                                                :error-messages="errors"
                                                :success="valid"
                                                :readonly="fieldDisabled"
                                                :filled="fieldDisabled"
                                                item-text="name"
                                                item-value="id"
                                                label="Formula"
                                                hint="The formulas"
                                                persistent-hint
                                                chips
                                                return-object
                                            ></v-autocomplete>
                                        </validation-provider>

                                        <div
                                            v-if="product.formula"
                                            class="mt-2 mb-4"
                                        >
                                            <v-chip label>
                                                {{
                                                    product.formula.rev.price
                                                        | currency
                                                }}
                                                / KG
                                            </v-chip>
                                            <v-chip label>
                                                {{
                                                    product.formula.rev
                                                        .price_liter | currency
                                                }}
                                                / L
                                            </v-chip>
                                        </div>

                                        <validation-provider
                                            :name="`_products.${index}.package_id`"
                                            v-slot="{ errors, valid }"
                                        >
                                            <v-autocomplete
                                                v-model="product.package"
                                                :items="listPackage"
                                                :error-messages="errors"
                                                :success="valid"
                                                :readonly="fieldDisabled"
                                                :filled="fieldDisabled"
                                                item-text="name"
                                                item-value="id"
                                                label="Package"
                                                hint="The packages"
                                                persistent-hint
                                                chips
                                                return-object
                                            ></v-autocomplete>
                                        </validation-provider>

                                        <div
                                            v-if="product.package"
                                            class="mt-2 mb-4"
                                        >
                                            <v-chip label>
                                                {{
                                                    product.package.rev.price
                                                        | currency
                                                }}
                                            </v-chip>
                                            <v-chip label>
                                                {{ product.package.capacity }}
                                                {{ product.package.unit.name }}
                                            </v-chip>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </validation-observer>
                    <v-btn v-show="false" type="submit"></v-btn>
                </v-form>
            </template>

            <template v-slot:REV>
                <v-timeline dense clipped>
                    <v-timeline-item
                        v-for="(rev, index) in form.revs"
                        :key="rev.id"
                        :color="index === 0 ? 'primary' : 'grey'"
                        small
                    >
                        <v-card class="elevation-2">
                            <v-card-subtitle class="py-2">
                                <v-row no-gutters>
                                    <v-col>
                                        <b v-if="rev.user">
                                            {{ rev.user.name }}
                                        </b>
                                    </v-col>
                                    <v-col class="text-right">
                                        {{ rev.updated_at | moment("from") }}
                                    </v-col>
                                </v-row>
                            </v-card-subtitle>
                            <v-card-text>
                                <v-chip :color="index === 0 ? 'primary' : ''">
                                    {{ rev.price | currency }}
                                </v-chip>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import pluralize from "pluralize";

import { Sale } from "../models";
import { eHandler } from "../utils/helper";
import {
    CommonMixin,
    ModelMixin,
    FormTabMixin,
    FetchListMixin,
} from "../mixins";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin, FormTabMixin, FetchListMixin],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "sale",
            modelDefault: Sale,
            form: this.$_.cloneDeep(Sale),
            headers: [
                { text: "Name", value: "name" },
                {
                    text: "Price",
                    value: "rev.price",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Rev",
                    value: "revs_count",
                    align: "center",
                },
                // {
                //     text: "Formula",
                //     value: "formulas_count",
                //     align: "center",
                // },
                { text: "Creator", value: "user.name" },
                {
                    text: "UpdatedAt",
                    value: "updated_at",
                },
            ],

            listPackage: [],
            listFormula: [],
        };
    },
    computed: {
        ...mapState("model", ["sales"]),
        formWidth() {
            let { _products } = this.form;
            if (_products && _products.length > 1) {
                return 1000;
            }
            return 700;
        },
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.form = this.$_.cloneDeep(item);
        },
        onCreate() {
            this.change(this.modelDefault);
        },
        onEdit(item) {
            this.change(item || this.selected[0]);
            this.fetchDetail();
        },
        fetchDetail() {
            this.GET_MODEL({
                model: this.model,
                id: this.form.id,
            }).then((data) => {
                this.form = {
                    ...this.$_.cloneDeep(data),
                    _products: this.makeProductsDetail(data.products),
                };
            });
        },
        makeProductsDetail(products) {
            return products.map(({ id, package_id, ratio }) => ({
                id,
                package_id,
                ratio,
            }));
        },
        onComponentChange(value) {
            if (value == 2) {
                let data = this.$_.cloneDeep(Sale._products[0]);
                this.form._products.push(data);
            } else {
                this.form._products.pop();
            }
        },
    },
    mounted() {
        this.fetchList("package")
            .then((data) => (this.listPackage = data))
            .catch((e) => eHandler(e));
        this.fetchList("formula")
            .then((data) => (this.listFormula = data))
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
