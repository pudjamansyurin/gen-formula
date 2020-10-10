<template>
    <fragment>
        <v-row align="center" justify="center" dense>
            <v-virtual-scroll
                :bench="2"
                :items="items"
                :height="size.height - 190"
                item-height="130"
            >
                <template v-slot="{ item }">
                    <v-col cols="12">
                        <v-card
                            @click="toggleSelect(item)"
                            :key="item.id"
                            :dark="dark"
                            tile
                        >
                            <v-progress-linear
                                v-if="selectedIndex(item) > -1"
                                :value="100"
                                :dark="dark"
                                color="primary"
                            ></v-progress-linear>

                            <slot :item="item"></slot>
                        </v-card>
                    </v-col>
                </template>
            </v-virtual-scroll>
        </v-row>
    </fragment>
</template>

<script>
import pluralize from "pluralize";

import { CommonMixin } from "../mixins";
import { mapState } from "vuex";

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
        ...mapState("app", ["size"]),
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
                this.selected.splice(index, 1);
            } else {
                this.selected.push(item);
            }
        },
    },
};
</script>

<style></style>
