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
                            label="Name"
                            type="text"
                            hint="The formula name"
                            counter
                            autofocus
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-alert color="primary" class="my-0" dense outlined text>
                        <span class="caption">Total RMC</span><br />
                        <b>{{ rmcs | currency }} / Kg</b><br />
                        <b>{{ rmcsLiter | currency }} / L</b>
                    </v-alert>
                </v-col>
            </v-row>

            <validation-provider name="main" v-slot="{ errors, valid }">
                <v-radio-group
                    v-model="form.main"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    :filled="fieldDisabled"
                    :row="!mobile"
                    hide-details="auto"
                >
                    <template v-slot:label>
                        <div class="caption">Type :</div>
                    </template>
                    <v-radio label="Main formula" :value="1"></v-radio>
                    <v-radio label="Sub formula" :value="0"></v-radio>
                </v-radio-group>
            </validation-provider>
            <v-divider class="mt-1"></v-divider>

            <v-row>
                <v-col>
                    <validation-provider
                        vid="density"
                        name="Density"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            v-model.number="form.density"
                            :error-messages="errors"
                            :success="valid"
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            prefix="Kg/L"
                            label="Density"
                            hint="The formula density"
                            type="number"
                            reverse
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col>
                    <validation-provider
                        vid="shrink"
                        name="Shrink"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            v-model.number="form.shrink"
                            :error-messages="errors"
                            :success="valid"
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            prefix="%"
                            label="Shrink Factor"
                            hint="The formula shrink factor"
                            type="number"
                            reverse
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-col>
            </v-row>

            <validation-provider
                name="_recipes"
                v-slot="{ errors, valid }"
                v-if="form._recipes"
            >
                <v-autocomplete
                    v-model="form._recipes"
                    :items="listRecipe"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    :filled="fieldDisabled"
                    item-text="name"
                    label="Recipes"
                    hint="The recipes list"
                    persistent-hint
                    multiple
                    return-object
                    chips
                    deletable-chips
                >
                    <template v-slot:item="{ item }">
                        <v-list-item-content>
                            <v-list-item-title
                                v-html="item.name"
                            ></v-list-item-title>
                            <v-list-item-subtitle>
                                {{ stripRecipeClass(item.recipeable_type) }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>
            </validation-provider>

            <v-card
                v-if="form._recipes && form._recipes.length > 0"
                class="my-3"
                outlined
            >
                <the-data-iterator
                    v-if="mobile"
                    :headers="headers"
                    :items="form._recipes"
                >
                    <template v-slot:no="{ index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:name="{ item, index }">
                        <validation-provider
                            :name="`_recipes.${index}.recipeable_id`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                :value="item.name"
                                :error-messages="errors"
                                :success="valid"
                                hide-details="auto"
                                readonly
                                flat
                                dense
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <template v-slot:type="{ item, index }">
                        <validation-provider
                            :name="`_recipes.${index}.recipeable_type`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                :value="stripRecipeClass(item.recipeable_type)"
                                :error-messages="errors"
                                :success="valid"
                                hide-details="auto"
                                readonly
                                flat
                                dense
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <template v-slot:price="{ item }">
                        {{ item.price | currency }}
                    </template>
                    <template v-slot:portion="{ item, index }">
                        <validation-provider
                            :name="`_recipes.${index}.portion`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model.number="item.portion"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                :filled="fieldDisabled"
                                type="number"
                                prefix="Kg"
                                hide-details="auto"
                                reverse
                                flat
                                dense
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <template v-slot:total="{ item }">
                        {{ (item.price * item.portion) | currency }}
                    </template>

                    <template v-slot:footer>
                        <v-list-item>
                            <v-list-item-content>Portion</v-list-item-content>
                            <v-list-item-content>
                                <validation-provider
                                    vid="_recipes_portion"
                                    name="Total portion"
                                    v-slot="{ errors, valid }"
                                >
                                    <v-text-field
                                        :value="portionTotal"
                                        :error-messages="errors"
                                        :success="valid"
                                        readonly
                                        type="number"
                                        prefix="Kg"
                                        hide-details="auto"
                                        reverse
                                        flat
                                        dense
                                    ></v-text-field>
                                </validation-provider>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>Total</v-list-item-content>
                            <v-list-item-content class="align-end justify-end">
                                {{ priceTotal | currency }}
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>RMC (Kg)</v-list-item-content>
                            <v-list-item-content class="align-end justify-end">
                                {{ rmc | currency }}
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="font-weight-bold">
                            <v-list-item-content>RMCS (Kg)</v-list-item-content>
                            <v-list-item-content class="align-end justify-end">
                                {{ rmcs | currency }}
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="font-weight-bold">
                            <v-list-item-content>RMCS (L)</v-list-item-content>
                            <v-list-item-content class="align-end justify-end">
                                {{ rmcsLiter | currency }}
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </the-data-iterator>

                <!-- <v-data-iterator
                    :items="form._recipes"
                    item-key="id"
                    hide-default-footer
                >
                    <template v-slot:default="{ items }">
                        <v-card
                            v-for="(item, index) in items"
                            :key="item.id"
                            class="mb-1"
                        >
                            <v-card-title>
                                <h4>{{ item.name }}</h4>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-list dense>
                                <v-list-item
                                    v-for="header in headers"
                                    :key="header.value"
                                >
                                    <v-list-item-content>
                                        {{ header.text }} :
                                    </v-list-item-content>
                                    <v-list-item-content class="align-end">
                                        Lala poo
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </template>
                </v-data-iterator> -->
                <the-simple-table
                    v-else
                    :headers="headers"
                    :items="form._recipes"
                >
                    <template v-slot:no="{ index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:name="{ item, index }">
                        <validation-provider
                            :name="`_recipes.${index}.recipeable_id`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                :value="item.name"
                                :error-messages="errors"
                                :success="valid"
                                hide-details="auto"
                                readonly
                                flat
                                dense
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <template v-slot:type="{ item, index }">
                        <validation-provider
                            :name="`_recipes.${index}.recipeable_type`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                :value="stripRecipeClass(item.recipeable_type)"
                                :error-messages="errors"
                                :success="valid"
                                hide-details="auto"
                                readonly
                                flat
                                dense
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <template v-slot:price="{ item }">
                        {{ item.price | currency }}
                    </template>
                    <template v-slot:portion="{ item, index }">
                        <validation-provider
                            :name="`_recipes.${index}.portion`"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model.number="item.portion"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                :filled="fieldDisabled"
                                type="number"
                                prefix="Kg"
                                hide-details="auto"
                                reverse
                                flat
                                dense
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <template v-slot:total="{ item }">
                        {{ (item.price * item.portion) | currency }}
                    </template>

                    <template v-slot:footer>
                        <tr>
                            <td colspan="6"></td>
                        </tr>
                        <tr>
                            <td class="text-right" colspan="4">Total</td>
                            <td class="text-right" :class="recipePortionColor">
                                <validation-provider
                                    vid="_recipes_portion"
                                    name="Total portion"
                                    v-slot="{ errors, valid }"
                                >
                                    <v-text-field
                                        :value="portionTotal"
                                        :error-messages="errors"
                                        :success="valid"
                                        readonly
                                        type="number"
                                        prefix="Kg"
                                        hide-details="auto"
                                        reverse
                                        flat
                                        dense
                                    ></v-text-field>
                                </validation-provider>
                            </td>
                            <td class="text-right">
                                {{ priceTotal | currency }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-right">RMC (Kg)</td>
                            <td class="text-right">
                                {{ rmc | currency }}
                            </td>
                        </tr>
                        <tr class="font-weight-black">
                            <td colspan="5" class="text-right">RMCS (Kg)</td>
                            <td class="text-right">
                                {{ rmcs | currency }}
                            </td>
                        </tr>
                        <tr class="font-weight-black">
                            <td colspan="5" class="text-right">RMCS (L)</td>
                            <td class="text-right">
                                {{ rmcsLiter | currency }}
                            </td>
                        </tr>
                    </template>
                </the-simple-table>
            </v-card>
        </validation-observer>
        <v-btn v-show="false" type="submit"></v-btn>
    </v-form>
</template>

<script>
import { CommonMixin } from "../../mixins";
import TheSimpleTable from "../TheSimpleTable";
import TheDataIterator from "../TheDataIterator";

export default {
    mixins: [CommonMixin],
    components: {
        TheSimpleTable,
        TheDataIterator,
    },
    props: {
        value: {
            type: Object,
            required: true,
        },
        fieldDisabled: {
            type: Boolean,
            default: false,
        },
        listRecipe: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            headers: [
                {
                    text: "No",
                    value: "no",
                    align: "center",
                    width: 8,
                },
                {
                    text: "Name",
                    value: "name",
                    align: "left",
                },
                {
                    text: "Type",
                    value: "type",
                    align: "left",
                    width: 100,
                },
                {
                    text: "Price",
                    value: "price",
                    align: "right",
                    width: 200,
                },
                {
                    text: "Portion",
                    value: "portion",
                    align: "right",
                    width: 120,
                },
                {
                    text: "Total",
                    value: "total",
                    align: "right",
                    width: 200,
                },
            ],
        };
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
        recipePortionColor() {
            return {
                "red--text font-weight-bold": this.portionTotal != 100,
            };
        },
        portionTotal() {
            if (this.form._recipes) {
                return this.form._recipes.reduce(
                    (carry, { portion }) => carry + Number(portion),
                    0
                );
            }
            return 0;
        },
        priceTotal() {
            if (this.form._recipes) {
                return this.form._recipes
                    .reduce((carry, { portion, price }) => {
                        let subTotal = Number(price) * Number(portion);

                        return carry + subTotal;
                    }, 0)
                    .toFixed(2);
            }
            return 0;
        },
        rmc() {
            return this.priceTotal / this.portionTotal;
        },
        rmcs() {
            return (this.rmc * 100) / (100 - this.form.shrink);
        },
        rmcsLiter() {
            return this.form.density * this.rmcs;
        },
    },
    methods: {
        stripRecipeClass(recipeable_type) {
            return recipeable_type.replace("App\\", "");
        },
    },
};
</script>

<style>
</style>
