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
            <v-form @submit.prevent="save">
                <validation-observer ref="form">
                    <validation-provider name="name" v-slot="{ errors, valid }">
                        <v-text-field
                            v-model="form.name"
                            :error-messages="errors"
                            :success="valid"
                            label="Name"
                            type="text"
                            hint="This is to identify the user"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        name="email"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            v-model="form.email"
                            :error-messages="errors"
                            :success="valid"
                            label="E-mail"
                            type="email"
                            hint="This email is for recovery"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        name="role_id"
                        v-slot="{ errors, valid }"
                    >
                        <v-autocomplete
                            v-model="form.role_id"
                            :items="listRole"
                            :error-messages="errors"
                            :success="valid"
                            item-text="name"
                            item-value="id"
                            label="Role"
                            hint="Role for this user"
                            chips
                            persistent-hint
                        ></v-autocomplete>
                    </validation-provider>

                    <v-btn
                        v-if="!creating"
                        color="red"
                        @click="changePassword = !changePassword"
                        dark
                        small
                    >
                        {{ passwordChangeText }} Password
                    </v-btn>
                    <template v-if="changePassword">
                        <validation-provider
                            name="password"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model="form.password"
                                :type="passwordState.type"
                                :append-icon="passwordState.icon"
                                :error-messages="errors"
                                :success="valid"
                                @click:append="showPassword = !showPassword"
                                label="Password"
                                hint="Password for this user"
                                autocomplete="off"
                                persistent-hint
                                counter
                            ></v-text-field>
                        </validation-provider>

                        <validation-provider
                            name="password_confirmation"
                            v-slot="{ errors, valid }"
                        >
                            <v-text-field
                                v-model="form.password_confirmation"
                                :type="passwordState.type"
                                :append-icon="passwordState.icon"
                                :error-messages="errors"
                                :success="valid"
                                @click:append="showPassword = !showPassword"
                                label="Password Confirmation"
                                hint="Fill again the password"
                                autocomplete="off"
                                persistent-hint
                                counter
                            ></v-text-field>
                        </validation-provider>
                    </template>
                </validation-observer>
                <v-btn v-show="false" type="submit"></v-btn>
            </v-form>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { User } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, ModelMixin, PasswordMixin } from "../mixins";
import { GET_LIST } from "../store/model/action-types";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, ModelMixin, PasswordMixin],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "user",
            modelProp: User,
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
        };
    },
    computed: {
        ...mapState("app", ["profile"]),
        ...mapState("model", ["users"]),
    },
    methods: {
        ...mapActions("model", [GET_LIST]),
        chipColor(item) {
            if (this.profile.id == item.id) return "primary";
            return "green";
        },
        onCreate() {
            this.changePassword = true;
            this.form = this.copyWithPassword(this.modelProp);
        },
        onEdit(item) {
            // redirect if me
            if (this.profile.id == item.id) {
                this.$router.push({ name: "profile" });
                return;
            }

            this.changePassword = false;
            this.form = this.copyWithPassword(item || this.selected[0]);
        },
        onSave() {
            this.ignorePasswordWhenUnchanged();
        },
        fetchListRole: async function () {
            await this.GET_LIST({
                model: "role",
            })
                .then((data) => {
                    this.listRole = data.map(({ id, name }) => ({
                        id,
                        name: name.toUpperCase(),
                    }));
                })
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        dialog: function (open) {
            if (open) {
                this.fetchListRole();
            }
        },
    },
};
</script>

<style></style>
