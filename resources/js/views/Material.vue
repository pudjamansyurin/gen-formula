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
                    {{ item.rev.price | currency }}
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
            :readonly="fieldDisabled"
            @close="close"
            @submit="save"
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
                                label="Material name"
                                type="text"
                                hint="This is to identify the material"
                                counter
                                persistent-hint
                            ></v-text-field>
                        </validation-provider>

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
                            name="rev.price"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model.number="form.rev.price"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                :filled="fieldDisabled"
                                label="Material price"
                                type="number"
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
                                <v-list-item-title
                                    >{{ rev.price | currency }}
                                </v-list-item-title>
                                <v-list-item-subtitle v-if="rev.user">
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
                                    @click="confirmRev(rev)"
                                    color="red"
                                    dark
                                    text
                                    x-small
                                >
                                    Delete
                                </v-btn>
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
import pluralize from "pluralize";

import { Material } from "../models";
import { eHandler } from "../utils/helper";
import {
    CommonMixin,
    ModelMixin,
    FormTabMixin,
    FetchListMixin
} from "../mixins";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin, FormTabMixin, FetchListMixin],
    components: {
        AppTopBar
    },
    data() {
        return {
            model: "material",
            modelDefault: Material,
            form: this.$_.cloneDeep(Material),
            headers: [
                { text: "Name", value: "name" },
                { text: "Matter", value: "matter.name" },
                {
                    text: "Price",
                    value: "rev.price",
                    align: "right",
                    sortable: false,
                    width: 150
                },
                {
                    text: "Rev",
                    value: "revs_count",
                    align: "center"
                },
                { text: "Creator", value: "user.name" },
                {
                    text: "UpdatedAt",
                    value: "updated_at"
                }
            ],

            dialogDeleteRev: false,
            selectedRev: [],
            listMatter: []
        };
    },
    computed: {
        ...mapState("model", ["materials"])
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.form = this.$_.cloneDeep(item);
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
                id: this.form.id
            }).then(data => {
                this.form = this.$_.cloneDeep(data);
            });
        },

        // revision related routines
        confirmRev(rev) {
            this.selectedRev = [rev];
            this.$nextTick(() => (this.dialogDeleteRev = true));
        },
        removeRev: async function() {
            this.START_LOADING();
            await this.DELETE_MODELS({
                model: "material-rev",
                ids: this.$_.map(this.selectedRev, "id")
            })
                .then(async ids => {
                    await this.fetchDetail();

                    this.dialogDeleteRev = false;
                    this.$nextTick(() => (this.selectedRev = []));
                })
                .catch(e => eHandler(e))
                .then(() => this.STOP_LOADING());
        }
    },
    mounted() {
        this.fetchList("matter")
            .then(data => (this.listMatter = data))
            .catch(e => eHandler(e));
    }
};
</script>

<style></style>
