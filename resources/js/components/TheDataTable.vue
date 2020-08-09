<template>
    <v-data-table
        :value="value"
        @input="$emit('input', $event)"
        :headers="headers"
        :items="items"
        :search="search"
        :options.sync="options"
        :server-items-length="total"
        :loading="!!loading"
        :dense="dense"
        :page="1"
        :items-per-page="10"
        selectable-key="authorized"
        sort-by="updated_at"
        sort-desc
        show-select
        must-sort
        class="elevation-1"
    >
        <!-- <template v-slot:top>
            <v-toolbar
                :dark="!!value.length"
                :dense="$vuetify.breakpoint.smAndDown"
                flat
            >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="value.length"
                            @click="$emit('unselect')"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </template>
                    <span>Cancel</span>
                </v-tooltip>

                <template v-if="!searchBox">
                    <v-toolbar-title>{{ tableTitle }}</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                </template>

                <v-slide-x-reverse-transition>
                    <v-text-field
                        v-show="!value.length && searchBox"
                        v-model="search"
                        label="Search"
                        autofocus
                        single-line
                        hide-details
                        full-width
                    ></v-text-field>
                </v-slide-x-reverse-transition>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="!value.length"
                            @click="toggleSearch"
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

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="!value.length && !searchBox"
                            @click="$emit('create')"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Create</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="
                                !value.length &&
                                !searchBox &&
                                !$vuetify.breakpoint.xsOnly
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
                            v-show="value.length"
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
                            v-show="value.length == 1"
                            @click="$emit('edit')"
                            v-on="on"
                            icon
                        >
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>Edit</span>
                </v-tooltip>
            </v-toolbar>
        </template> -->

        <template
            v-for="header in headers"
            v-slot:[`item.${header.value}`]="{ item }"
        >
            <slot :name="`item.${header.value}`" :item="item">
                {{ $_.get(item, header.value) }}
            </slot>
        </template>
    </v-data-table>
</template>

<script>
import pluralize from "pluralize";
import { debounce } from "lodash";
import { mapState, mapMutations } from "vuex";
import { TOGGLE_DENSE } from "../store/app/mutation-types";

export default {
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        headers: {
            type: Array,
            default: () => [],
        },
        model: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
            default: () => [],
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            search: "",
            searchBox: false,
            options: {},
        };
    },
    computed: {
        ...mapState("app", ["loading", "dense"]),
        tableTitle() {
            const { length } = this.value;

            if (length > 0) {
                return `${length} selected`;
            }
            return `${pluralize(this.$_.startCase(this.model))}`;
        },
    },
    methods: {
        ...mapMutations("app", [TOGGLE_DENSE]),
        toggleSearch() {
            this.searchBox = !this.searchBox;
            if (!this.searchBox) {
                this.search = "";
            }
        },
        fetch() {
            this.$emit("fetch", {
                ...this.options,
                search: this.search,
            });
        },
    },
    watch: {
        options: {
            handler() {
                this.fetch();
            },
            deep: true,
        },
        search: debounce(function () {
            this.fetch();
        }, 500),
        value: function (selected) {
            if (selected.length) {
                this.searchBox = false;
            } else if (this.search) {
                this.searchBox = true;
            }
        },
    },
};
</script>

<style>
</style>
