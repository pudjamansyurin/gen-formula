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
                <!-- fullscreen confirmation -->
                <v-dialog
                    v-if="$vuetify.breakpoint.smAndDown"
                    v-model="dialog"
                    max-width="290"
                >
                    <v-card>
                        <v-card-title class="headline"
                            >Use fullscreen mode ?</v-card-title
                        >
                        <v-card-text>
                            You are using small device screen, we can help you
                            easier to navigate using fullscreen mode.
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                            >
                                No
                            </v-btn>
                            <v-btn color="green darken-1" text @click="toggle">
                                Yes
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
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
import { mapState, mapMutations } from "vuex";
import { TOGGLE_FULLSCREEN } from "../store/app/mutation-types";

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
        ...mapMutations("app", [TOGGLE_FULLSCREEN]),
    },
    methods: {
        toggle() {
            this.dialog = false;
            this.$fullscreen.toggle(document.body, {
                callback: this.TOGGLE_FULLSCREEN(),
            });
        },
    },
    mounted() {
        console.log("Session credebility should be checked!");
    },
};
</script>

<style></style>
