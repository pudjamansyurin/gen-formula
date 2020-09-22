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
                    @click.stop="editPortion(item.id)"
                    :color="chipColor(item)"
                    :outlined="!item.selected"
                    absolute
                    top
                    right
                    small
                    tile
                >
                    {{ item.price_total | currency }}
                </v-btn>
                <v-card-text>
                    <div class="overline">
                        {{ item.updated_at | moment("from") }}
                    </div>
                    <div class="overline mb-2">{{ item.user.name }}</div>
                    <div class="subtitle-2 font-weight-bold">
                        {{ item.name }}
                    </div>
                    {{ item.description }}
                </v-card-text>
            </template>

            <template v-slot:[`item.name`]="{ item }">
                <v-chip
                    @click="editPortion(item.id)"
                    :color="chipColor(item)"
                    :small="dense"
                    dark
                >
                    {{ item.name }}
                </v-chip>
            </template>
            <template v-slot:[`item.price_total`]="{ item }">
                {{ item.price_total | currency }}
            </template>
            <template v-slot:[`item.portion_total`]="{ item }"
                >{{ item.portion_total }} %</template
            >
            <template v-slot:[`item.portion_count`]="{ item }">
                {{ item.portions.length }}
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
            @close="close"
            @submit="save"
        >
            <v-form @submit.prevent="save">
                <validation-observer ref="form">
                    <validation-provider name="name" v-slot="{ errors, valid }">
                        <v-text-field
                            v-model="form.name"
                            :error-messages="errors"
                            :success="valid"
                            label="Formula name"
                            type="text"
                            hint="This is to identify the formula"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        name="description"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            v-model="form.description"
                            :error-messages="errors"
                            :success="valid"
                            label="Formula description"
                            type="text"
                            hint="Short description about the formula"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </validation-observer>
                <v-btn v-show="false" type="submit"></v-btn>
            </v-form>
        </the-dialog-form>

        <the-dialog-form
            v-model="dialogPortion"
            :title="portionFormTitle"
            :readonly="fieldDisabled"
            @close="closePortion"
            @submit="savePortion"
            width="1000"
        >
            <v-form @submit.prevent="savePortion">
                <validation-observer ref="portion_form">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <validation-provider
                                name="formula"
                                v-slot="{ errors, valid }"
                            >
                                <v-autocomplete
                                    v-model="form.portions"
                                    :items="listMaterial"
                                    :error-messages="errors"
                                    :success="valid"
                                    :clearable="form.authorized"
                                    :readonly="fieldDisabled"
                                    :filled="fieldDisabled"
                                    item-text="material.name"
                                    item-value="material.id"
                                    label="Related materials"
                                    hint="The related materials"
                                    chips
                                    multiple
                                    auto-select-first
                                    deletable-chips
                                    persistent-hint
                                    return-object
                                ></v-autocomplete>
                            </validation-provider>

                            <validation-provider
                                name="portion_total"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    class="mt-3"
                                    label="Total Portion"
                                    type="number"
                                    :value="portionTotal"
                                    :error-messages="errors"
                                    :success="valid"
                                    suffix="%"
                                    hint="This should be 100%"
                                    readonly
                                    filled
                                    persistent-hint
                                ></v-text-field>
                            </validation-provider>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <validation-provider
                                v-for="(el, key) in form.portions"
                                :key="el.material.id"
                                :name="`formula.${key}.portion`"
                                v-slot="{ errors, valid }"
                            >
                                <v-text-field
                                    v-model.number="el.portion"
                                    :label="el.material.name"
                                    :error-messages="errors"
                                    :success="valid"
                                    :readonly="fieldDisabled"
                                    :filled="fieldDisabled"
                                    type="number"
                                    suffix="%"
                                    hint="This material's portion"
                                    persistent-hint
                                ></v-text-field>
                            </validation-provider>
                        </v-col>
                    </v-row>
                </validation-observer>
                <v-btn v-show="false" type="submit"></v-btn>
            </v-form>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

