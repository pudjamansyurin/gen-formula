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
                    >{{ item.price | currency }}</v-btn
                >
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
            <template v-slot:[`item.price_count`]="{ item }">
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

        <the-dialog-form
            v-model="dialog"
            :form="form"
            @close="close"
            @submit="save"
        >
            <validation-observer ref="form">
                <validation-provider name="name" v-slot="{ errors, valid }">
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

                <validation-provider name="price" v-slot="{ errors, valid }">
                    <v-text-field
                        label="Material price"
                        type="number"
                        v-model.number="form.price"
                        :error-messages="errors"
                        :success="valid"
                        prefix="Rp"
                        counter
                        hint="The updated material price"
                        persistent-hint
                    ></v-text-field>
                </validation-provider>

                <v-menu
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
                            @click="$refs.menuUpdatedAt.save(form.updated_at)"
                            >OK</v-btn
                        >
                    </v-date-picker>
                </v-menu>
            </validation-observer>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
} from "../store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Material } from "../models";
import { eHandler } from "../utils/helper";
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
            options: {
                page: 1,
                itemsPerPage: 10,
                multiSort: false,
                mustSort: true,
                groupBy: [],
                groupDesc: [],
                sortBy: ["updated_at"],
                sortDesc: [true],
            },
            search: "",
            total: 0,
            selected: [],
            headers: [
                { text: "Name", value: "name" },
                {
                    text: "Price",
                    value: "price",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                {
                    text: "Revision",
                    value: "price_count",
                    align: "center",
                    sortable: false,
                },
                { text: "Creator", value: "user.name" },
                { text: "UpdatedAt", value: "updated_at" },
            ],
            dialog: false,
            dialogDelete: false,
            menuUpdatedAt: false,
            form: {},
        };
    },
    computed: {
        ...mapState("model", ["materials"]),
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
            this.dialog = true;
        },
        edit(item) {
            item = item || this.selected[0];
            this.form = this.$_.cloneDeep(item);
            this.dialog = true;
        },
        remove: async function () {
            let { model } = this;

            await this.DELETE_MODELS({
                model,
                ids: this.$_.map(this.selected, "id"),
            })
                .then(async () => {
                    await this.fetch();
                    this.selected = [];
                    this.dialogDelete = false;
                })
                .catch((e) => eHandler(e));
        },
        fetch: async function () {
            let { model, options, search } = this;

            await this.GET_MODELS({
                model,
                params: {
                    ...options,
                    search,
                },
            })
                .then(({ meta }) => (this.total = meta.total))
                .catch((e) => eHandler(e));
        },
        save() {
            // validate
            this.$refs.form.validate().then((valid) => {
                if (valid) {
                    // pass validation
                    const { model, form: payload } = this;
                    // submit to backend
                    this.SAVE_MODEL({
                        model,
                        payload,
                    })
                        .then(async (data) => {
                            if (payload.id > 0) {
                                this.UPDATE_MODEL({
                                    model,
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
    },
    watch: {
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
