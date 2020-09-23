<template>
    <fragment>
        <app-top-bar page="Profile"></app-top-bar>

        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card v-show="!editting" :loading="!!loading">
                    <v-list-item>
                        <v-list-item-avatar color="grey">
                            <v-img src="/img/unknown.png" alt="Profile"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="headline">
                                {{ profile.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Profile
                                <v-btn
                                    @click="editProfile"
                                    color="primary"
                                    class="ma-2"
                                    small
                                    rounded
                                    dark
                                >
                                    <v-icon small left>mdi-pencil</v-icon>
                                    Edit
                                </v-btn>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-email</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ profile.email }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Email
                                <v-btn
                                    @click="resend"
                                    :color="verifier.color"
                                    class="ma-2"
                                    small
                                    rounded
                                    dark
                                >
                                    <v-icon small left>
                                        {{ verifier.icon }}
                                    </v-icon>
                                    {{ verifier.text }}
                                </v-btn>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">
                                mdi-account-supervisor-circle
                            </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ profile.role.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle> Role </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-account-edit</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ profile.created_at | moment("from") }}
                            </v-list-item-title>
                            <v-list-item-subtitle
                                >Created at</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-if="profile.updated_at">
                        <v-list-item-action></v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ profile.updated_at | moment("from") }}
                            </v-list-item-title>
                            <v-list-item-subtitle
                                >Updated at</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-login</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-if="profile.last_at">
                                {{ profile.last_at | moment("from") }}
                            </v-list-item-title>
                            <v-list-item-title v-else>Never</v-list-item-title>
                            <v-list-item-subtitle
                                >Last login</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action></v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ profile.last_ip || "None" }}
                            </v-list-item-title>
                            <v-list-item-subtitle
                                >Last Ip Address</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>
                </v-card>

                <v-card v-show="editting" :loading="!!loading">
                    <v-card-title class="headline grey lighten-2" primary-title>
                        <span class="headline"> Edit Profile</span>
                    </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text>
                        <v-form @submit.prevent="saveProfile">
                            <validation-observer ref="form">
                                <validation-provider
                                    name="name"
                                    v-slot="{ errors, valid }"
                                >
                                    <v-text-field
                                        v-model="form.name"
                                        :error-messages="errors"
                                        :success="valid"
                                        label="Name"
                                        type="text"
                                        hint="This is to identify the user"
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
                                        persistent-hint
                                    ></v-text-field>
                                </validation-provider>

                                <v-text-field
                                    v-model="form.role.name"
                                    type="text"
                                    label="Role"
                                    hint="Role for this user"
                                    persistent-hint
                                    readonly
                                ></v-text-field>

                                <v-btn
                                    color="blue darken-1"
                                    @click="changePassword = !changePassword"
                                    text
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
                                            @click:append="
                                                showPassword = !showPassword
                                            "
                                            label="Password"
                                            hint="Your new password"
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
                                            @click:append="
                                                showPassword = !showPassword
                                            "
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
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn @click="editting = false" color="indigo" text>
                            Cancel
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            :disabled="!!loading"
                            @click="saveProfile"
                            color="primary"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

import { User } from "../models";
import { eHandler } from "../utils/helper";
import { CommonMixin, PasswordMixin } from "../mixins";
import { RESEND, GET_PROFILE, UPDATE_PROFILE } from "../store/app/action-types";
import { SET_PROFILE, SET_MESSAGE } from "../store/app/mutation-types";

import AppTopBar from "../components/app/AppTopBar";

export default {
    mixins: [CommonMixin, PasswordMixin],
    components: {
        AppTopBar,
    },
    data() {
        return {
            model: "profile",
            modelProp: User,
            form: {
                ...this.$_.cloneDeep(User),
                password: null,
                password_confirmation: null,
            },
            editting: false,
        };
    },
    mounted() {
        this.GET_PROFILE().catch((e) => eHandler(e));
    },
    created() {},
    computed: {
        ...mapState("app", ["profile"]),
        verifier() {
            let { email_verified_at } = this.profile;

            return {
                text: email_verified_at ? "Verified" : "Verify",
                color: email_verified_at ? "teal" : "orange",
                icon: email_verified_at
                    ? "mdi-checkbox-marked-circle"
                    : "mdi-help-circle-outline",
            };
        },
    },
    methods: {
        ...mapMutations("app", [SET_PROFILE, SET_MESSAGE]),
        ...mapActions("app", [RESEND, GET_PROFILE, UPDATE_PROFILE]),
        closeProfile() {
            this.editting = false;
            this.$nextTick(() => this.$refs.form.reset());
        },
        editProfile(item) {
            this.changePassword = false;
            this.form = this.copyWithPassword(this.profile);
            this.$nextTick(() => (this.editting = true));
        },
        saveProfile() {
            this.ignorePasswordWhenUnchanged();

            this.$refs.form.validate().then(async (valid) => {
                if (valid) {
                    await this.UPDATE_PROFILE({ payload: this.form })
                        .then(() => this.closeProfile())
                        .catch((e) => this.$refs.form.setErrors(eHandler(e)));
                }
            });
        },
        resend() {
            if (!this.profile.email_verified_at) {
                this.RESEND().catch((e) => eHandler(e));
            }
        },
    },
};
</script>

<style></style>
