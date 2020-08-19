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
                            :type="show_password ? 'text' : 'password'"
                            :append-icon="
                                show_password ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :error-messages="errors"
                            :success="valid"
                            @click:append="show_password = !show_password"
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
                    ></v-checkbox>
                </v-card-text>

                <v-card-actions>
                    <v-btn :to="{ name: 'forget' }" text>Forget Password</v-btn>

                    <v-spacer></v-spacer>
                    <v-btn :disabled="!!loading" type="submit" color="primary"
                        >Login</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-form>
    </validation-observer>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { LOGIN } from "../../../store/app/action-types";
import { eHandler } from "../../../utils/helper";
import mixins from "../../../mixins";

export default {
    mixins: [mixins],
    data() {
        return {
            title: "LOGIN",
            subtitle: "Enter your credentials to going further",
            show_password: false,
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
            immediate: true,
            handler(val) {
                this.form.remember = this.remember;
            },
        },
    },
};
</script>

<style></style>
