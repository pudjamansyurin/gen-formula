<template>
  <v-card class="elevation-1">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Email"
          name="email"
          prepend-icon="mdi-account"
          type="email"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="{ name: 'login' }" exact text>Login</v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'reset' }" color="primary">Send Confirmation</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: "Forget",
    data() {
        return {
            title: "FORGET PASSWORD",
            subtitle: "Enter your valid email to recover"
        };
    }
};
</script>

<style></style>
