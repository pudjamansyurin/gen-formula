<template>
    <validation-observer
        ref="form"
        v-slot="{ invalid, validated, handleSubmit }"
    >
        <v-form @submit.prevent="handleSubmit(submit())">
            <v-card class="elevation-1" :loading="!!loading">
                <v-card-title>
                    {{ title }}
                </v-card-title>
                <v-card-subtitle>
                    {{ subtitle }}
                </v-card-subtitle>
                <v-divider></v-divider>

                <v-card-text>
                    <validation-provider
                        name="email"
                        rules="required|email"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            label="Email"
                            name="email"
                            v-model="form.email"
                            type="email"
                            :error-messages="errors"
                            :success="valid"
                            prepend-icon="mdi-account"
                            autocomplete="on"
                        ></v-text-field>
                    </validation-provider>

                    <validation-provider
                        name="password"
                        rules="required"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            label="Password"
                            name="password"
                            v-model="form.password"
                            :type="showPassword ? 'text' : 'password'"
                            :append-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            @click:append="showPassword = !showPassword"
                            :error-messages="errors"
                            :success="valid"
                            prepend-icon="mdi-lock"
                            autocomplete="on"
                        ></v-text-field>
                    </validation-provider>

                    <v-checkbox
                        v-model="remember"
                        label="Keep me logged in"
                    ></v-checkbox>
                </v-card-text>

                <v-card-actions>
                    <v-btn :to="{ name: 'forget' }" text>Forget Password</v-btn>

                    <v-spacer></v-spacer>
                    <v-btn
                        type="submit"
                        color="primary"
                        :disabled="invalid || !validated || !!loading"
                        large
                        >Login</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-form>
    </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapState, mapMutations, mapActions } from "vuex";
import { actions, mutations } from "@/store/app/types";

const { SET_REMEMBER } = mutations;
const { LOGIN } = actions;

export default {
    name: "Login",
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            title: "LOGIN",
            subtitle: "Enter your credentials to going further",
            showPassword: false,
            form: {
                email: "",
                password: ""
            }
        };
    },
    computed: {
        ...mapState("app", ["loading", "auth"]),
        remember: {
            get: function() {
                return this.auth.remember;
            },
            set: function(val) {
                this.SET_REMEMBER(val);
            }
        }
    },
    methods: {
        ...mapMutations("app", [SET_REMEMBER]),
        ...mapActions("app", [LOGIN]),
        submit: function() {
            this.LOGIN(this.form).catch(errors => {
                this.$refs.form.setErrors(errors);
            });
        }
    }
};
</script>

<style></style>
