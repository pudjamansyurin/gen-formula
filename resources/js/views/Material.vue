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
            model="revision"
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
            :title="model"
            :tabs="formTabs"
            :tab.sync="formTabIndex"
            :readonly="fieldDisabled"
            @close="close"
            @submit="save"
        >
            <template v-slot:DATA>
                <material-form
                    ref="form"
                    v-model="form"
                    @save="save"
                    :field-disabled="fieldDisabled"
                    :list-matter="listMatter"
                ></material-form>
            </template>

            <template v-slot:REV>
                <rev-timeline v-if="form.revs" :revs="form.revs">
                    <template v-slot:card-actions="{ item: { rev } }">
                        <v-spacer></v-spacer>
                        <v-btn
                            v-if="form.revs.length > 1 && rev.authorized"
                            @click="confirmRev(rev)"
                            color="red"
                            small
                            text
                        >
                            Delete
                        </v-btn>
                    </template>
                </rev-timeline>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { cloneDeep, map } from "lodash";
import pluralize from "pluralize";

import { Material } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, ModelMixin, TabMixin, FetchListMixin } from "../mixins";

import AppTopBar from "../components/app/AppTopBar";
import MaterialForm from "../components/features/MaterialForm";
import RevTimeline from "../components/features/RevTimeline";

export default {
    mixins: [CommonMixin, ModelMixin, TabMixin, FetchListMixin],
    components: {
        AppTopBar,
        MaterialForm,
        RevTimeline,
    },
    data() {
        return {
            model: "material",
            modelDefault: Material,
            form: cloneDeep(Material),
            headers: [
                { text: "Name", value: "name" },
                { text: "Matter", value: "matter.name" },
                {
                    text: "Price",
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
                {
                    text: "Formula",
                    value: "formulas_count",
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
        change(item) {
            this.formTabIndex = 0;
            this.form = cloneDeep(item);
        },
        onCreate() {
            this.change(this.modelDefault);
        },
        onEdit: async function (item) {
            item = await this.fetchDetail(item || this.selected[0]);
            this.change(item);
        },
        fetchDetail: async function ({ id }) {
            let item;

            await this.GET_MODEL({
                model: this.model,
                id,
            }).then((data) => {
                item = {
                    ...data,
                    rev: {
                        price: Number(data.rev.price),
                    },
                };
            });

            return item;
        },

        // revision related routines
        confirmRev(rev) {
            this.selectedRev = [rev];
            this.$nextTick(() => (this.dialogDeleteRev = true));
        },
        removeRev: async function () {
            this.START_LOADING();
            await this.DELETE_MODELS({
                model: "material-rev",
                ids: map(this.selectedRev, "id"),
            })
                .then(async (ids) => {
                    this.form = await this.fetchDetail(this.form);

                    this.dialogDeleteRev = false;
                    this.$nextTick(() => (this.selectedRev = []));
                })
                .catch((e) => eHandler(e))
                .then(() => this.STOP_LOADING());
        },
    },
    mounted() {
        this.fetchList("matter")
            .then((data) => (this.listMatter = data))
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
