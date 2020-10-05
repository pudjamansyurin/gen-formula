<template>
    <v-form @submit.prevent="$emit('save')">
        <validation-observer ref="form">
            <validation-provider name="name" v-slot="{ errors, valid }">
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

            <validation-provider name="component" v-slot="{ errors, valid }">
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
                <v-col v-for="(product, index) in form._products" :key="index">
                    <v-card outlined>
                        <v-card-text>
                            <v-row no-gutters>
                                <v-col cols="12">
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
                                </v-col>
                                <v-col cols="12" v-if="product.package">
                                    <v-chip label>
                                        {{
                                            product.package.rev.price | currency
                                        }}
                                    </v-chip>
                                    <v-chip label>
                                        {{ product.package.capacity }}
                                        {{ product.package.unit.name }}
                                    </v-chip>
                                </v-col>
                            </v-row>

                            <v-row v-if="product.package" no-gutters>
                                <v-col cols="12">
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
                                </v-col>
                                <v-col cols="12" v-if="product.formula">
                                    <v-chip
                                        v-if="
                                            product.package.unit.symbol == 'KG'
                                        "
                                        label
                                    >
                                        {{
                                            product.formula.rev.price | currency
                                        }}
                                        / KG
                                    </v-chip>
                                    <v-chip v-else label>
                                        {{
                                            product.formula.rev.price_liter
                                                | currency
                                        }}
                                        / L
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
    },
    methods: {
        onComponentChange(value) {
            if (value == 2) {
                let data = this.$_.cloneDeep(this.modelDefault._products[0]);
                this.form._products.push(data);
            } else {
                this.form._products.pop();
            }
        },
    },
};
</script>

<style>
</style>