import { Formula } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, ModelMixin } from "../mixins";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
    GET_LIST,
} from "../store/model/action-types";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "formula",
            headers: [
                { text: "Name", value: "name" },
                { text: "Description", value: "description" },
                {
                    text: "Tot.Price",
                    value: "price_total",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Tot.Portion",
                    value: "portion_total",
                    align: "center",
                    sortable: false,
                },
                {
                    text: "Rel.Material",
                    value: "portion_count",
                    align: "center",
                    sortable: false,
                },
                { text: "Creator", value: "user.name" },
                { text: "UpdatedAt", value: "updated_at" },
            ],

            form: this.$_.cloneDeep(Formula),
            dialogPortion: false,
            listMaterial: [],
        };
    },
    computed: {
        ...mapState("model", ["formulas"]),
        portionFormTitle() {
            return this.form.name || "Related materials";
        },
        portionTotal() {
            return this.$_.reduce(
                this.form.portions,
                (sum, el) => sum + Number(el.portion),
                0
            );
        },
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [
            GET_MODELS,
            SAVE_MODEL,
            DELETE_MODELS,
            GET_LIST,
        ]),
        chipColor(item) {
            if (!item.authorized) return "grey";
            return item.portion_total == 100 ? "green" : "red";
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => this.$refs.form.reset());
        },
        create() {
            this.form = this.$_.cloneDeep(Formula);
            this.$nextTick(() => (this.dialog = true));
        },
        edit() {
            this.form = this.$_.cloneDeep(this.selected[0]);
            this.$nextTick(() => (this.dialog = true));
        },
        fetch: async function () {
            await this.GET_MODELS({
                model: this.model,
                params: this.options,
            })
                .then(({ total }) => (this.total = total))
                .catch((e) => eHandler(e));
        },
        remove: async function () {
            this.START_LOADING();
            await this.DELETE_MODELS({
                model: this.model,
                ids: this.$_.map(this.selected, "id"),
            })
                .then(async () => {
                    await this.fetch();

                    this.dialogDelete = false;
                    this.$nextTick(() => (this.selected = []));
                })
                .catch((e) => eHandler(e))
                .then(() => this.STOP_LOADING());
        },
        save() {
            this.$refs.form.validate().then(async (valid) => {
                if (valid) {
                    this.START_LOADING();
                    await this.SAVE_MODEL({
                        model: this.model,
                        payload: this.form,
                    })
                        .then(async (data) => {
                            this.updateOrFetch(data);

                            this.selected = [];
                            this.close();
                        })
                        .catch((e) => this.$refs.form.setErrors(eHandler(e)))
                        .then(() => this.STOP_LOADING());
                }
            });
        },
        updateOrFetch: async function (data) {
            if (this.creating) {
                await this.fetch();
            } else {
                this.UPDATE_MODEL({
                    model: this.model,
                    data,
                });
            }
        },
        fetchListMaterial: async function () {
            await this.GET_LIST({
                model: "material",
            })
                .then((data) => {
                    this.listMaterial = data.map(({ id, name }) => ({
                        portion: 0,
                        material: {
                            id,
                            name,
                        },
                    }));
                })
                .catch((e) => eHandler(e));
        },
        // portion related routines
        closePortion() {
            this.dialogPortion = false;
            this.$nextTick(() => this.$refs.portion_form.reset());
        },
        editPortion(id) {
            let formula = this.$_.find(this.formulas, { id });
            this.form = this.$_.cloneDeep(formula);
            this.$nextTick(() => (this.dialogPortion = true));
        },
        savePortion() {
            this.$refs.portion_form.validate().then((valid) => {
                if (valid) {
                    this.SAVE_MODEL({
                        url: `formula/${this.form.id}/portion`,
                        payload: {
                            formula: this.$_.map(
                                this.form.portions,
                                ({ material, portion }) => ({
                                    material_id: material.id,
                                    portion,
                                })
                            ),
                        },
                    })
                        .then(async (data) => {
                            this.UPDATE_MODEL({
                                model: this.model,
                                data,
                            });

                            this.closePortion();
                        })
                        .catch((e) =>
                            this.$refs.portion_form.setErrors(eHandler(e))
                        );
                }
            });
        },
    },
    watch: {
        dialogPortion: function (open) {
            if (open) {
                this.fetchListMaterial();
            }
        },
        options: {
            handler() {
                this.fetch();
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>

<style></style>
