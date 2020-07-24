<template>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        :collapse="$vuetify.breakpoint.smAndDown"
        :collapse-on-scroll="$vuetify.breakpoint.smAndDown"
        color="blue darken-3"
        dark
        app
    >
        <v-app-bar-nav-icon @click.stop="TOGGLE_DRAWER"></v-app-bar-nav-icon>
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
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { TOGGLE_DRAWER } from "@/store/app/mutation-types";
import { LOGOUT } from "@/store/app/action-types";

export default {
    data() {
        return {
            fullscreen: false,
        };
    },
    computed: {
        ...mapState("app", ["title"]),
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DRAWER]),
        ...mapActions("app", [LOGOUT]),
        logout() {
            this.LOGOUT()
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((e) => eHandler(e));
        },
        toggle() {
            console.log(this.$fullscreen);
            this.$fullscreen.toggle(document.body, {
                wrap: false,
                callback: this.fullscreenChange,
            });
        },
        fullscreenChange(fullscreen) {
            this.fullscreen = fullscreen;
        },
    },
};
</script>

<style></style>
