<template>
    <fragment>
        <v-row align="center" justify="center" dense>
            <v-col v-for="item in datas" :key="item.id" cols="12" sm="6">
                <v-card
                    @click="toggleSelect(item)"
                    :color="item.selected ? 'primary darken-2' : 'white'"
                    :dark="item.selected"
                    :ripple="false"
                    tile
                >
                    <slot :item="item"></slot>
                </v-card>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
import pluralize from "pluralize";
import { debounce } from "lodash";
import { mapState, mapMutations } from "vuex";

export default {
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        items: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            datas: [],
        };
    },
    computed: {
        ...mapState("app", ["loading"]),
    },
    methods: {
        toggleSelect(item) {
            item.selected = !item.selected;

            this.$emit(
                "input",
                this.datas.filter((el) => el.selected)
            );
        },
    },
    watch: {
        options: {
            handler() {
                this.$emit("fetch");
            },
            deep: true,
        },
        items: function (items) {
            this.datas = this.$_.map(items, (el) => {
                return {
                    ...el,
                    selected: false,
                };
            });
        },
        value: function (val) {
            if (!val.length) {
                this.datas.forEach((el) => {
                    el.selected = false;
                });
            }
        },
    },
    mounted() {
        this.$emit("update:options", {
            groupBy: [],
            groupDesc: [],
            itemsPerPage: 10,
            multiSort: false,
            mustSort: true,
            page: 1,
            search: "",
            sortBy: ["updated_at"],
            sortDesc: [true],
        });
    },
};
</script>

<style>
</style>
