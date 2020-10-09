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
            :items="sales"
            :options.sync="options"
            :headers="headers"
            :total="total"
            :model="model"
        >
            <template v-slot:card="{ item }">
                <v-btn
                    @click.stop="edit(item)"
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
            <template v-slot:[`item.filled`]="{ item }">
                {{ item.filled }} %
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
            :width="formWidth"
        >
            <template v-slot:DATA>
                <sale-form
                    ref="form"
                    v-model="form"
                    @save="save"
                    :model-default="modelDefault"
                    :field-disabled="fieldDisabled"
                    :list-package="listPackage"
                    :list-formula="listFormula"
                ></sale-form>
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
import pluralize from "pluralize";

import { Sale } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, ModelMixin, TabMixin, FetchListMixin } from "../mixins";

import AppTopBar from "../components/app/AppTopBar";
import SaleForm from "../components/features/SaleForm";
import RevTimeline from "../components/features/RevTimeline";

export default {
    mixins: [CommonMixin, ModelMixin, TabMixin, FetchListMixin],
    components: {
        AppTopBar,
        SaleForm,
        RevTimeline,
    },
    data() {
        return {
            model: "sale",
            modelDefault: Sale,
            form: this.$_.cloneDeep(Sale),
            headers: [
                { text: "Name", value: "name" },
                {
                    text: "Price",
                    value: "rev.price",
                    align: "right",
                    sortable: false,
                    width: 150,
                },
                // { text: "Filled", align: "center", value: "filled" },
                {
                    text: "Product",
                    value: "products_count",
                    align: "center",
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

            listPackage: [],
            listFormula: [],
        };
    },
    computed: {
        ...mapState("model", ["sales"]),
        formWidth() {
            let { _products } = this.form;
            if (_products && _products.length > 1) {
                return 1000;
            }
            return 500;
        },
    },
    methods: {
        change(item) {
            this.formTabIndex = 0;
            this.form = this.$_.cloneDeep(item);
        },
        onCreate() {
            this.change(this.modelDefault);
        },
        onEdit: async function (item) {
            item = await this.fetchDetail(item || this.selected[0]);
            this.change(item);
        },
        onSave() {
            this.form._products = this.form._products.map((product) => ({
                ...product,
                package_id: this.$_.get(product.package, "id") || null,
                formula_id: this.$_.get(product.formula, "id") || null,
                ratio: Number(product.ratio),
            }));
        },
        fetchDetail: async function ({ id }) {
            let item;

            await this.GET_MODEL({
                model: this.model,
                id,
            }).then((data) => {
                item = {
                    ...data,
                    _products: this.makeProductsDetail(data.products),
                };
            });

            return item;
        },
        makeProductsDetail(products) {
            return products.map(({ formula, package: pkg, ratio }) => ({
                formula,
                package: pkg,
                ratio: Number(ratio),
            }));
        },
    },
    mounted() {
        this.fetchList("package")
            .then((data) => (this.listPackage = data))
            .catch((e) => eHandler(e));
        this.fetchList("formula")
            .then((data) => (this.listFormula = data))
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
