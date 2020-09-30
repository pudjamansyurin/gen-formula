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

                        <validation-provider
                            v-if="form._packers"
                            name="_packers"
                            v-slot="{ errors, valid }"
                        >
                            <v-autocomplete
                                v-model="form._packers"
                                :items="listPacker"
                                :error-messages="errors"
                                :success="valid"
                                :readonly="fieldDisabled"
                                item-text="name"
                                label="Packer"
                                hint="The packer"
                                persistent-hint
                                deletable-chips
                                return-object
                                multiple
                                chips
                            ></v-autocomplete>
                        </validation-provider>

                        <template v-if="form._packers">
                            <v-card
                                v-for="(packer, index) in form._packers"
                                :key="`_packers.${index}.content`"
                                class="mb-3"
                            >
                                <v-card-text>
                                    <v-row dense>
                                        <v-col cols="12" sm="4">
                                            <validation-provider
                                                :vid="`_packers.${index}.content`"
                                                :name="`${packer.name} content`"
                                                v-slot="{
                                                    errors,
                                                    valid,
                                                }"
                                            >
                                                <v-text-field
                                                    v-model.number="
                                                        packer.content
                                                    "
                                                    :error-messages="errors"
                                                    :success="valid"
                                                    :readonly="fieldDisabled"
                                                    :filled="fieldDisabled"
                                                    :label="packer.name"
                                                    hint="The packer content"
                                                    type="number"
                                                    persistent-hint
                                                ></v-text-field>
                                            </validation-provider>
                                        </v-col>
                                        <v-col cols="12" sm="8">
                                            <div
                                                v-for="(pack,
                                                idx) in packer.packs"
                                                :key="`_packers.${index}.packs.${idx}.price`"
                                            >
                                                <validation-provider
                                                    :vid="`_packers.${index}.packs.${idx}.price`"
                                                    :name="`${pack.name} price`"
                                                    v-slot="{
                                                        errors,
                                                        valid,
                                                    }"
                                                >
                                                    <v-text-field
                                                        v-model.number="
                                                            pack.price
                                                        "
                                                        :error-messages="errors"
                                                        :success="valid"
                                                        :readonly="
                                                            fieldDisabled
                                                        "
                                                        :filled="fieldDisabled"
                                                        :label="pack.name"
                                                        prefix="Rp"
                                                        type="number"
                                                        hint="The pack price"
                                                        counter
                                                        persistent-hint
                                                    ></v-text-field>
                                                </validation-provider>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </template>

                        <v-row dense>
                            <v-col cols="12" sm="4"> </v-col>
                            <v-col cols="12" sm="8">
                                <v-text-field
                                    :value="priceTotal"
                                    hint="This the total price"
                                    label="Total Price"
                                    type="number"
                                    prefix="Rp"
                                    filled
                                    readonly
                                    counter
                                    persistent-hint
                                ></v-text-field>
                            </v-col>
                        </v-row>
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
                        <v-divider :key="`divider-${rev.id}`"></v-divider>
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
        priceTotal() {
            if (this.form._packers) {
                return this.form._packers
                    .reduce((carry, { content, packs }) => {
                        let subTotal =
                            packs.reduce((carry, { price }) => {
                                return carry + Number(price);
                            }, 0) / Number(content);

                        return carry + subTotal;
                    }, 0)
                    .toFixed(2);
            }
            return 0;
        },
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.listPacker = this.$_.cloneDeep(this.listPackerDefault);
            this.form = {
                ...this.$_.cloneDeep(item),
                _packers: [],
            };
        },
        onCreate() {
            this.change(this.modelProp);
        },
        onEdit(item) {
            this.change(item || this.selected[0]);
            this.fetchDetail();
        },
        fetchDetail() {
            this.GET_MODEL({
                model: this.model,
                id: this.form.id,
            }).then((data) => {
                this.form = {
                    ...this.$_.cloneDeep(data),
                    _packers: this.makePackersDetail(data.packagers),
                };
            });
        },
        makePackersDetail(packagers) {
            return packagers.map(({ packer, content, packets }) => ({
                id: packer.id,
                name: packer.name,
                content,
                packs: packets.map(({ id, name, pivot }) => ({
                    id,
                    name,
                    price: pivot.price,
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
