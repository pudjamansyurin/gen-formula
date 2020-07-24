<template>
    <fragment>
        <app-top-bar></app-top-bar>
        <app-left-drawer></app-left-drawer>
        <v-content>
            <v-container fluid>
                <v-row align="start" justify="center" no-gutters>
                    <router-view></router-view>
                </v-row>
                <!-- loading overlay -->
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
import { mapState } from "vuex";
import AppBottomNavigation from "../components/app/AppBottomNavigation.vue";
import AppLeftDrawer from "../components/app/AppLeftDrawer.vue";
import AppTopBar from "../components/app/AppTopBar.vue";

export default {
    name: "Dashboard",
    components: {
        AppBottomNavigation,
        AppLeftDrawer,
        AppTopBar,
    },
    data() {
        return {
            dialog: true,
        };
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
