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
            <pack-form
                v-if="form"
                ref="form"
                v-model="form"
                @save="save"
                :field-disabled="fieldDisabled"
                :list-packer="listPacker"
            ></pack-form>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { Pack } from "../models";
import { CommonMixin, ModelMixin, FetchListMixin } from "../mixins";
import { eHandler, castId } from "../utils/helper";

import AppTopBar from "../components/app/AppTopBar";
import PackForm from "../components/features/PackForm";

export default {
    mixins: [CommonMixin, ModelMixin, FetchListMixin],
    props: ["id"],
    components: {
        AppTopBar,
        PackForm,
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
                {
                    text: "Packager",
                    value: "packagers_count",
                    align: "center",
                },
                // {
                //     text: "Package",
                //     value: "packages_count",
                //     align: "center",
                // },
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
