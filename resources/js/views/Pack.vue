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
                            :items="listPacker"
                            :error-messages="errors"
                            :success="valid"
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            item-text="name"
                            item-value="id"
                            label="Packer"
                            hint="The packer"
                            persistent-hint
                            chips
                        ></v-autocomplete>
                    </validation-provider>
                </validation-observer>
                <v-btn v-show="false" type="submit"></v-btn>
            </v-form>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { Pack } from "../models";
import { CommonMixin, ModelMixin, FetchListMixin } from "../mixins";
import { eHandler, castId } from "../utils/helper";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin, FetchListMixin],
    props: ["id"],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "pack",
            modelDefault: Pack,
            form: this.$_.cloneDeep(Pack),
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

            listPacker: [],
        };
    },
    computed: {
        ...mapState("model", ["packs"]),
        packerId() {
            return castId(this.id);
        },
    },
    mounted() {
        this.fetchList("packer")
            .then((data) => (this.listPacker = data))
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
