<template>
    <fragment>
        <app-top-bar
            v-model="search"
            :page="model"
            :selected="selected"
            @unselect="selected = []"
            @fetch="fetch"
            @edit="edit"
            @create="create"
            @delete="dialogDelete = true"
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
                    :color="item.stories.length ? 'green' : 'red'"
                    :outlined="!item.selected"
                    absolute
                    top
                    right
                    small
                    tile
                    >{{ item.price | currency }}
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
                    :color="item.stories.length ? 'green' : 'red'"
                    :small="dense"
                    dark
                    >{{ item.name }}</v-chip
                >
            </template>
            <template v-slot:[`item.price`]="{ item }">
                {{ item.price | currency }}
            </template>
            <template v-slot:[`item.count_stories`]="{ item }">
                {{ item.stories.length }}
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
            v-model="dialogDeleteStory"
            :selected="selectedStory"
            model="material-story"
            @delete="removeStory"
            @close="dialogDeleteStory = false"
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
            :tab.sync="formTab"
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
                                :items="matters"
                                :error-messages="errors"
                                :success="valid"
                                :loading="!!loading"
                                item-text="name"
                                item-value="id"
                                label="Material's category"
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
                                label="Material name"
                                type="text"
                                hint="This is to identify the material"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

                        <validation-provider
                            name="price"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                label="Material price"
                                type="number"
                                v-model.number="form.price"
                                :error-messages="errors"
                                :success="valid"
                                prefix="Rp"
                                hint="The updated material price"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

                        <!-- <v-menu
                    ref="menuUpdatedAt"
                    v-model="menuUpdatedAt"
                    :return-value.sync="form.updated_at"
                    :close-on-content-click="false"
                    min-width="290px"
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <validation-provider
                            name="updated_at"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model="form.updated_at"
                                v-bind="attrs"
                                v-on="on"
                                :error-messages="errors"
                                :success="valid"
                                label="Updated At"
                                hint="When the price updated"
                                persistent-hint
                                readonly
                            ></v-text-field>
                        </validation-provider>
                    </template>
                    <v-date-picker
                        v-model="form.updated_at"
                        :max="$moment().format('YYYY-MM-DD')"
                        no-title
                        scrollable
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menuUpdatedAt = false"
                            >Cancel</v-btn
                        >
                        <v-btn
                            text
                            color="primary"
                            @click="
                                $refs.menuUpdatedAt.save(form.updated_at)
                            "
                            >OK</v-btn
                        >
                    </v-date-picker>
                </v-menu> -->
                    </validation-observer>
                    <v-btn v-show="false" type="submit"></v-btn>
                </v-form>
            </template>

            <template v-slot:stories>
                <v-list dense>
                    <template v-for="(story, index) in form.stories">
                        <v-list-item
                            :key="story.id"
                            :class="{ primary: index == 0 }"
                            :dark="index == 0"
                            two-line
                            dense
                        >
                            <v-list-item-content>
                                <v-list-item-title
                                    >{{ story.price | currency }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ story.user.name }}
                                </v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text>
                                    {{ story.updated_at | moment("from") }}
                                </v-list-item-action-text>
                                <v-btn
                                    v-if="index > 0 && story.authorized"
                                    @click="deleteStory(story)"
                                    color="red"
                                    dark
                                    text
                                    x-small
                                    >Delete
                                </v-btn>
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
import { Material } from "../models";
import { eHandler } from "../utils/helper";
import { TABLE_OPTIONS } from "../utils/config";
import pluralize from "pluralize";
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
            model: "material",
            headers: [
                { text: "Name", value: "name" },
                { text: "Category", value: "matter.name" },
                {
                    text: "Price",
                    value: "price",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Revision",
                    value: "count_stories",
                    align: "center",
                    sortable: false,
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
            selectedStory: [],
            dialogDeleteStory: false,
            // menuUpdatedAt: false,
            form: this.$_.cloneDeep(Material),
            matters: [],
            formTabs: ["data", "stories"],
            formTab: 0,
        };
    },
    computed: {
        ...mapState("model", ["materials"]),
        dialogWidth() {
            return this.form.id > 0 ? "1000" : "500";
        },
        dialogColSm() {
            return this.form.id > 0 ? "6" : "12";
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
            this.form = this.$_.cloneDeep(Material);
            // this.form.updated_at = this.$moment().format("YYYY-MM-DD");
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
                },
            })
                .then(({ meta }) => (this.total = meta.total))
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
                            if (this.form.id > 0) {
                                this.UPDATE_MODEL({
                                    model: this.model,
                                    data,
                                });
                            } else {
                                await this.fetch();
                            }
                            this.selected = [];
                            this.close();
                        })
                        .catch((e) => this.$refs.form.setErrors(eHandler(e)));
                }
            });
        },
        fetchMatters: async function () {
            await this.GET_MODELS({
                model: "matter",
                params: {
                    itemsPerPage: -1,
                    temporary: true,
                },
            })
                .then(
                    ({ data }) =>
                        (this.matters = this.$_.map(data, ({ id, name }) => ({
                            id,
                            name,
                        })))
                )
                .catch((e) => eHandler(e));
        },
        deleteStory(story) {
            this.selectedStory = [story];
            this.$nextTick(() => (this.dialogDeleteStory = true));
        },
        removeStory: async function () {
            let ids = this.$_.map(this.selectedStory, "id");

            await this.DELETE_MODELS({
                model: "material-story",
                ids,
            })
                .then(async () => {
                    this.form.stories = this.form.stories.filter(
                        ({ id }) => !ids.includes(id)
                    );

                    this.UPDATE_MODEL({
                        model: this.model,
                        data: this.$_.cloneDeep(this.form),
                    });

                    this.dialogDeleteStory = false;
                    this.$nextTick(() => (this.selectedStory = []));
                })
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        dialog: function (val) {
            if (val && this.matters.length == 0) {
                this.fetchMatters();
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
