<template>
    <v-app>
        <router-view></router-view>
        <v-snackbar
            :value="snackbar"
            :timeout="timeout"
            :color="message.type"
            top
        >
            {{ message.text }}
            <v-btn @click="snackbar = false" icon dark>
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            text: "",
            timeout: 2000,
        };
    },
    computed: {
        ...mapState("app", ["message"]),
        snackbar() {
            return this.$route.name != "error" && this.message.text;
        },
    },
};
</script>
