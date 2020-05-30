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
                        label="Email"
                        name="email"
                        prepend-icon="mdi-account"
                        type="email"
                    ></v-text-field>

                    <v-text-field
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn :to="{ name: 'forget' }" text>Forget Password</v-btn>
                <v-spacer></v-spacer>
                <v-btn :to="{ name: 'dashboard' }" color="primary" large
                    >Login</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            title: "LOGIN",
            subtitle: "Enter your credentials to going further"
        };
    }
};
</script>

<style></style>
