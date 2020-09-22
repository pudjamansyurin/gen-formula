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
            :items="packers"
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
            :readonly="fieldDisabled"
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
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            label="Name"
                            type="text"
                            hint="The packer's name"
                            counter
                            persistent-hint
                        ></v-text-field>
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
import { Packer } from "../models";
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
            model: "packer",
            headers: [
                { text: "Name", value: "name" },
                {
                    text: "Pack",
                    value: "packs_count",
                    align: "center",
                },
                { text: "Creator", value: "user.name" },
                {
                    text: "UpdatedAt",
                    value: "updated_at",
                },
            ],
            options: this.$_.cloneDeep(TABLE_OPTIONS),
            total: 0,
            selected: [],
            dialog: false,
            dialogDelete: false,
            form: this.$_.cloneDeep(Packer),
        };
    },
    computed: {
        ...mapState("model", ["packers"]),
        creating() {
            return this.isNewModel(this.form);
        },
        fieldDisabled() {
            return !this.creating && !this.form.authorized;
        },
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        chipColor(item) {
            if (!item.authorized) return "grey";
            return "green";
            // return item.packs_count ? "green" : "red";
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => this.$refs.form.reset());
        },
        create() {
            this.form = this.$_.cloneDeep(Packer);
            this.$nextTick(() => (this.dialog = true));
        },
        edit(item) {
            this.form = this.$_.cloneDeep(item || this.selected[0]);
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
                .catch((e) => eHandler(e));
            this.STOP_LOADING();
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
                    this.STOP_LOADING();
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
