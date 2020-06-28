<template>
    <v-card class="elevation-1">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
            <v-form>
                <v-text-field
                    label="New Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                ></v-text-field>

                <v-text-field
                    label="Password Confirmation"
                    name="password_confirmation"
                    prepend-icon="mdi-lock"
                    type="password"
                ></v-text-field>
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-btn :to="{ name: 'login' }" exact text>Login</v-btn>

            <v-spacer></v-spacer>
            <v-btn color="primary">Reset Password</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "reset",
    data() {
        return {
            title: "RESET PASSWORD",
            subtitle: "Type your new password to live again"
        };
    }
};
</script>

<style></style>
