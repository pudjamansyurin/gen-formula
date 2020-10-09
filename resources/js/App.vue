<template>
    <v-app v-resize="onResize">
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
import { mapMutations, mapState } from "vuex";
import { SET_SIZE } from "./store/app/mutation-types";

export default {
    data() {
        return {
            text: "",
            timeout: 2000
        };
    },
    computed: {
        ...mapState("app", ["message"]),
        snackbar() {
            return this.$route.name != "error" && this.message.text;
        }
    },
    methods: {
        ...mapMutations("app", [SET_SIZE]),
        onResize() {
            this.SET_SIZE({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    },
    mounted() {
        this.onResize();
    }
};
</script>
