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
            :items="packs"
            :options.sync="options"
            :headers="headers"
            :total="total"
            :model="model"
        >
            <template v-slot:card="{ item }">
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

            <!-- <template v-slot:[`item.name`]="{ item }">
                <v-chip
                    @click="edit(item)"
                    :color="item.packs_count ? 'green' : 'red'"
                    :small="dense"
                    dark
                >
                    {{ item.name }}
                </v-chip>
            </template> -->
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
                            label="Name"
                            type="text"
                            hint="The pack's name"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        name="packer_id"
                        v-slot="{ errors, valid }"
                    >
                        <v-autocomplete
                            v-model="form.packer_id"
                            :items="packers"
                            :error-messages="errors"
                            :success="valid"
                            :loading="!!loading"
                            item-text="name"
                            item-value="id"
                            label="Packer"
                            hint="The packer"
                            persistent-hint
                        ></v-autocomplete>
                    </validation-provider>
                </validation-observer>
                <v-btn v-show="false" type="submit"></v-btn>
            </v-form>
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
import { Pack } from "../models";
import { eHandler, castId } from "../utils/helper";
import { TABLE_OPTIONS } from "../utils/config";
import AppTopBar from "../components/app/AppTopBar";
import TheData from "../components/TheData";
import TheDialogForm from "../components/TheDialogForm";
import TheDialogDelete from "../components/TheDialogDelete";
import mixins from "../mixins";

export default {
    mixins: [mixins],
    props: ["id"],
    components: {
        AppTopBar,
        TheData,
        TheDialogForm,
        TheDialogDelete,
    },
    data() {
        return {
            model: "pack",
            headers: [
                { text: "Name", value: "name" },
                {
                    text: "Packer",
                    value: "packer.name",
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
            form: this.$_.cloneDeep(Pack),
            mineTab: 0,
        };
    },
    computed: {
        ...mapState("model", ["packs", "packers"]),
        creating() {
            return this.isNewModel(this.form);
        },
        packerId() {
            return castId(this.id);
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
            this.form = this.$_.cloneDeep(Pack);
            this.$nextTick(() => (this.dialog = true));
        },
        edit(item) {
            this.form = this.$_.cloneDeep(item || this.selected[0]);
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
                            // if (this.creating) {
                            await this.fetch();
                            // } else {
                            //     this.UPDATE_MODEL({
                            //         model: this.model,
                            //         data,
                            //     });
                            // }

                            this.selected = [];
                            this.close();
                        })
                        .catch((e) => this.$refs.form.setErrors(eHandler(e)));
                }
            });
        },
        fetchPackers: async function () {
            await this.GET_MODELS({
                model: "packer",
                params: {
                    itemsPerPage: -1,
                },
            })
                .then(() => {})
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        mineTab: function (mine) {
            this.fetch();
        },
        dialog: function (open) {
            if (open) {
                this.fetchPackers();
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
