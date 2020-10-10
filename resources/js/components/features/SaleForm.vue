<template>
    <v-form @submit.prevent="$emit('save')">
        <validation-observer ref="form">
            <v-row>
                <v-col cols="12" sm="6">
                    <validation-provider name="name" v-slot="{ errors, valid }">
                        <v-text-field
                            v-model="form.name"
                            :error-messages="errors"
                            :success="valid"
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            :autofocus="!mobile"
                            label="Sale name"
                            type="text"
                            hint="This is to identify the sale"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-alert
                        color="primary"
                        class="py-4 my-0"
                        dense
                        outlined
                        text
                    >
                        <span class="caption">Total RMP</span><br />
                        <b>{{ priceTotal.toFixed(2) | currency }}</b>
                    </v-alert>
                </v-col>
            </v-row>

            <validation-provider name="_products" v-slot="{ errors, valid }">
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
                    cols="12"
                    :sm="12 / form._products.length"
                    v-for="(product, index) in form._products"
                    :key="index"
                >
                    <v-card outlined>
                        <v-card-text>
                            <v-row class="mb-3" no-gutters>
                                <v-col cols="12">
                                    <validation-provider
                                        :name="`_products.${index}.package_id`"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-autocomplete
                                            v-model="product.package"
                                            :items="
                                                index == 0
                                                    ? listPackage
                                                    : listPackageSecond
                                            "
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
                                            attach
                                            return-object
                                        ></v-autocomplete>
                                    </validation-provider>
                                </v-col>
                                <v-col cols="12" v-if="product.package">
                                    <v-chip color="primary" dark label>
                                        {{
                                            product.package.rev.price | currency
                                        }}
                                    </v-chip>
                                    <v-chip
                                        :color="index == 0 ? 'primary' : ''"
                                        :dark="index == 0"
                                        label
                                    >
                                        {{ product.package.capacity }}
                                        {{ product.package.unit.name }}
                                    </v-chip>
                                </v-col>
                            </v-row>

                            <v-row
                                v-if="product.package"
                                class="mb-3"
                                no-gutters
                            >
                                <v-col cols="12">
                                    <validation-provider
                                        :name="`_products.${index}.formula_id`"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-autocomplete
                                            v-model="product.formula"
                                            :items="
                                                index == 0
                                                    ? listFormula
                                                    : listFormulaSecond
                                            "
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
                                            attach
                                            return-object
                                        ></v-autocomplete>
                                    </validation-provider>
                                </v-col>
                                <v-col cols="12" v-if="product.formula">
                                    <v-chip
                                        :color="
                                            saleUnitSymbol == 'KG'
                                                ? 'primary'
                                                : ''
                                        "
                                        :dark="saleUnitSymbol == 'KG'"
                                        label
                                    >
                                        {{
                                            product.formula.rev.price | currency
                                        }}
                                        / KG
                                    </v-chip>
                                    <v-chip
                                        :color="
                                            saleUnitSymbol == 'L'
                                                ? 'primary'
                                                : ''
                                        "
                                        :dark="saleUnitSymbol == 'L'"
                                        label
                                    >
                                        {{
                                            product.formula.rev.price_liter
                                                | currency
                                        }}
                                        / L
                                    </v-chip>
                                </v-col>
                            </v-row>

                            <v-row
                                v-if="product.formula"
                                class="mb-3"
                                no-gutters
                            >
                                <v-col cols="12">
                                    <validation-provider
                                        v-if="form._products.length > 1"
                                        :name="`_products.${index}.ratio`"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-text-field
                                            v-model.number="product.ratio"
                                            :error-messages="errors"
                                            :success="valid"
                                            :readonly="fieldDisabled"
                                            :filled="fieldDisabled"
                                            label="Filled Ratio"
                                            type="number"
                                            hint="The product filled ratio"
                                            persistent-hint
                                        ></v-text-field>
                                    </validation-provider>
                                    <validation-provider
                                        v-else
                                        :name="`filled`"
                                        v-slot="{ errors, valid }"
                                    >
                                        <v-text-field
                                            v-model.number="form.filled"
                                            :error-messages="errors"
                                            :success="valid"
                                            :readonly="fieldDisabled"
                                            :filled="fieldDisabled"
                                            label="Filled Percentage"
                                            type="number"
                                            prefix="%"
                                            hint="The product filled percentage"
                                            persistent-hint
                                            reverse
                                        ></v-text-field>
                                    </validation-provider>
                                </v-col>
                                <v-col cols="12" v-if="saleReady">
                                    <v-chip color="primary" dark label>
                                        {{ calcProductRMP(product) | currency }}
                                    </v-chip>
                                    <v-chip label>
                                        {{
                                            calcProductFilled(
                                                product.ratio
                                            ).toFixed(2)
                                        }}
                                        /
                                        {{ product.package.capacity }}
                                        {{ product.package.unit.name }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </validation-observer>
        <v-btn v-show="false" type="submit"></v-btn>
    </v-form>
</template>

<script>
import { CommonMixin } from "../../mixins";
import { cloneDeep } from "lodash";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Object,
            required: true,
        },
        modelDefault: {
            type: Object,
            required: true,
        },
        fieldDisabled: {
            type: Boolean,
            default: false,
        },
        listPackage: {
            type: Array,
            default: () => [],
        },
        listFormula: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        form: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        validator() {
            return this.$refs.form;
        },
        listPackageSecond() {
            let { package: pkg } = this.form._products[0];

            if (this.saleUnitSymbol && pkg) {
                return this.listPackage
                    .filter(({ unit }) => unit.symbol == this.saleUnitSymbol)
                    .filter(({ id }) => id != pkg.id);
            }
            return this.listPackage;
        },
        listFormulaSecond() {
            let { formula } = this.form._products[0];

            if (formula) {
                return this.listFormula.filter(({ id }) => id != formula.id);
            }
            return this.listFormula;
        },
        salePackage() {
            return this.form._products[0].package;
        },
        saleUnitSymbol() {
            if (this.salePackage) {
                return this.salePackage.unit.symbol;
            }
            return;
        },
        saleCapacity() {
            if (this.salePackage) {
                return Number(this.salePackage.capacity);
            }
            return 0;
        },
        saleFilled() {
            return (Number(this.form.filled) * this.saleCapacity) / 100;
        },
        saleRatio() {
            return this.form._products.reduce(
                (carry, { ratio }) => carry + Number(ratio),
                0
            );
        },
        saleReady() {
            let { _products, filled } = this.form;

            // skip if has empty field
            return !(
                !filled ||
                _products.some(
                    ({ package: pkg, formula, ratio }) =>
                        !pkg || !formula || !ratio
                )
            );
        },
        priceTotal() {
            // skip if has empty field
            if (!this.saleReady) {
                return 0;
            }

            // calculating
            return this.form._products.reduce(
                (carry, product) => carry + this.calcProductRMP(product),
                0
            );
        },
    },
    methods: {
        getProductRMCS({ price, price_liter }) {
            return Number(this.saleUnitSymbol == "KG" ? price : price_liter);
        },
        calcProductFilled(ratio) {
            return (Number(ratio) * this.saleFilled) / this.saleRatio;
        },
        calcProductRMP({ package: pkg, formula, ratio }) {
            return (
                this.getProductRMCS(formula.rev) *
                    this.calcProductFilled(ratio) +
                Number(pkg.rev.price)
            );
        },
        onComponentChange(value) {
            if (value > 1) {
                let data = cloneDeep(this.modelDefault._products[0]);

                this.form.filled = 100;
                this.form._products.push(data);
            } else {
                this.form._products[0].ratio = 1;
                this.form._products.pop();
            }
        },
    },
    watch: {
        listPackageSecond: function (list) {
            let { _products } = this.form;

            if (_products.length > 1) {
                if (_products[1].package) {
                    if (!list.find(({ id }) => id == _products[1].package.id)) {
                        _products.splice(1, 1, {
                            ..._products[1],
                            package: null,
                        });
                    }
                }
            }
        },
        listFormulaSecond: function (list) {
            let { _products } = this.form;

            if (_products.length > 1) {
                if (_products[1].formula) {
                    if (!list.find(({ id }) => id == _products[1].formula.id)) {
                        _products.splice(1, 1, {
                            ..._products[1],
                            formula: null,
                        });
                    }
                }
            }
        },
    },
};
</script>

<style>
</style>
