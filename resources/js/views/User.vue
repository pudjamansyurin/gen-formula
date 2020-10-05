<template>
    <fragment>
        <app-top-bar
            v-model="options"
            :selected.sync="selected"
            :page="model"
            @edit="edit"
            @create="create"
            @delete="dialogDelete = true"
            crud
        ></app-top-bar>

        <the-data
            v-model="selected"
            :items="users"
            :options.sync="options"
            :headers="headers"
            :total="total"
            :model="model"
        >
            <template v-slot:card="{ item }">
                <v-btn
                    v-if="profile.id == item.id"
                    :to="{ name: 'profile' }"
                    :outlined="!item.selected"
                    color="green"
                    absolute
                    top
                    right
                    small
                    tile
                >
                    Profile
                </v-btn>
                <v-card-text>
                    <div class="overline">
                        {{ item.last_at | moment("from") }}
                    </div>
                    <div class="overline mb-2">
                        {{ item.role.name }}
                    </div>
                    <div class="subtitle-2 font-weight-bold">
                        {{ item.name }}
                    </div>
                    {{ item.email }}
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

            <template v-slot:[`item.last_at`]="{ item }">
                <template v-if="item.last_at">
                    {{ item.last_at | moment("from") }}
                </template>
                <template v-else> Never </template>
            </template>
            <template v-slot:[`item.last_ip`]="{ item }">
                {{ item.last_ip || "None" }}
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
            @close="close"
            @submit="save"
        >
            <user-form
                v-if="form"
                ref="form"
                v-model="form"
                @save="save"
                :change-pass.sync="changePassword"
                :field-disabled="fieldDisabled"
                :creating="creating"
                :list-role="listRole"
            ></user-form>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { User } from "../models";
import { eHandler } from "../utils/helper";
import {
    CommonMixin,
    ModelMixin,
    PasswordMixin,
    FetchListMixin,
} from "../mixins";

import AppTopBar from "../components/app/AppTopBar";
import UserForm from "../components/features/UserForm";

export default {
    mixins: [CommonMixin, ModelMixin, PasswordMixin, FetchListMixin],
    components: {
        AppTopBar,
        UserForm,
    },
    data() {
        return {
            model: "user",
            modelDefault: User,
            form: {
                ...this.$_.cloneDeep(User),
                password: null,
                password_confirmation: null,
            },
            headers: [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role.name", sortable: false },
                { text: "LastAt", value: "last_at" },
                { text: "LastIp", value: "last_ip" },
            ],

            listRole: [],
            changePassword: false,
        };
    },
    computed: {
        ...mapState("app", ["profile"]),
        ...mapState("model", ["users"]),
    },
    methods: {
        chipColor(item) {
            return this.profile.id == item.id ? "primary" : "green";
        },
        change(item) {
            this.changePassword = item.id === -1;
            this.form = this.copyWithPassword(item);
        },
        onCreate() {
            this.change(this.modelDefault);
        },
        onEdit(item) {
            this.change(item || this.selected[0]);
        },
        onEdit(item) {
            // redirect to profile for current logged-in user
            if (this.profile.id == item.id) {
                this.$router.push({ name: "profile" });
                return;
            }
            // next for other users
            this.change(item || this.selected[0]);
        },
        onSave() {
            this.removeUnchangedPassword();
        },
    },
    mounted() {
        this.fetchList("role")
            .then(
                (data) =>
                    (this.listRole = data.map(({ id, name }) => ({
                        id,
                        name: name.toUpperCase(),
                    })))
            )
            .catch((e) => eHandler(e));
    },
};
</script>

<style></style>
