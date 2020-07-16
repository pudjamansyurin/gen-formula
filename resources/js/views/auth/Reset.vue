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
                            label="Password"
                            v-model="form.password"
                            :type="show_password ? 'text' : 'password'"
                            :append-icon="
                                show_password ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="show_password = !show_password"
                            :error-messages="errors"
                            :success="valid"
                            hint="Your new password"
                            persistent-hint
                            counter
                            prepend-icon="mdi-lock"
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
                            prepend-icon="mdi-lock"
                            autocomplete="off"
                        ></v-text-field>
                    </validation-provider>
                </v-card-text>

                <v-card-actions>
                    <v-btn :to="{ name: 'login' }" exact text>Login</v-btn>

                    <v-spacer></v-spacer>
                    <v-btn :disabled="!!loading" type="submit" color="primary"
                        >Reset Password</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-form>
    </validation-observer>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { RESET } from "../../store/app/action-types";

export default {
    name: "reset",
    props: {
        token: String,
        email: String
    },
    data() {
        return {
            title: "RESET PASSWORD",
            subtitle: "Type your new password to live again",
            show_password: false,
            form: {
                password: null,
                password_confirmation: null
            }
        };
    },
    computed: {
        ...mapState("app", ["loading"])
    },
    methods: {
        ...mapActions("app", [RESET]),
        submit() {
            let payload = {
                ...this.form,
                email: this.email,
                token: this.token
            };

            this.RESET(payload)
                .then(() => {
                    this.$router.push({ path: "/app" });
                })
                .catch(errors => {
                    this.$refs.form.setErrors(errors);
                });
        }
    },
    mounted() {
        this.submit();
    }
};
</script>

<style></style>
