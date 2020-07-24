<template>
    <fragment>
        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            :collapse="$vuetify.breakpoint.smAndDown"
            :collapse-on-scroll="$vuetify.breakpoint.smAndDown"
            color="blue darken-3"
            dark
            app
        >
            <v-app-bar-nav-icon
                @click.stop="TOGGLE_DRAWER"
            ></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px;" class="ml-0 pl-4">
                <span class="hidden-sm-and-down">{{ title }}</span>
            </v-toolbar-title>
            <!-- <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="hidden-sm-and-down"
        ></v-text-field> -->
            <v-spacer></v-spacer>
            <v-btn @click="toggle" icon>
                <v-icon>{{
                    fullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen"
                }}</v-icon>
            </v-btn>
            <!-- <v-btn icon>
            <v-icon>mdi-apps</v-icon>
        </v-btn> -->
            <!-- <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn> -->

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon large v-on="on">
                        <v-avatar right size="32px" item>
                            <v-img src="/img/unknown.png" alt="Profile"></v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item :to="{ name: 'profile' }">
                        <v-list-item-icon>
                            <v-icon>mdi-face-profile</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item @click="logout">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- fullscreen confirmation -->
        <v-dialog v-if="!fullscreen" v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline"
                    >Use fullscreen mode ?</v-card-title
                >
                <v-card-text>
                    We can help you navigate our app easier using fullscreen
                    mode.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        No
                    </v-btn>
                    <v-btn color="green" dark @click="toggle">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </fragment>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
    TOGGLE_DRAWER,
    TOGGLE_FULLSCREEN,
} from "../../store/app/mutation-types";
import { LOGOUT } from "../../store/app/action-types";

export default {
    data() {
        return {
            dialog: true,
        };
    },
    computed: {
        ...mapState("app", ["title", "fullscreen"]),
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DRAWER, TOGGLE_FULLSCREEN]),
        ...mapActions("app", [LOGOUT]),
        logout() {
            this.LOGOUT()
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((e) => eHandler(e));
        },
        toggle() {
            this.dialog = false;

            this.$fullscreen.toggle(document.body, {
                callback: this.TOGGLE_FULLSCREEN(),
            });
        },
    },
};
</script>

<style></style>
