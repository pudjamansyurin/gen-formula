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
            :items="packages"
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
            @close="close"
            @submit="save"
        >
            <template v-slot:DATA>
                <package-form
                    ref="form"
                    v-model="form"
                    @save="save"
                    :field-disabled="fieldDisabled"
                    :list-unit="listUnit"
                    :list-packer="listPacker"
                ></package-form>
            </template>

            <template v-slot:REV>
                <rev-timeline v-if="form.revs" :revs="form.revs">
                </rev-timeline>
            </template>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { cloneDeep } from "lodash";

import { Package } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, ModelMixin, TabMixin, FetchListMixin } from "../mixins";

import AppTopBar from "../components/app/AppTopBar";
import PackageForm from "../components/features/PackageForm";
import RevTimeline from "../components/features/RevTimeline";

export default {
    mixins: [CommonMixin, ModelMixin, TabMixin, FetchListMixin],
    components: {
        AppTopBar,
        PackageForm,
        RevTimeline,
    },
    data() {
        return {
            model: "package",
            modelDefault: Package,
            form: cloneDeep(Package),
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
                {
                    text: "UpdatedAt",
                    value: "updated_at",
                },
            ],

            listUnit: [],
            listPacker: [],
            listPackerDefault: [],
        };
    },
    computed: {
        ...mapState("model", ["packages"]),
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.listPacker = cloneDeep(this.listPackerDefault);
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
                    _packers: this.makePackersDetail(data.packagers),
                };
            });

            return item;
        },
        makePackersDetail(packagers) {
            return packagers.map(({ packer, content, packets }) => ({
                id: packer.id,
                name: packer.name,
                content,
                packs: packets.map(({ id, name, pivot }) => ({
                    id,
                    name,
                    price: Number(pivot.price),
                })),
            }));
        },
        makeListPackers(data) {
            return data.map(({ id, name, packs }) => ({
                id,
                name,
                content: null,
                packs: packs.map(({ id, name }) => ({
                    id,
                    name,
                    price: null,
                })),
            }));
        },
    },
    mounted() {
        this.fetchList("unit")
            .then((data) => (this.listUnit = data))
            .catch((e) => eHandler(e));
        this.fetchList("packer")
            .then((data) => {
                this.listPackerDefault = this.makeListPackers(data);
            })
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
