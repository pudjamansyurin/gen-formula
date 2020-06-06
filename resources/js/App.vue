<template>
    <v-app>
        <router-view></router-view>

        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            :color="message.type"
            top
        >
            {{ message.text }}
            <v-btn color="white" text @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "App",
    data() {
        return {
            snackbar: false,
            text: "",
            timeout: 2000
        };
    },
    computed: {
        ...mapState("app", ["message"])
    },
    watch: {
        "message.text": function(newVal, oldVal) {
            this.snackbar = !!newVal;
        }
    }
};
</script>
