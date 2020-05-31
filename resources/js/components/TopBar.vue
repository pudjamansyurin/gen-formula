<template>
    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
    >
        <v-app-bar-nav-icon @click.stop="TOGGLE_DRAWER"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">{{ title }}</span>
        </v-toolbar-title>
        <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn icon large v-on="on">
                    <v-avatar size="32px" item>
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                            alt="Vuetify"
                        ></v-img
                    ></v-avatar>
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
import { mapState, mapMutations } from "vuex";
import { Mutation } from "../store/modules/app/types";

export default {
    computed: {
        ...mapState("app", ["title"])
    },
    methods: {
        ...mapMutations("app", [Mutation.TOGGLE_DRAWER]),
        logout: function() {
            this.$router.push({ name: "login" });
        }
    }
};
</script>

<style></style>
