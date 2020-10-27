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
                            v-model="form.email"
                            :error-messages="errors"
                            :success="valid"
                            label="Email"
                            type="email"
                            hint="Your account's email"
                            prepend-icon="mdi-account"
                            autocomplete="on"
                            persistent-hint
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
                            hint="Your account's password"
                            prepend-icon="mdi-lock"
                            autocomplete="on"
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>

                    <v-checkbox
                        v-model="form.remember"
                        label="Keep me logged in"
                    >
                    </v-checkbox>
                </v-card-text>

                <v-card-actions>
                    <v-btn :to="{ name: 'forget' }" text>
                        Forget Password
                    </v-btn>

                    <v-spacer></v-spacer>
                    <v-btn :disabled="!!loading" type="submit" color="primary">
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </validation-observer>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { CommonMixin, PasswordMixin } from "@/mixins";
import { LOGIN } from "@/store/app/action-types";
import { ls, eHandler } from "@/utils";

export default {
    mixins: [CommonMixin, PasswordMixin],
    data() {
        return {
            title: "LOGIN",
            subtitle: "Enter your credentials to going further",
            form: {
                email: "",
                password: "",
                remember: false,
            },
        };
    },
    computed: {
        ...mapState("app", ["remember"]),
    },
    methods: {
        ...mapActions("app", [LOGIN]),
        submit() {
            this.LOGIN(this.form)
                .then(() =>
                    this.$router.push({
                        path: this.$route.query.redirect || "/app",
                    })
                )
                .catch((e) => this.$refs.form.setErrors(eHandler(e)));
        },
    },
    watch: {
        remember: {
            handler(val) {
                this.form.remember = val;

                let credential = ls.get("credential");
                if (val && credential) {
                    this.form.email = credential.email;
                    this.form.password = credential.password;
                }
            },
            immediate: true,
        },
    },
};
</script>

<style></style>
