<template>
    <fragment>
        <app-top-bar
            v-model="search"
            :page="model"
            :selected="selected"
            :tab.sync="mineTab"
            @unselect="selected = []"
            @fetch="fetch"
            @edit="edit"
            @create="create"
            @delete="dialogDelete = true"
            crud
        ></app-top-bar>

        <the-data
            v-model="selected"
            :items="packages"
            :options.sync="options"
            :headers="headers"
            :total="total"
            :model="model"
        >
            <template v-slot:card="{ item }">
                <v-btn
                    @click="edit(item)"
                    :color="item.stories_count ? 'green' : 'red'"
                    :outlined="!item.selected"
                    absolute
                    top
                    right
                    small
                    tile
                >
                    {{ item.stories_price | currency }}
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
                    :color="item.stories_count ? 'green' : 'red'"
                    :small="dense"
                    dark
                >
                    {{ item.name }}
                </v-chip>
            </template>
            <template v-slot:[`item.stories_price`]="{ item }">
                {{ item.stories_price | currency }}
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
            :tab.sync="formTab"
            @close="close"
            @submit="save"
        >
            <template v-slot:data>
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
                                label="Name"
                                type="text"
                                hint="The package name"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

                        <v-row>
                            <v-col>
                                <validation-provider
                                    name="capacity"
                                    v-slot="{ errors, valid }"
                                >
                                    <v-text-field
                                        label="Capacity"
                                        type="number"
                                        v-model.number="form.capacity"
                                        :error-messages="errors"
                                        :success="valid"
                                        hint="The package capacity"
                                        persistent-hint
                                    ></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col>
                                <validation-provider
                                    name="unit_id"
                                    v-slot="{ errors, valid }"
                                >
                                    <v-autocomplete
                                        v-model="form.unit_id"
                                        :items="units"
                                        :error-messages="errors"
                                        :success="valid"
                                        :loading="!!loading"
                                        item-text="name"
                                        item-value="id"
                                        label="Unit"
                                        hint="The package unit"
                                        persistent-hint
                                    ></v-autocomplete>
                                </validation-provider>
                            </v-col>
                        </v-row>
                    </validation-observer>
                    <v-btn v-show="false" type="submit"></v-btn>
                </v-form>
            </template>

            <template v-slot:rev>
                <v-list dense>
                    <template v-for="(story, index) in form.stories">
                        <v-list-item
                            :key="story.id"
                            :class="{ primary: index === 0 }"
                            :dark="index === 0"
                            two-line
                            dense
                        >
                            <v-list-item-content>
                                <v-list-item-title
                                    >{{ story.price | currency }}
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text>
                                    {{ story.updated_at | moment("from") }}
                                </v-list-item-action-text>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider :key="story.updated_at"></v-divider>
                    </template>
                </v-list>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
} from "../store/model/action-types";
import { mapState, mapMutations, mapActions } from "vuex";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Package } from "../models";
import { eHandler } from "../utils/helper";
import { TABLE_OPTIONS } from "../utils/config";
import AppTopBar from "../components/app/AppTopBar";
import TheData from "../components/TheData";
import TheDialogForm from "../components/TheDialogForm";
import TheDialogDelete from "../components/TheDialogDelete";
import mixins from "../mixins";

export default {
    mixins: [mixins],
    components: {
        AppTopBar,
        TheData,
        TheDialogForm,
        TheDialogDelete,
    },
    data() {
        return {
            model: "package",
            headers: [
                { text: "Name", value: "name" },
                { text: "Capacity", value: "capacity", align: "center" },
                { text: "Unit", value: "unit.symbol", align: "center" },
                {
                    text: "Packer",
                    value: "packagers_count",
                    align: "center",
                },
                {
                    text: "Price",
                    value: "stories_price",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Rev.",
                    value: "stories_count",
                    align: "center",
                },
                { text: "Creator", value: "user.name" },
                {
                    text: "UpdatedAt",
                    value: "updated_at",
                },
            ],
            options: this.$_.cloneDeep(TABLE_OPTIONS),
            search: "",
            total: 0,
            selected: [],
            dialog: false,
            dialogDelete: false,
            form: this.$_.cloneDeep(Package),
            formTab: 0,
            mineTab: 0,
        };
    },
    computed: {
        ...mapState("model", ["packages", "units"]),
        formTabs() {
            let tabs = ["data", "rev"];

            if (this.isNewModel(this.form)) {
                return [tabs[0]];
            }
            return tabs;
        },
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        close() {
            this.dialog = false;
            this.$nextTick(() => this.$refs.form.reset());
        },
        create() {
            this.form = this.$_.cloneDeep(Package);
            this.formTab = 0;

            this.$nextTick(() => (this.dialog = true));
        },
        edit(item) {
            this.form = this.$_.cloneDeep(item || this.selected[0]);
            this.formTab = 0;

            this.$nextTick(() => (this.dialog = true));
        },
        remove: async function () {
            await this.DELETE_MODELS({
                model: this.model,
                ids: this.$_.map(this.selected, "id"),
            })
                .then(async () => {
                    await this.fetch();

                    this.dialogDelete = false;
                    this.$nextTick(() => (this.selected = []));
                })
                .catch((e) => eHandler(e));
        },
        fetch: async function () {
            await this.GET_MODELS({
                model: this.model,
                params: {
                    ...this.options,
                    search: this.search,
                    mine: this.mineTab,
                },
            })
                .then(({ total }) => (this.total = total))
                .catch((e) => eHandler(e));
        },
        save() {
            this.$refs.form.validate().then((valid) => {
                if (valid) {
                    this.SAVE_MODEL({
                        model: this.model,
                        payload: this.form,
                    })
                        .then(async (data) => {
                            if (this.isNewModel(this.form)) {
                                await this.fetch();
                            } else {
                                this.UPDATE_MODEL({
                                    model: this.model,
                                    data,
                                });
                            }
                            this.selected = [];
                            this.close();
                        })
                        .catch((e) => this.$refs.form.setErrors(eHandler(e)));
                }
            });
        },
        fetchUnits: async function () {
            await this.GET_MODELS({
                model: "unit",
                params: {
                    itemsPerPage: -1,
                },
            })
                .then(({ data }) => {
                    /* nothing todo */
                })
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        mineTab: function (mine) {
            this.fetch();
        },
        dialog: function (open) {
            if (open) {
                this.fetchUnits();
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
