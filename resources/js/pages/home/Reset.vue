<template>
    <v-col cols="12" sm="8" md="4">
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
                        label="Password"
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
                <v-btn :to="{ name: 'login' }" text>Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Reset</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "Reset",
    data() {
        return {
            title: "RESET PASSWORD",
            subtitle: "Type your new password to live again"
        };
    }
};
</script>

<style></style>
