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

    <v-alert
      v-if="!formulas.length"
      :type="!!loading ? 'info' : 'warning'"
      border="top"
      outlined
    >
      <span v-if="!!loading">Fetching {{ model }} data...</span>
      <span v-else>Oops, no {{ model }} data yet.</span>
    </v-alert>
    <div v-else>
      <the-data-card
        v-if="mobile"
        v-model="selected"
        :items="formulas"
        :options.sync="options"
      >
        <template v-slot="{ item }">
          <v-btn
            @click.stop="editPercent(item.id)"
            :color="item.percent_total == 100 ? 'green' : 'red'"
            :outlined="!item.selected"
            absolute
            top
            right
            small
            tile
            >{{ item.price_total | currency }}</v-btn
          >
          <v-card-text>
            <div class="overline">{{ item.updated_at | moment("from") }}</div>
            <div class="overline mb-2">{{ item.user.name }}</div>
            <div class="subtitle-2 font-weight-bold">{{ item.name }}</div>
            {{ item.description }}
          </v-card-text>
        </template>
      </the-data-card>
      <the-data-table
        v-else
        v-model="selected"
        :items="formulas"
        :options.sync="options"
        :headers="headers"
        :total="total"
      >
        <template v-slot:[`item.name`]="{ item }">
          <v-chip
            @click="editPercent(item.id)"
            :color="item.percent_total == 100 ? 'green' : 'red'"
            :small="dense"
            dark
            >{{ item.name }}</v-chip
          >
        </template>
        <template v-slot:[`item.price_total`]="{ item }">
          {{ item.price_total | currency }}
        </template>
        <template v-slot:[`item.percent_total`]="{ item }"
          >{{ item.percent_total }} %</template
        >
        <template v-slot:[`item.percent_count`]="{ item }">
          {{ item.percents.length }}
        </template>
        <template v-slot:[`item.updated_at`]="{ item }">
          {{ item.updated_at | moment("from") }}
        </template>
      </the-data-table>
    </div>

    <the-dialog-delete
      v-model="dialogDelete"
      :selected="selected"
      :model="model"
      @delete="deleteItem"
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
            label="Formula name"
            type="text"
            hint="This is to identify the formula"
            counter
            persistent-hint
          ></v-text-field>
        </validation-provider>

        <validation-provider name="description" v-slot="{ errors, valid }">
          <v-text-field
            v-model="form.description"
            :error-messages="errors"
            :success="valid"
            label="Formula description"
            type="text"
            hint="Short description about the formula"
            counter
            persistent-hint
          ></v-text-field>
        </validation-provider>
      </validation-observer>
    </the-dialog-form>

    <the-dialog-form
      v-model="dialogPercent"
      :title="formPercentTitle"
      @close="closePercent"
      @submit="savePercent"
      width="700px"
      :readonly="!form.authorized"
    >
      <validation-observer ref="form_percent">
        <v-row>
          <v-col cols="12" sm="6">
            <validation-provider name="formula" v-slot="{ errors, valid }">
              <v-autocomplete
                v-model="form.percents"
                :items="list_materials"
                :error-messages="errors"
                :success="valid"
                :loading="!!loading"
                :readonly="!form.authorized"
                :clearable="form.authorized"
                item-text="material.name"
                item-value="material.id"
                label="Related materials"
                hint="The related materials"
                chips
                multiple
                auto-select-first
                deletable-chips
                persistent-hint
                return-object
              ></v-autocomplete>
            </validation-provider>

            <validation-provider
              name="percent_total"
              v-slot="{ errors, valid }"
            >
              <v-text-field
                class="mt-3"
                label="Total Percentage"
                type="number"
                :value="percentTotal"
                :error-messages="errors"
                :success="valid"
                suffix="%"
                hint="This should be 100%"
                readonly
                filled
                persistent-hint
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col cols="12" sm="6">
            <validation-provider
              v-for="(el, key) in form.percents"
              :key="el.material.id"
              :name="`formula.${key}.percent`"
              v-slot="{ errors, valid }"
            >
              <v-text-field
                v-model.number="el.percent"
                :label="el.material.name"
                :error-messages="errors"
                :success="valid"
                :readonly="!form.authorized"
                type="number"
                suffix="%"
                hint="This material's percentage"
                persistent-hint
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
      </validation-observer>
    </the-dialog-form>
  </fragment>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {
  GET_MODELS,
  SAVE_MODEL,
  DELETE_MODELS,
} from "../store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { Formula } from "../models";
import { eHandler } from "../utils/helper";
import AppTopBar from "../components/app/AppTopBar.vue";
import TheDataCard from "../components/TheDataCard.vue";
import TheDataTable from "../components/TheDataTable.vue";
import TheDialogForm from "../components/TheDialogForm.vue";
import TheDialogDelete from "../components/TheDialogDelete.vue";
import mixins from "../mixins";

