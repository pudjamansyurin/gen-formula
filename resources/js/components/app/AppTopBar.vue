<template>
    <fragment>
        <v-app-bar
            :color="selected.length ? 'black' : 'primary'"
            :collapse-on-scroll="!(selected.length || searchBox)"
            dark
            app
        >
            <template v-if="!searchBox || !$vuetify.breakpoint.smAndDown">
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
                    v-if="searchBox || !$vuetify.breakpoint.smAndDown"
                    :value="value"
                    @input="$emit('input', $event)"
                    :append-icon="
                        $vuetify.breakpoint.smAndDown || value
                            ? 'mdi-magnify-close'
                            : 'mdi-magnify'
                    "
                    @click:append="setSearch(false)"
                    label="Search"
                    dense
                    flat
                    solo-inverted
                    hide-details
                ></v-text-field>
            </template>

            <v-spacer v-if="!$vuetify.breakpoint.smAndDown"></v-spacer>
            <template v-if="crud">
                <v-btn
                    v-if="!searchBox && $vuetify.breakpoint.smAndDown"
                    @click="setSearch(true)"
                    icon
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>
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

            <template v-slot:extension v-if="crud">
                <template v-if="selected.length">
                    <v-btn
                        @click="$emit('unselect')"
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
                        class="mr-4"
                        inset
                        vertical
                    ></v-divider>
                </template>

                <template>
                    <v-toolbar-title>{{ theTitle }}</v-toolbar-title>
                    <v-divider
                        :dark="!!selected.length"
                        class="mx-4"
                        inset
                        vertical
                    ></v-divider>
                </template>

                <v-spacer></v-spacer>

                <template v-if="!selected.length">
                    <v-btn
                        @click="TOGGLE_DENSE"
                        :fab="$vuetify.breakpoint.smAndDown"
                        class="mr-2"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>{{
                            dense ? "mdi-table" : "mdi-table-large"
                        }}</v-icon>
                        <template v-if="!$vuetify.breakpoint.smAndDown"
                            >Dense</template
                        >
                    </v-btn>
                    <v-btn
                        @click="$emit('create')"
                        :fab="$vuetify.breakpoint.smAndDown"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-plus</v-icon>
                        <template v-if="!$vuetify.breakpoint.smAndDown"
                            >Create</template
                        >
                    </v-btn>
                </template>
                <template v-else>
                    <v-btn
                        v-if="selected.length == 1"
                        @click="$emit('edit')"
                        :fab="$vuetify.breakpoint.smAndDown"
                        class="mr-2"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-pencil</v-icon>
                        <template v-if="!$vuetify.breakpoint.smAndDown"
                            >Edit</template
                        >
                    </v-btn>
                    <v-btn
                        @click="$emit('delete')"
                        :fab="$vuetify.breakpoint.smAndDown"
                        text
                        outlined
                        small
                        dark
                    >
                        <v-icon>mdi-delete</v-icon>
                        <template v-if="!$vuetify.breakpoint.smAndDown"
                            >Delete</template
                        >
                    </v-btn>
                </template>
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
import { debounce } from "lodash";
import { ls, eHandler } from "../../utils/helper";
import pluralize from "pluralize";
import isWebview from "is-ua-webview";

export default {
    props: {
        value: {
            type: String,
            default: "",
        },
        page: {
            type: String,
            default: "",
        },
        selected: {
            type: Array,
            default: () => [],
        },
        crud: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dialog: !ls.get("confirmedFullscreen"),
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
            return `${pluralize(this.$_.startCase(this.page))}`;
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
                this.$emit("input", "");
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
    watch: {
        value: debounce(function () {
            this.$emit("fetch");
        }, 500),
    },
};
</script>

<style></style>
