<template>
  <v-content>
    <v-container class="fill-height blue-grey lighten-5" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <p class="display-2 font-weight-thin">{{ error_code }}</p>
          <p class="display-1 font-weight-thin">
            {{ error_text }}
          </p>
          <div>
            <v-btn @click="handleBack" :disabled="direct" elevation="1"
              >Back</v-btn
            >
            <v-btn :to="{ name: 'login' }" elevation="1" color="primary"
              >Login</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { mutations } from "@/store/app/types";

const { CLEAR_ERROR, CLEAR_MESSAGE } = mutations;

export default {
  name: "Error",
  props: {
    code: { default: 404 },
    text: { default: null }
  },
  data() {
    return {
      errors: {
        404: "Page not found",
        401: "Unauthorized access"
      }
    };
  },
  computed: {
    ...mapState("app", ["error"]),
    error_code: function() {
      if (this.error.code) {
        return this.error.code;
      }
      return this.errors[this.code] ? this.code : null;
    },
    error_text: function() {
      return (
        this.error.text ||
        this.text ||
        this.errors[this.code] ||
        "Opps, something not right"
      );
    },
    direct: function() {
      return window.history.length <= 2;
    }
  },
  methods: {
    ...mapMutations("app", [CLEAR_ERROR, CLEAR_MESSAGE]),
    handleBack: function() {
      if (this.direct) {
        this.$router.replace({ name: "login" });
      } else {
        this.$router.back();
      }
    }
  },
  beforeDestroy() {
    this.CLEAR_MESSAGE();
    this.CLEAR_ERROR();
  }
};
</script>

<style></style>
