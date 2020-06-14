<template>
  <validation-observer ref="form" v-slot="{ invalid, validated, handleSubmit }">
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
              :type="show_password ? 'text' : 'password'"
              :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show_password = !show_password"
              :error-messages="errors"
              :success="valid"
              prepend-icon="mdi-lock"
              autocomplete="on"
            ></v-text-field>
          </validation-provider>

          <v-checkbox
            v-model="remember_me"
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
import { actions } from "@/store/app/types";

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
      show_password: false,
      form: {
        email: "",
        password: "",
        remember: false
      }
    };
  },
  computed: {
    ...mapState("app", ["loading", "auth"]),
    remember_me: {
      get() {
        return this.auth.remember;
      },
      set(val) {
        this.form.remember = val;
      }
    }
  },
  methods: {
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
