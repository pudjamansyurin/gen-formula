<template>
    <fragment>
        <v-row align="center">
            <v-col
                v-for="item in datas"
                :key="item.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
            >
                <v-card
                    @click="toggleSelect(item)"
                    :elevation="item.selected ? 10 : 1"
                    class="rounded-tl-xl rounded-br-xl"
                >
                    <v-card-subtitle class="py-0"
                        >{{ item.user.name }},
                        {{ item.updated_at | moment("from") }}
                    </v-card-subtitle>
                    <v-divider></v-divider>
                    <v-card-title class="py-0"
                        >{{ item.name }}
                        <v-spacer></v-spacer>
                        <v-icon v-show="item.selected" color="green"
                            >mdi-check-circle-outline</v-icon
                        ></v-card-title
                    >
                    <v-card-text>
                        <div class="pb-2">{{ item.description }}</div>
                        <v-chip
                            :color="item.percent_total == 100 ? 'green' : 'red'"
                            :small="dense"
                            label
                            dark
                        >
                            {{ item.price_total | currency }}</v-chip
                        >
                        <v-chip
                            :small="dense"
                            color="primary"
                            outlined
                            label
                            dark
                        >
                            <v-avatar color="primary" class="lighten-5" left>
                                {{ item.percents.length }}
                            </v-avatar>
                            {{ item.percent_total }} %
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </fragment>
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
            datas: [],
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
        toggleSelect(item) {
            item.selected = !item.selected;

            this.$emit(
                "input",
                this.datas.filter((el) => el.selected)
            );
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
        items: function (items) {
            this.datas = this.$_.map(items, (el) => {
                return {
                    ...el,
                    selected: false,
                };
            });
        },
        value: function (selected) {
            if (selected.length) {
                this.searchBox = false;
            } else if (this.search) {
                this.searchBox = true;
            }
        },
    },
    mounted() {
        this.options = {
            groupBy: [],
            groupDesc: [],
            itemsPerPage: 10,
            multiSort: false,
            mustSort: true,
            page: 1,
            search: "",
            sortBy: ["updated_at"],
            sortDesc: [true],
        };
    },
};
</script>

<style>
</style>
