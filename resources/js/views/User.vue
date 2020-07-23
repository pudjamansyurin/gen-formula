<template>
    <v-col cols="12">
        <the-data-table
            v-model="selected"
            :headers="headers"
            :model="model"
            :items="users"
            :total="total"
            @unselect="selected = []"
            @fetch="fetch"
            @create="create"
            @edit="edit"
            @delete="dialogDelete = true"
        >
            <template v-slot:item.name="{ item }">
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
            <template v-slot:item.last_at="{ item }">
                <template v-if="item.last_at">
                    {{ item.last_at | moment("from") }}
                </template>
                <template v-else>
                    Never
                </template>
            </template>
            <template v-slot:item.last_ip="{ item }">
                {{ item.last_ip || "None" }}
            </template>
        </the-data-table>

        <the-dialog-form
            v-model="dialog"
            :form="form"
            @close="close"
            @submit="save"
        >
            <validation-observer ref="form">
                <validation-provider name="name" v-slot="{ errors, valid }">
                    <v-text-field
                        label="Name"
                        type="text"
                        v-model="form.name"
                        :error-messages="errors"
                        :success="valid"
                        counter
                        hint="This is to identify the user"
                        persistent-hint
                    ></v-text-field>
                </validation-provider>

                <validation-provider name="email" v-slot="{ errors, valid }">
                    <v-text-field
                        label="E-mail"
                        type="email"
                        v-model="form.email"
                        :error-messages="errors"
                        :success="valid"
                        counter
                        hint="This email is for recovery"
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
                        chips
                        item-text="name"
                        item-value="id"
                        label="Role"
                        hint="Role for this user"
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
                            label="Password"
                            v-model="form.password"
                            :type="show_password ? 'text' : 'password'"
                            :append-icon="
                                show_password ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="show_password = !show_password"
                            :error-messages="errors"
                            :success="valid"
                            hint="Password for this user"
                            persistent-hint
                            counter
                            autocomplete="off"
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        name="password_confirmation"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            label="Password Confirmation"
                            v-model="form.password_confirmation"
                            :type="show_password ? 'text' : 'password'"
                            :append-icon="
                                show_password ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="show_password = !show_password"
                            :error-messages="errors"
                            :success="valid"
                            hint="Fill again the password"
                            persistent-hint
                            counter
                            autocomplete="off"
                        ></v-text-field>
                    </validation-provider>
                </template>
            </validation-observer>
        </the-dialog-form>

        <the-dialog-delete
            v-model="dialogDelete"
            :selected="selected"
            :model="model"
            @delete="deleteItem"
            @close="dialogDelete = false"
        >
            <template v-slot="{ item }">
                {{ item.name }}
            </template>
        </the-dialog-delete>
    </v-col>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS,
} from "@/store/model/action-types";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import { User } from "@/models";
import { eHandler } from "../helpers";
import TheDataTable from "../components/TheDataTable.vue";
import TheDialogForm from "../components/TheDialogForm.vue";
import TheDialogDelete from "../components/TheDialogDelete.vue";

const model = "user";

export default {
    name: model,
    components: {
        TheDataTable,
        TheDialogForm,
        TheDialogDelete,
    },
    data() {
        return {
            model,
            params: {},
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
        ...mapState("app", ["loading", "dense", "profile"]),
        ...mapState("model", ["users"]),
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [GET_MODELS, SAVE_MODEL, DELETE_MODELS]),
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
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.$refs.form.reset();
            });
        },
        fetchRoles: async function () {
            await this.GET_MODELS({
                model: "role",
                params: {
                    temporary: true,
                },
            })
                .then(({ data }) => {
                    this.list_roles = this.$_.map(data, (el) =>
                        this.$_.pick(el, ["id", "name"])
                    );
                })
                .catch((e) => eHandler(e));
        },
        fetch: async function (params) {
            if (params) {
                this.params = params;
            }

            await this.GET_MODELS({
                model,
                params: this.params,
            })
                .then(({ meta }) => {
                    this.total = meta.total;
                })
                .catch((e) => eHandler(e));
        },
        save() {
            // validate
            this.$refs.form.validate().then((valid) => {
                if (valid) {
                    // pass validation
                    const { form: payload } = this;
                    if (!this.change_password) {
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
                        .catch((e) => {
                            let errors = eHandler(e);
                            this.$refs.form.setErrors(errors);
                        });
                }
            });
        },
        deleteItem: async function () {
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
        dialog: function (val) {
            if (val && this.list_roles.length == 0) {
                this.fetchRoles();
            }
        },
    },
};
</script>

<style></style>
