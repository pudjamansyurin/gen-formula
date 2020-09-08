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
                    >Profile</v-btn
                >
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
                    v-if="profile.id == item.id"
                    :to="{ name: 'profile' }"
                    color="primary"
                    :small="dense"
                    >{{ item.name }}</v-chip
                >
                <template v-else>
                    {{ item.name }}
                </template>
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

                <validation-provider name="email" v-slot="{ errors, valid }">
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

                <validation-provider name="role.id" v-slot="{ errors, valid }">
                    <v-select
                        v-model="form.role"
                        :items="list_roles"
                        :error-messages="errors"
                        :success="valid"
                        :loading="!!loading"
                        item-text="name"
                        item-value="id"
                        label="Role"
                        hint="Role for this user"
                        chips
                        persistent-hint
                        return-object
                    ></v-select>
                </validation-provider>

                <v-btn
                    v-if="form.id > 0"
                    color="red"
                    @click="change_password = !change_password"
                    dark
                    small
                    >{{ change_password ? "Keep" : "Change" }} Password</v-btn
                >
                <template v-if="change_password">
                    <validation-provider
                        name="password"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            v-model="form.password"
                            :type="show_password ? 'text' : 'password'"
                            :append-icon="
                                show_password ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :error-messages="errors"
                            :success="valid"
                            @click:append="show_password = !show_password"
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
                            :type="show_password ? 'text' : 'password'"
                            :append-icon="
                                show_password ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :error-messages="errors"
                            :success="valid"
                            @click:append="show_password = !show_password"
                            label="Password Confirmation"
                            hint="Fill again the password"
                            autocomplete="off"
                            persistent-hint
                            counter
                        ></v-text-field>
                    </validation-provider>
                </template>
            </validation-observer>
        </the-dialog-form>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
} from "../store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { User } from "../models";
import { eHandler } from "../utils/helper";
import AppTopBar from "../components/app/AppTopBar";
import TheData from "../components/TheData";
import TheDialogForm from "../components/TheDialogForm";
import TheDialogDelete from "../components/TheDialogDelete";
import mixins from "../mixins";

export default {
    mixins: [mixins],
    components: {
        AppTopBar,
        TheData,
        TheDialogForm,
        TheDialogDelete,
    },
    data() {
        return {
            model: "user",
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
                { text: "Email", value: "email" },
                { text: "Role", value: "role.name" },
                { text: "Last At", value: "last_at" },
                { text: "Last Ip", value: "last_ip" },
            ],
            dialog: false,
            dialogDelete: false,
            change_password: false,
            show_password: false,
            list_roles: [],
            form: {},
        };
    },
    computed: {
        ...mapState("app", ["profile"]),
        ...mapState("model", ["users"]),
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
        close() {
            this.dialog = false;
            this.$nextTick(() => this.$refs.form.reset());
        },
        create() {
            this.form = {
                ...this.$_.cloneDeep(User),
                password: null,
                password_confirmation: null,
            };
            this.change_password = true;
            this.dialog = true;
        },
        edit() {
            this.form = {
                ...this.$_.cloneDeep(this.selected[0]),
                password: null,
                password_confirmation: null,
            };
            this.change_password = false;
            this.dialog = true;
        },
        remove: async function () {
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
        save() {
            // validate
            this.$refs.form.validate().then((valid) => {
                if (valid) {
                    // pass validation
                    const { model, form: payload, change_password } = this;
                    if (!change_password) {
                        this.$delete(payload, "password");
                        this.$delete(payload, "password_confirmation");
                    }
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
        fetchRoles: async function () {
            await this.GET_MODELS({
                model: "role",
                params: {
                    temporary: true,
                },
            })
                .then(
                    ({ data }) =>
                        (this.list_roles = this.$_.map(data, (el) =>
                            this.$_.pick(el, ["id", "name"])
                        ))
                )
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        dialog: function (val) {
            if (val && this.list_roles.length == 0) {
                this.fetchRoles();
            }
        },
        options: {
            handler(a, b) {
                if (!this.$_.isEqual(a, b)) {
                    this.fetch();
                }
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>

<style></style>
