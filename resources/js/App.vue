<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>
import AuthService from "./services/auth";

export default {
    name: "App",
    mounted() {
        AuthService.csrf()
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }
};
</script>
