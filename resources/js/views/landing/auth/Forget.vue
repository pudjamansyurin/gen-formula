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
                            hint="Your verified account's email"
                            prepend-icon="mdi-account"
                            autocomplete="on"
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-card-text>
                <v-card-actions>
                    <v-btn :to="{ name: 'login' }" exact text>Login</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!!loading" type="submit" color="primary"
                        >Send Confirmation</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-form>
    </validation-observer>
</template>

<script>
import { mapActions } from "vuex";
import { FORGET } from "../../../store/app/action-types";
import { eHandler } from "../../../utils/helper";
import mixins from "../../../mixins";

export default {
    mixins: [mixins],
    data() {
        return {
            title: "FORGET PASSWORD",
            subtitle: "Enter your valid email to recover",
            form: {
                email: null,
            },
        };
    },
    methods: {
        ...mapActions("app", [FORGET]),
        submit() {
            this.FORGET(this.form).catch((e) =>
                this.$refs.form.setErrors(eHandler(e))
            );
        },
    },
};
</script>

<style></style>
