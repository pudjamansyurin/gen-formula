<template>
    <validation-observer ref="form" v-slot="{ handleSubmit }">
        <v-form @submit.prevent="handleSubmit(submit)">
            <v-card class="elevation-1" :loading="!!loading">
                <v-card-title>{{ title }}</v-card-title>
                <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
                <v-divider></v-divider>

                <v-card-text>
                    <validation-provider
                        name="email"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            label="Email"
                            type="email"
                            :value="email"
                            :error-messages="errors"
                            :success="valid"
                            hint="Your verified account's email"
                            persistent-hint
                            prepend-icon="mdi-account"
                            autocomplete="on"
                            readonly
                        ></v-text-field>
                    </validation-provider>

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
                            hint="Your new password"
                            prepend-icon="mdi-lock"
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
                            prepend-icon="mdi-lock"
                            autocomplete="off"
                            persistent-hint
                            counter
                        ></v-text-field>
                    </validation-provider>
                </v-card-text>

                <v-card-actions>
                    <v-btn :to="{ name: 'login' }" exact text> Login </v-btn>

                    <v-spacer></v-spacer>
                    <v-btn :disabled="!!loading" type="submit" color="primary">
                        Reset Password
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </validation-observer>
</template>

<script>
import { mapActions } from "vuex";

import { RESET } from "../../../store/app/action-types";
import { eHandler } from "../../../utils/helper";
import { CommonMixin, PasswordMixin } from "../../../mixins";

export default {
    mixins: [CommonMixin, PasswordMixin],
    props: {
        token: String,
        email: String,
    },
    data() {
        return {
            title: "RESET PASSWORD",
            subtitle: "Type your new password to live again",
            form: {
                password: null,
                password_confirmation: null,
            },
        };
    },
    methods: {
        ...mapActions("app", [RESET]),
        submit() {
            let payload = {
                ...this.form,
                email: this.email,
                token: this.token,
            };

            this.RESET(payload)
                .then(() => this.$router.push({ path: "/app" }))
                .catch((e) => this.$refs.form.setErrors(eHandler(e)));
        },
    },
    mounted() {
        this.submit();
    },
};
</script>

<style></style>
