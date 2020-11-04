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
                    :color="chipColor(item)"
                    outlined
                    absolute
                    top
                    right
                    small
                    tile
                >
                    {{ item.rev.price | currency }} / Kg
                </v-btn>

                <v-card-text @click="edit(item)">
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
            :title="model"
            :tabs="formTabs"
            :tab.sync="formTabIndex"
            :readonly="fieldDisabled"
            :width="formWidth"
            @close="close"
            @submit="save"
        >
            <template v-slot:DATA>
                <formula-form
                    ref="form"
                    v-model="form"
                    @save="save"
                    :field-disabled="fieldDisabled"
                    :list-recipe="listRecipe"
                ></formula-form>
            </template>

            <template v-slot:REV>
                <rev-timeline v-if="form.revs" :revs="form.revs">
                    <template v-slot:card-text="{ item: { rev, index } }">
                        <v-chip
                            class="ma-1"
                            :color="index === 0 ? 'primary' : ''"
                        >
                            {{ rev.price | currency }} / Kg
                        </v-chip>
                        <v-chip
                            class="ma-1"
                            :color="index === 0 ? 'primary' : ''"
                        >
                            {{ rev.price_liter | currency }} / L
                        </v-chip>
                    </template>
                </rev-timeline>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { cloneDeep } from "lodash";

import { Formula } from "@/config/models";
import { eHandler } from "@/utils";
import { CommonMixin, ModelMixin, TabMixin, FetchListMixin } from "@/mixins";

import AppTopBar from "@/components/AppTopBar";
import RevTimeline from "@/components/RevTimeline";
import FormulaForm from "./FormulaForm";

export default {
    mixins: [CommonMixin, ModelMixin, TabMixin, FetchListMixin],
    components: {
        AppTopBar,
        FormulaForm,
        RevTimeline,
    },
    data() {
        return {
            model: "formula",
            modelDefault: Formula,
            form: cloneDeep(Formula),
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
            prevIsMain: null,
        };
    },
    computed: {
        ...mapState("model", ["formulas"]),
        formWidth() {
            let { _recipes } = this.form;
            if (_recipes && _recipes.length > 0) {
                return 1000;
            }
            return 700;
        },
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.listRecipe = cloneDeep(
                this.listRecipeDefault
                    .filter(({ id }) => id != `App\\Formula-${item.id}`)
                    .filter(({ recipeable_id, recipeable_type }) => {
                        if (recipeable_type == "App\\Formula") {
                            if (item.parents) {
                                return !item.parents.flatten.includes(
                                    recipeable_id
                                );
                            }
                        }
                        return true;
                    })
            );
            this.form = cloneDeep(item);
            this.prevIsMain = cloneDeep(item.main);
        },
        onCreate() {
            this.change(this.modelDefault);
        },
        onEdit: async function (item) {
            item = await this.fetchDetail(item || this.selected[0]);
            this.change(item);
        },
        onSaved({ main }) {
            if (!this.creating) {
                if (this.prevIsMain != main) {
                    this.fetchListRecipe();
                }
            }
        },
        fetchDetail: async function ({ id }) {
            let item;

            await this.GET_MODEL({
                model: this.model,
                id,
            }).then((data) => {
                item = {
                    ...data,
                    shrink: Number(data.shrink),
                    density: Number(data.density),
                    _recipes: this.makeRecipesDetail(data.recipes),
                };
            });

            return item;
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
        fetchListRecipe() {
            this.fetchList("recipe")
                .then((data) => {
                    this.listRecipeDefault = this.makeListRecipes(data);
                })
                .catch((e) => eHandler(e));
        },
    },
    mounted() {
        this.fetchListRecipe();
    },
};
</script>

<style></style>