export default {
  mixins: [mixins],
  components: {
    AppTopBar,
    TheDataCard,
    TheDataTable,
    TheDialogForm,
    TheDialogDelete,
  },
  data() {
    return {
      model: "formula",
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
        { text: "Description", value: "description" },
        {
          text: "Tot.Price",
          value: "price_total",
          align: "right",
          sortable: false,
          width: 150,
        },
        {
          text: "Tot.Percent",
          value: "percent_total",
          align: "center",
          sortable: false,
        },
        {
          text: "Rel.Material",
          value: "percent_count",
          align: "center",
          sortable: false,
        },
        { text: "Creator", value: "user.name" },
        { text: "Updated At", value: "updated_at" },
      ],
      dialog: false,
      dialogDelete: false,
      dialogPercent: false,
      list_materials: [],
      form: this.$_.cloneDeep(Formula),
    };
  },
  computed: {
    ...mapState("model", ["formulas"]),
    formPercentTitle() {
      return this.form.name || "Related materials";
    },
    percentTotal() {
      return this.$_.reduce(
        this.form.percents,
        (sum, el) => sum + Number(el.percent),
        0
      );
    },
  },
  methods: {
    ...mapMutations("model", [UPDATE_MODEL]),
    ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
    create() {
      this.form = this.$_.cloneDeep(Formula);
      this.dialog = true;
    },
    edit() {
      this.form = this.$_.cloneDeep(this.selected[0]);
      this.dialog = true;
    },
    editPercent(id) {
      this.form = this.$_.cloneDeep(this.$_.find(this.formulas, { id: id }));
      this.dialogPercent = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => this.$refs.form.reset());
    },
    closePercent() {
      this.dialogPercent = false;
      this.$nextTick(() => this.$refs.form_percent.reset());
    },
    fetchMaterials: async function () {
      await this.GET_MODELS({
        model: "material",
        params: {
          itemsPerPage: -1,
          temporary: true,
        },
      })
        .then(
          ({ data }) =>
            (this.list_materials = this.$_.map(data, ({ id, name }) => ({
              material: {
                id,
                name,
              },
              percent: 0,
            })))
        )
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
    savePercent() {
      // validate
      this.$refs.form_percent.validate().then((valid) => {
        if (valid) {
          let { model, form: payload } = this;
          // pass validation
          this.SAVE_MODEL({
            url: `formula/${payload.id}/percent`,
            payload: {
              formula: this.$_.map(payload.percents, (el) => ({
                material_id: el.material.id,
                percent: el.percent,
              })),
            },
          })
            .then(async (data) => {
              this.UPDATE_MODEL({
                model,
                data,
              });
              this.closePercent();
            })
            .catch((e) => this.$refs.form_percent.setErrors(eHandler(e)));
        }
      });
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
    deleteItem: async function () {
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
  },
  watch: {
    dialogPercent: function (val) {
      if (val && this.list_materials.length == 0) {
        this.fetchMaterials();
      }
    },
    options: {
      handler(val) {
        this.fetch();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style></style>
