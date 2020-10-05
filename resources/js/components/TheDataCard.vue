<template>
    <fragment>
        <v-row align="center" justify="center" dense>
            <v-col v-for="item in items" :key="item.id" cols="12" sm="6">
                <v-card
                    @click="toggleSelect(item)"
                    :color="
                        selectedIndex(item) > -1 ? 'primary darken-2' : 'white'
                    "
                    :dark="selectedIndex(item) > -1"
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
    computed: {
        selected: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
        selectedIndex(item) {
            // find in selected
            return this.selected.findIndex(({ id }) => id === item.id);
        },
        toggleSelect(item) {
            if (!item.authorized) return;

            // manage selected item
            let index = this.selectedIndex(item);
            if (index > -1) {
                this.selected.splice(index, 1, item);
            } else {
                this.selected.push(item);
            }
        },
    },
};
</script>

<style>
</style>
