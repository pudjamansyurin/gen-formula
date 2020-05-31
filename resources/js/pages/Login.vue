<template>
  <v-col cols="12" sm="8" md="4">
    <validation-observer
      ref="form"
      v-slot="{ invalid, validated, handleSubmit }"
    >
      <v-card class="elevation-1" :loading="loading != 0">
        <v-card-title>
          {{ title }}
        </v-card-title>
        <v-card-subtitle>
          {{ subtitle }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-form @submit.prevent="handleSubmit(submit())">
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
                type="password"
                :error-messages="errors"
                :success="valid"
                prepend-icon="mdi-lock"
              ></v-text-field>
            </validation-provider>
          </v-card-text>

          <v-card-actions>
            <v-btn :to="{ name: 'forget' }" text>Forget Password</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              color="primary"
              :disabled="invalid || !validated"
              large
              >Login</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </validation-observer>
  </v-col>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapState } from "vuex";
import AuthService from "@/services/auth";
import { _actions } from "@/store/app/types";

const { APP_LOGIN } = _actions;

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
            form: {
                email: "",
                password: ""
            }
        };
    },
    computed: {
        ...mapState("app", ["loading"])
    },
    methods: {
        submit: function() {
            this.$store
                .dispatch(APP_LOGIN, this.form)
                .then(() => {
                    this.$router.push(
                        this.$route.query.redirect || { name: "report" }
                    );
                })
                .catch(errors => {
                    if (errors) {
                        this.$refs.form.setErrors(errors);
                    }
                });
        }
    }
};
</script>

<style></style>
