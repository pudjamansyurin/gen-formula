<template>
    <div v-if="profile">
        <app-left-drawer></app-left-drawer>
        <app-top-bar></app-top-bar>
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <router-view></router-view>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import AppLeftDrawer from "@/components/app/AppLeftDrawer";
import AppTopBar from "@/components/app/AppTopBar";
import { mapState } from "vuex";

export default {
    name: "Dashboard",
    components: {
        AppLeftDrawer,
        AppTopBar
    },
    data() {
        return {
            dialog: false
        };
    },
    computed: {
        ...mapState("app", ["profile"])
    },
    mounted() {
        console.log("Session credebility should be checked!");
    }
};
</script>

<style></style>
