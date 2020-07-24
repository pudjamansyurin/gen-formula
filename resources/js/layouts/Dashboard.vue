<template>
    <fragment>
        <app-top-bar></app-top-bar>
        <app-left-drawer></app-left-drawer>
        <v-content>
            <v-container fluid>
                <v-row align="start" justify="center" no-gutters>
                    <router-view></router-view>
                </v-row>
                <v-overlay :value="loading" absolute>
                    <v-progress-circular
                        indeterminate
                        size="64"
                        color="white"
                    ></v-progress-circular>
                </v-overlay>
            </v-container>
        </v-content>
        <app-bottom-navigation
            v-if="$vuetify.breakpoint.smAndDown"
        ></app-bottom-navigation>
    </fragment>
</template>

<script>
import AppBottomNavigation from "@/components/app/AppBottomNavigation";
import AppLeftDrawer from "@/components/app/AppLeftDrawer";
import AppTopBar from "@/components/app/AppTopBar";
import { mapState } from "vuex";

export default {
    name: "Dashboard",
    components: {
        AppBottomNavigation,
        AppLeftDrawer,
        AppTopBar,
    },
    computed: {
        ...mapState("app", ["loading"]),
    },
    mounted() {
        console.log("Session credebility should be checked!");
    },
};
</script>

<style></style>
