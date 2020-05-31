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
                        v-model="form.email"
                        prepend-icon="mdi-account"
                        type="email"
                    ></v-text-field>

                    <v-text-field
                        label="Password"
                        name="password"
                        v-model="form.password"
                        prepend-icon="mdi-lock"
                        type="password"
                    ></v-text-field>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn :to="{ name: 'forget' }" text>Forget Password</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="onLogin" color="primary" large>Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import AuthService from "../services/auth";

export default {
    name: "Login",
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
    methods: {
        onLogin: function() {
            // AuthService.csrf()
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(error => {
            //         console.error(error);
            //     });
            // axios.get("/sanctum/csrf-cookie").then(response => {
            //     console.log(response);
            //     // axios
            //     //     .post("/login", this.formData)
            //     //     .then(response => {
            //     //         console.log("User signed in!");
            //     //     })
            //     //     .catch(error => console.log(error)); // credentials didn't match
            // });
        }
    }
};
</script>

<style></style>
