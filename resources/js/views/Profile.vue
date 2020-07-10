<template>
    <v-col cols="8">
        <validation-observer v-slot="{ handleSubmit }" ref="form">
            <v-form @submit.prevent="handleSubmit(saveItem)">
                <v-card :loading="!!loading">
                    <v-card-title>
                        <span class="headline">My Profile</span>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>
                        <validation-provider
                            name="name"
                            v-slot="{ errors, valid }"
                        >
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

                        <validation-provider
                            name="email"
                            v-slot="{ errors, valid }"
                        >
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

                        <validation-provider
                            name="role.id"
                            v-slot="{ errors, valid }"
                        >
                            <v-select
                                v-model="form.role"
                                :items="[form.role]"
                                :error-messages="errors"
                                :success="valid"
                                :loading="!!loading"
                                chips
                                item-text="name"
                                item-value="id"
                                label="Role"
                                readonly
                                hint="Role for this user"
                                persistent-hint
                                return-object
                            ></v-select>
                        </validation-provider>

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
                                        show_password
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        show_password = !show_password
                                    "
                                    :error-messages="errors"
                                    :success="valid"
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
                                        show_password
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        show_password = !show_password
                                    "
                                    :error-messages="errors"
                                    :success="valid"
                                    counter
                                    autocomplete="off"
                                ></v-text-field>
                            </validation-provider>
                        </template>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            @click="change_password = !change_password"
                            text
                            >{{
                                change_password ? "Keep" : "Change"
                            }}
                            Password</v-btn
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            :disabled="!!loading"
                            type="submit"
                            color="primary"
                            large
                            >Save</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-form>
        </validation-observer>
    </v-col>
</template>

<script>
import { cloneDeep } from "lodash";
import { mapState, mapActions } from "vuex";
import { SAVE_MODEL } from "../store/model/action-types";
import { User } from "../models";

const model = "user";

export default {
    name: "profile",
    data() {
        return {
            change_password: false,
            show_password: false,
            form: cloneDeep(User)
        };
    },
    computed: {
        ...mapState("app", ["loading", "auth"])
    },
    methods: {
        ...mapActions("model", [SAVE_MODEL]),
        close() {},
        saveItem() {
            const { form: payload } = this;

            if (!this.change_password) {
                this.$delete(payload, "password");
                this.$delete(payload, "password_confirmation");
            }

            this.SAVE_MODEL({
                model,
                payload
            })
                .then(async data => {
                    this.UPDATE_MODEL({
                        model,
                        data
                    });
                    this.close();
                })
                .catch(errors => {
                    this.$refs.form.setErrors(errors);
                });
        }
    },
    watch: {
        "auth.profile": {
            immediate: true,
            handler(val) {
                this.form = val;
            }
        }
    }
};
</script>

<style></style>
