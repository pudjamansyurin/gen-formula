<template>
    <v-col cols="8">
        <v-card v-if="!edit_profile" class="mx-auto">
            <v-list-item>
                <v-list-item-avatar color="grey">
                    <v-img src="/img/unknown.png" alt="Profile"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{
                        profile.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle
                        >Profile

                        <v-btn @click="edit" color="blue darken-1" text
                            >Edit</v-btn
                        >
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo">mdi-email</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title
                        >{{ profile.email }}
                        <v-chip
                            class="ma-2"
                            :color="profile.verified_at ? 'teal' : 'orange'"
                            text-color="white"
                            small
                        >
                            <v-avatar left>
                                <v-icon small>{{
                                    profile.verified_at
                                        ? "mdi-checkbox-marked-circle"
                                        : "mdi-help-circle-outline"
                                }}</v-icon>
                            </v-avatar>
                            {{
                                profile.verified_at
                                    ? "Verified"
                                    : "Need verification"
                            }}
                        </v-chip>
                    </v-list-item-title>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo"
                        >mdi-account-supervisor-circle</v-icon
                    >
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{
                        profile.role.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Role</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo">mdi-account-edit</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{
                        profile.created_at | moment("from")
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Created at</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="profile.updated_at">
                <v-list-item-action></v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{
                        profile.updated_at | moment("from")
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Updated at</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo">mdi-login</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{
                        profile.last_at | moment("from")
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Last login</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action></v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ profile.last_ip }}</v-list-item-title>
                    <v-list-item-subtitle>Last Ip Address</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>

        <validation-observer v-else v-slot="{ handleSubmit }" ref="form">
            <v-form @submit.prevent="handleSubmit(saveItem)">
                <v-card :loading="!!loading">
                    <v-card-title>
                        <span class="headline">Edit Profile</span>
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
                            color="blue darken-1"
                            @click="change_password = !change_password"
                            text
                            >{{
                                change_password ? "Keep" : "Change"
                            }}
                            Password</v-btn
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
                                        show_password
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        show_password = !show_password
                                    "
                                    :error-messages="errors"
                                    :success="valid"
                                    hint="Your new password"
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
                                        show_password
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    @click:append="
                                        show_password = !show_password
                                    "
                                    :error-messages="errors"
                                    :success="valid"
                                    hint="Fill again the password"
                                    persistent-hint
                                    counter
                                    autocomplete="off"
                                ></v-text-field>
                            </validation-provider>
                        </template>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn @click="edit_profile = false" color="indigo" text
                            >Cancel</v-btn
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
import { mapState, mapActions, mapMutations } from "vuex";
import { SAVE_MODEL } from "../store/model/action-types";
import { SET_PROFILE, SET_MESSAGE } from "../store/app/mutation-types";

const model = "user";

export default {
    name: "profile",
    data() {
        return {
            edit_profile: false,
            change_password: false,
            show_password: false,
            form: null
        };
    },
    computed: {
        ...mapState("app", ["loading", "profile"])
    },
    methods: {
        ...mapMutations("app", [SET_PROFILE, SET_MESSAGE]),
        ...mapActions("model", [SAVE_MODEL]),
        close() {
            this.edit_profile = false;
        },
        edit() {
            this.form = cloneDeep({
                ...this.profile,
                password: null,
                password_confirmation: null
            });

            this.change_password = false;
            this.edit_profile = true;
        },
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
                    // update profile
                    this.SET_PROFILE(data);
                    this.SET_MESSAGE({
                        text: "Profile udpated successfully",
                        type: "success"
                    });
                    this.close();
                })
                .catch(errors => {
                    this.$refs.form.setErrors(errors);
                });
        }
    }
};
</script>

<style></style>
