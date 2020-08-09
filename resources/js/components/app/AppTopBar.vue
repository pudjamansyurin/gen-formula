<template>
    <fragment>
        <!-- :collapse="$vuetify.breakpoint.smAndDown"
            :collapse-on-scroll="$vuetify.breakpoint.smAndDown" -->
        <v-app-bar color="blue darken-3" dark app>
            <v-app-bar-nav-icon
                @click.stop="TOGGLE_DRAWER"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span>{{ title }}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="!webview" @click="toggleFullscreen" icon>
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

            <template v-slot:extension>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="selected.length"
                            @click="$emit('unselect')"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Cancel</span>
                </v-tooltip>

                <template v-if="!selected.length">
                    <v-toolbar-title>{{ theTitle }}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                </template>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="
                                !selected.length && !$vuetify.breakpoint.xsOnly
                            "
                            @click="TOGGLE_DENSE"
                            v-on="on"
                            icon
                        >
                            <v-icon>{{
                                dense ? "mdi-table" : "mdi-table-large"
                            }}</v-icon>
                        </v-btn>
                    </template>
                    <span>{{ dense ? "Larger" : "Smaller" }}</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="selected.length"
                            @click="$emit('delete')"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </template>
                    <span>Delete</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="selected.length == 1"
                            @click="$emit('edit')"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>Edit</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="!searchBox && $vuetify.breakpoint.smAndDown"
                            @click="setSearch(true)"
                            v-on="on"
                            icon
                        >
                            <v-icon>
                                {{
                                    searchBox
                                        ? "mdi-close-circle"
                                        : "mdi-magnify"
                                }}
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Search</span>
                </v-tooltip>

                <template v-if="searchBox || !$vuetify.breakpoint.smAndDown">
                    <v-text-field
                        v-model="search"
                        :prepend-icon="
                            $vuetify.breakpoint.smAndDown
                                ? 'mdi-magnify-close'
                                : 'mdi-magnify'
                        "
                        @click:prepend="setSearch(false)"
                        label="Search"
                        dense
                        flat
                        solo-inverted
                        hide-details
                    ></v-text-field>
                </template>
                <!-- <v-spacer v-if="!$vuetify.breakpoint.smAndDown"></v-spacer> -->

                <v-spacer></v-spacer>
                <v-btn
                    v-if="!selected.length"
                    @click="$emit('create')"
                    color="cyan accent-2"
                    fab
                    small
                    bottom
                    right
                    absolute
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>
        </v-app-bar>

        <!-- fullscreen confirmation -->
        <v-dialog
            v-if="$vuetify.breakpoint.smAndDown && !webview"
            v-model="dialog"
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline"
                    >Use fullscreen mode ?</v-card-title
                >
                <v-card-text>
                    You are using small device screen, we can help you navigate
                    easier using fullscreen mode.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="confirm(false)">
                        No
                    </v-btn>
                    <v-btn color="green" dark @click="confirm(true)">
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
    TOGGLE_DENSE,
} from "../../store/app/mutation-types";
import { LOGOUT } from "../../store/app/action-types";
import { ls, eHandler } from "../../utils/helper";
import pluralize from "pluralize";
import isWebview from "is-ua-webview";

export default {
    props: {
        model: {
            type: String,
            default: "",
        },
        selected: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            dialog: !ls.get("confirmedFullscreen"),
            search: "",
            searchBox: false,
        };
    },
    computed: {
        ...mapState("app", ["title", "dense", "fullscreen"]),
        webview() {
            return isWebview(window.navigator.userAgent);
        },
        theTitle() {
            const { length } = this.selected;
            if (length > 0) {
                return `${length} selected`;
            }
            return `${pluralize(this.$_.startCase(this.model))}`;
        },
    },
    methods: {
        ...mapMutations("app", [
            TOGGLE_DENSE,
            TOGGLE_DRAWER,
            TOGGLE_FULLSCREEN,
        ]),
        ...mapActions("app", [LOGOUT]),
        setSearch(state) {
            if (this.$vuetify.breakpoint.smAndDown) {
                if (!state) {
                    this.search = "";
                }
                this.searchBox = state;
            }
        },
        toggleFullscreen() {
            this.$fullscreen.toggle(document.body, {
                callback: this.TOGGLE_FULLSCREEN(),
            });
        },
        confirm(state) {
            if (state) {
                this.toggleFullscreen();
            }
            this.dialog = false;
            ls.set("confirmedFullscreen", true);
        },
        logout() {
            this.LOGOUT()
                .then(() => {
                    this.$router.push({ name: "login" });
                })
                .catch((e) => eHandler(e));
        },
    },
};
</script>

<style></style>
