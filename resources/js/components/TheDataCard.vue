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

import { CommonMixin } from "../mixins";

export default {
    mixins: [CommonMixin],
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
    methods: {
        toggleSelect(item) {
            if (!item.authorized) return;

            item.selected = !item.selected;

            this.$emit(
                "input",
                this.datas.filter((el) => el.selected)
            );
        },
    },
    watch: {
        items: {
            handler(items) {
                this.datas = items.map((el) => ({
                    ...el,
                    selected: false,
                }));
            },
            immediate: true,
            // deep: true,
        },
        value: {
            handler(selected) {
                if (selected.length === 0) {
                    this.datas.forEach((el) => (el.selected = false));
                }
            },
            immediate: true,
            // deep: true,
        },
    },
};
</script>

<style>
</style>
