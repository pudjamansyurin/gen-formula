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
            :items="materials"
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
                    {{ item.revs_price | currency }}
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
            <template v-slot:[`item.revs_price`]="{ item }">
                {{ item.revs_price | currency }}
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

        <the-dialog-delete
            v-model="dialogDeleteRev"
            :selected="selectedRev"
            model="material-rev"
            @delete="removeRev"
            @close="dialogDeleteRev = false"
        >
            <template v-slot="{ item }">
                {{ item.price | currency }} |
                {{ item.updated_at | moment("from") }}
            </template>
        </the-dialog-delete>

        <the-dialog-form
            v-model="dialog"
            :form="form"
            :tabs="formTabs"
            :tab.sync="formTabIndex"
            @close="close"
            @submit="save"
        >
            <template v-slot:data>
                <v-form @submit.prevent="save">
                    <validation-observer ref="form">
                        <validation-provider
                            name="matter_id"
                            v-slot="{ errors, valid }"
                        >
                            <v-autocomplete
                                v-model="form.matter_id"
                                :items="listMatter"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                :filled="fieldDisabled"
                                item-text="name"
                                item-value="id"
                                label="Matter"
                                hint="The material's category"
                                persistent-hint
                            ></v-autocomplete>
                        </validation-provider>

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
                                label="Material name"
                                type="text"
                                hint="This is to identify the material"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

                        <validation-provider
                            name="revs_price"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                label="Material price"
                                type="number"
                                v-model.number="form.revs_price"
                                :error-messages="errors"
                                :success="valid"
                                prefix="Rp"
                                hint="The updated material price"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>
                    </validation-observer>
                    <v-btn v-show="false" type="submit"></v-btn>
                </v-form>
            </template>

            <template v-slot:rev>
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
                                <v-list-item-title
                                    >{{ rev.price | currency }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ rev.user.name }}
                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text>
                                    {{ rev.updated_at | moment("from") }}
                                </v-list-item-action-text>
                                <v-btn
                                    v-if="
                                        form.revs.length > 1 && rev.authorized
                                    "
                                    @click="confirmRemoveRev(rev)"
                                    color="red"
                                    dark
                                    text
                                    x-small
                                >
                                    Delete
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider :key="rev.updated_at"></v-divider>
                    </template>
                </v-list>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import pluralize from "pluralize";

import { Material } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, ModelMixin, FormTabMixin } from "../mixins";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
    GET_LIST,
} from "../store/model/action-types";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin, FormTabMixin],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "material",
            modelProp: Material,
            form: this.$_.cloneDeep(Material),
            headers: [
                { text: "Name", value: "name" },
                { text: "Matter", value: "matter.name" },
                {
                    text: "Price",
                    value: "revs_price",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Rev.",
                    value: "revs_count",
                    align: "center",
                },
                { text: "Creator", value: "user.name" },
                {
                    text: "UpdatedAt",
                    value: "updated_at",
                },
            ],

            dialogDeleteRev: false,
            selectedRev: [],
            listMatter: [],
        };
    },
    computed: {
        ...mapState("model", ["materials"]),
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
            return "green";
            // return item.revs_count ? "green" : "red";
        },
        onCreate() {
            this.formTabIndex = 0;
            this.form = this.$_.cloneDeep(this.modelProp);
        },
        onEdit(item) {
            this.formTabIndex = 0;
            this.form = this.$_.cloneDeep(item || this.selected[0]);
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
        fetchListMatter: async function () {
            await this.GET_LIST({
                model: "matter",
            })
                .then((data) => (this.listMatter = data))
                .catch((e) => eHandler(e));
        },
        // revision related routines
        confirmRemoveRev(rev) {
            this.selectedRev = [rev];
            this.$nextTick(() => (this.dialogDeleteRev = true));
        },
        removeRev: async function () {
            let ids = this.$_.map(this.selectedRev, "id");

            await this.DELETE_MODELS({
                model: "material-rev",
                ids,
            })
                .then(async () => {
                    this.form.revs = this.form.revs.filter(
                        ({ id }) => !ids.includes(id)
                    );
                    this.form.revs_price = this.form.revs[0].price;

                    this.UPDATE_MODEL({
                        model: this.model,
                        data: this.$_.cloneDeep(this.form),
                    });

                    this.dialogDeleteRev = false;
                    this.$nextTick(() => (this.selectedRev = []));
                })
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        dialog: function (open) {
            if (open) {
                this.fetchListMatter();
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
