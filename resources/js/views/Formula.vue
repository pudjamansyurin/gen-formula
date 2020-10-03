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
            :items="formulas"
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
                    {{ item.rev.price | currency }} / Kg
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
            <template v-slot:[`item.main`]="{ item }">
                <v-icon>
                    {{
                        item.main
                            ? "mdi-check-bold"
                            : "mdi-checkbox-blank-circle"
                    }}
                </v-icon>
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
            <template v-slot="{ item }">
                {{ item.name }}
            </template>
        </the-dialog-delete>

        <the-dialog-form
            v-model="dialog"
            :form="form"
            :tabs="formTabs"
            :tab.sync="formTabIndex"
            :readonly="fieldDisabled"
            @close="close"
            @submit="save"
            width="1000"
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
                                label="Name"
                                type="text"
                                hint="The formula name"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

                        <validation-provider
                            name="main"
                            v-slot="{ errors, valid }"
                        >
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
                                <v-radio
                                    label="Main formula"
                                    :value="1"
                                ></v-radio>
                                <v-radio
                                    label="Sub formula"
                                    :value="0"
                                ></v-radio>
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
                                            {{
                                                stripRecipeClass(
                                                    item.recipeable_type
                                                )
                                            }}
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
                            <v-simple-table dense>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th
                                                class="text-center"
                                                style="width: 50px"
                                            >
                                                No
                                            </th>
                                            <th class="text-left">Name</th>
                                            <th class="text-left">Type</th>
                                            <th
                                                class="text-right"
                                                style="width: 200px"
                                            >
                                                Price
                                            </th>
                                            <th
                                                class="text-right"
                                                style="width: 120px"
                                            >
                                                Portion
                                            </th>
                                            <th
                                                class="text-right"
                                                style="width: 200px"
                                            >
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="(recipe,
                                            index) in form._recipes"
                                            :key="recipe.id"
                                        >
                                            <td class="text-center">
                                                {{ index + 1 }}
                                            </td>
                                            <td class="text-left">
                                                {{ recipe.name }}
                                            </td>
                                            <td class="text-left">
                                                {{
                                                    stripRecipeClass(
                                                        recipe.recipeable_type
                                                    )
                                                }}
                                            </td>
                                            <td class="text-right">
                                                {{ recipe.price | currency }}
                                            </td>
                                            <td>
                                                <validation-provider
                                                    :vid="`_recipes.${index}.portion`"
                                                    :name="`${recipe.name} portion`"
                                                    v-slot="{ errors, valid }"
                                                >
                                                    <v-text-field
                                                        v-model.number="
                                                            recipe.portion
                                                        "
                                                        :error-messages="errors"
                                                        :success="valid"
                                                        :readonly="
                                                            fieldDisabled
                                                        "
                                                        :filled="fieldDisabled"
                                                        type="number"
                                                        prefix="Kg"
                                                        hide-details
                                                        reverse
                                                        flat
                                                        dense
                                                    ></v-text-field>
                                                </validation-provider>
                                            </td>
                                            <td class="text-right">
                                                {{
                                                    (recipe.price *
                                                        recipe.portion)
                                                        | currency
                                                }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="6"></td>
                                        </tr>
                                        <tr>
                                            <td class="text-right" colspan="4">
                                                Total
                                            </td>
                                            <td
                                                class="text-right"
                                                :class="recipePortionColor"
                                            >
                                                <validation-provider
                                                    vid="portion_total"
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
                                                        hide-details
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
                                            <td colspan="5" class="text-right">
                                                RMC (Kg)
                                            </td>
                                            <td class="text-right">
                                                {{ rmc | currency }}
                                            </td>
                                        </tr>
                                        <tr class="font-weight-black">
                                            <td colspan="5" class="text-right">
                                                RMCS (Kg)
                                            </td>
                                            <td class="text-right">
                                                {{ rmcs | currency }}
                                            </td>
                                        </tr>
                                        <tr class="font-weight-black">
                                            <td colspan="5" class="text-right">
                                                RMCS (L)
                                            </td>
                                            <td class="text-right">
                                                {{ rmcsLiter | currency }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card>
                    </validation-observer>
                    <v-btn v-show="false" type="submit"></v-btn>
                </v-form>
            </template>

            <template v-slot:REV>
                <v-list dense>
                    <template v-for="(rev, index) in form.revs">
                        <v-list-item
                            :key="rev.id"
                            :class="{ primary: index === 0 }"
                            :dark="index === 0"
                            two-line
                            dense
                        >
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ rev.price | currency }} / Kg
                                </v-list-item-title>
                                <v-list-item-title>
                                    {{ rev.price_liter | currency }} / L
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ rev.user.name }}
                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text>
                                    {{ rev.updated_at | moment("from") }}
                                </v-list-item-action-text>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider :key="`divider-${rev.id}`"></v-divider>
                    </template>
                </v-list>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { Formula } from "../models";
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
            model: "formula",
            modelDefault: Formula,
            form: this.$_.cloneDeep(Formula),
            headers: [
                { text: "Name", value: "name" },
                // { text: "Description", value: "description" },
                {
                    text: "Recipes",
                    value: "recipes_count",
                    align: "center",
                },
                {
                    text: "Main",
                    value: "main",
                    align: "center",
                },
                {
                    text: "Price (Kg)",
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
                { text: "Creator", value: "user.name" },
                { text: "UpdatedAt", value: "updated_at" },
            ],

            listRecipe: [],
            listRecipeDefault: [],
        };
    },
    computed: {
        ...mapState("model", ["formulas"]),
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
        change(item) {
            this.formTabIndex = 0;
            this.listRecipe = this.$_.cloneDeep(this.listRecipeDefault);
            this.form = {
                ...this.$_.cloneDeep(item),
                _recipes: [],
            };
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
                    shrink: Number(data.shrink),
                    density: Number(data.density),
                    _recipes: this.makeRecipesDetail(data.recipes),
                };
            });
        },
        makeRecipesDetail(recipes) {
            return recipes.map(
                ({ recipeable_type, recipeable_id, portion, recipeable }) => ({
                    id: `${recipeable_type}-${recipeable_id}`,
                    recipeable_id,
                    recipeable_type,
                    name: recipeable.name,
                    portion: Number(portion),
                    price: Number(recipeable.rev.price),
                })
            );
        },
        makeListRecipes(data) {
            return data.map(
                ({ recipeable_type, recipeable_id, name, price }) => ({
                    id: `${recipeable_type}-${recipeable_id}`,
                    recipeable_id,
                    recipeable_type,
                    name,
                    portion: null,
                    price: Number(price),
                })
            );
        },
        stripRecipeClass(recipeable_type) {
            return recipeable_type.replace("App\\", "");
        },
    },
    mounted() {
        this.fetchList("recipe")
            .then((data) => {
                this.listRecipeDefault = this.makeListRecipes(data);
            })
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
