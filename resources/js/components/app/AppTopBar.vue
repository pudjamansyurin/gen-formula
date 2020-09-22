<template>
    <fragment>
        <v-app-bar
            :color="appBarColor"
            :collapse-on-scroll="!(selected.length || searchBox || !mobile)"
            dark
            app
        >
            <template v-if="!searchBox || !mobile">
                <v-app-bar-nav-icon
                    @click.stop="TOGGLE_DRAWER"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <span>{{ title }}</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </template>

            <template v-if="crud">
                <v-text-field
                    v-if="searchBox || !mobile"
                    v-model="search"
                    :append-icon="searchBoxIcon"
                    @click:append="setSearch(false)"
                    label="Search"
                    dense
                    flat
                    solo-inverted
                    hide-details
                ></v-text-field>
            </template>

            <v-spacer v-if="!mobile"></v-spacer>
            <template v-if="crud">
                <v-btn
                    v-if="!searchBox && mobile"
                    @click="setSearch(true)"
                    icon
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>
            <v-btn v-if="!webview" @click="toggleFullscreen" icon>
                <v-icon>{{ fullscreenIcon }}</v-icon>
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

            <template v-slot:extension v-if="crud">
                <template v-if="selected.length">
                    <v-btn
                        @click="$emit('update:selected', [])"
                        fab
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-divider
                        :dark="!!selected.length"
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                </template>

                <template>
                    <v-toolbar-title v-if="selected.length">
                        {{ selected.length }} selected
                    </v-toolbar-title>
                    <v-tabs v-else v-model="tab" align-with-title>
                        <v-tab>{{ theTitle }}</v-tab>
                        <v-tab v-if="mineTab">Mine</v-tab>
                    </v-tabs>
                </template>

                <v-spacer></v-spacer>

                <template v-if="!selected.length">
                    <v-btn
                        v-if="!mobile"
                        @click="TOGGLE_DENSE"
                        :fab="mobile"
                        class="mr-2"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>{{ denseIcon }}</v-icon>
                        <template v-if="!mobile">Dense</template>
                    </v-btn>
                    <v-btn
                        @click="$emit('create')"
                        :fab="mobile"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-plus</v-icon>
                        <template v-if="!mobile">Create</template>
                    </v-btn>
                </template>
                <template v-else>
                    <v-btn
                        v-if="selected.length"
                        @click="$emit('edit')"
                        :fab="mobile"
                        class="mr-2"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-pencil</v-icon>
                        <template v-if="!mobile">Edit</template>
                    </v-btn>
                    <v-btn
                        @click="$emit('delete')"
                        :fab="mobile"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-delete</v-icon>
                        <template v-if="!mobile">Delete</template>
                    </v-btn>
                </template>
            </template>
        </v-app-bar>

        <!-- fullscreen confirmation -->
        <v-dialog v-if="mobile && !webview" v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline">
                    Use fullscreen mode ?
                </v-card-title>
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
import { debounce } from "lodash";
import { ls, eHandler } from "../../utils/helper";
import mixins from "../../mixins";
import pluralize from "pluralize";
import isWebview from "is-ua-webview";

export default {
    mixins: [mixins],
    props: {
        value: {
            type: Object,
            default: () => {},
        },
        page: {
            type: String,
            default: "",
        },
        selected: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
        crud: {
            type: Boolean,
            default: false,
        },
        mineTab: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dialog: !ls.get("confirmedFullscreen"),
            searchBox: false,
            search: "",
            tab: 0,
        };
    },
    computed: {
        ...mapState("app", ["title", "dense", "fullscreen"]),
        webview() {
            return isWebview(window.navigator.userAgent);
        },
        theTitle() {
            return `${pluralize(this.$_.startCase(this.page))}`;
        },
        appBarColor() {
            return this.selected.length ? "black" : "primary";
        },
        searchBoxIcon() {
            return this.mobile || this.search
                ? "mdi-magnify-close"
                : "mdi-magnify";
        },
        fullscreenIcon() {
            return this.fullscreen ? "mdi-fullscreen-exit" : "mdi-fullscreen";
        },
        denseIcon() {
            return this.dense ? "mdi-table" : "mdi-table-large";
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
            if (!state) {
                this.search = "";
            }
            this.searchBox = state;
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
            ls.set("confirmedFullscreen", true);

            this.$nextTick(() => (this.dialog = false));
        },
        logout() {
            this.LOGOUT()
                .then(() => this.$router.push({ name: "login" }))
                .catch((e) => eHandler(e));
        },
    },
    watch: {
        search: debounce(function (term) {
            this.$emit("input", {
                ...this.value,
                page: 1,
                search: term,
            });
        }, 500),
        tab: function (mine) {
            this.$emit("input", {
                ...this.value,
                page: 1,
                mine,
            });
        },
    },
};
</script>

<style></style>
