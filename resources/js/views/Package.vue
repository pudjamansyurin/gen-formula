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
            <template v-slot="{ item }">
                {{ item.name }}
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
                                        v-model.number="form.capacity"
                                        :error-messages="errors"
                                        :success="valid"
                                        :readonly="fieldDisabled"
                                        :filled="fieldDisabled"
                                        label="Capacity"
                                        type="number"
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
                                        :items="listUnit"
                                        :error-messages="errors"
                                        :success="valid"
                                        :readonly="fieldDisabled"
                                        :filled="fieldDisabled"
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

            <template v-slot:PACK>
                <v-form @submit.prevent="savePacker">
                    <validation-observer ref="form_packer">
                        <validation-provider
                            name="packers"
                            v-slot="{ errors, valid }"
                        >
                            <v-autocomplete
                                v-model="form.packers"
                                :items="listPacker"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                item-text="name"
                                item-value="id"
                                label="Packer"
                                hint="The packer"
                                persistent-hint
                                deletable-chips
                                return-object
                                filled
                                multiple
                                chips
                            ></v-autocomplete>
                        </validation-provider>

                        <template
                            v-if="form.packers && form.packers.length > 0"
                        >
                            <v-list-group
                                v-for="packer in form.packers"
                                :key="packer.id"
                                :value="true"
                            >
                                <template v-slot:activator>
                                    <v-list-item-title>
                                        <validation-provider
                                            name="packer.content"
                                            v-slot="{ errors, valid }"
                                        >
                                            <v-text-field
                                                v-model.number="packer.content"
                                                :error-messages="errors"
                                                :success="valid"
                                                :readonly="fieldDisabled"
                                                :label="packer.name"
                                                type="number"
                                                hint="The packer content"
                                                persistent-hint
                                            ></v-text-field>
                                        </validation-provider>
                                    </v-list-item-title>
                                </template>

                                <!-- <v-list-item
                                    v-for="packet in packager.packets"
                                    :key="packet.id"
                                >
                                    <v-list-item-action>
                                        <v-icon>
                                            mdi-subdirectory-arrow-right
                                        </v-icon>
                                    </v-list-item-action>
                                    <v-list-item-title>
                                        <validation-provider
                                            name="pack.price"
                                            v-slot="{ errors, valid }"
                                        >
                                            <v-text-field
                                                v-model.number="
                                                    packet.pivot.price
                                                "
                                                :error-messages="errors"
                                                :success="valid"
                                                :readonly="fieldDisabled"
                                                :label="packet.name"
                                                prefix="Rp"
                                                type="number"
                                                hint="The pack price"
                                                counter
                                                persistent-hint
                                            ></v-text-field>
                                        </validation-provider>
                                    </v-list-item-title>
                                </v-list-item> -->
                            </v-list-group>
                        </template>
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
                                <v-list-item-title>
                                    {{ rev.price | currency }}
                                </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text>
                                    {{ rev.updated_at | moment("from") }}
                                </v-list-item-action-text>
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

import { Package } from "../models";
import { eHandler } from "../utils/helper";
import {
    CommonMixin,
    ModelMixin,
    FormTabMixin,
    FetchListMixin,
} from "../mixins";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin, FormTabMixin, FetchListMixin],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "package",
            modelProp: Package,
            form: this.$_.cloneDeep(Package),
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
                    value: "revs_price",
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
            formTabList: ["DATA", "PACK", "REV"],
        };
    },
    computed: {
        ...mapState("model", ["packages"]),
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.form = this.$_.cloneDeep(item);
        },
        onCreate() {
            this.change(this.modelProp);
        },
        onEdit(item) {
            this.change(item || this.selected[0]);
        },
        transformData(data) {
            return data.packagers.map(
                ({ packer_id: id, content, packer, packets }) => ({
                    id,
                    content,
                    name: packer.name,
                    packs: packets.map(({ pivot }) => ({
                        pack_id: pivot.pack_id,
                        price: pivot.price,
                    })),
                })
            );
        },
    },
    mounted() {
        this.fetchList("unit")
            .then((data) => (this.listUnit = data))
            .catch((e) => eHandler(e));
        this.fetchList("packer")
            .then((data) => {
                this.listPacker = data.map((el) => ({
                    ...el,
                    content: 1,
                    packs: [],
                }));
            })
            .catch((e) => eHandler(e));
    },
    watch: {
        formTabIndex: function (index) {
            if (this.formTabList[index] !== "PACK") return;
            if (this.creating) return;

            if (!this.form.packagers) {
                this.GET_MODEL({
                    model: this.model,
                    id: this.form.id,
                }).then((data) => {
                    this.form = {
                        ...this.$_.cloneDeep(data),
                        packers: this.transformData(data),
                    };
                });
            }
        },
    },
};
</script>

<style></style>
