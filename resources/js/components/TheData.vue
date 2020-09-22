<template>
    <fragment>
        <v-alert
            v-show="items.length === 0"
            :type="alertType"
            border="top"
            outlined
        >
            <span v-if="!!loading">Fetching {{ model }} data...</span>
            <span v-else>Oops, no {{ model }} data.</span>
        </v-alert>
        <div v-show="items.length">
            <the-data-card
                v-if="mobile"
                :value="value"
                @input="$emit('input', $event)"
                :options="options"
                @update:options="fetch($event)"
                :items="items"
            >
                <template v-slot="{ item }">
                    <slot name="card" :item="item"></slot>
                </template>
            </the-data-card>

            <the-data-table
                v-else
                :value="value"
                @input="$emit('input', $event)"
                :options="options"
                @update:options="fetch($event)"
                :items="items"
                :headers="headers"
                :total="total"
            >
                <template
                    v-for="header in headers"
                    v-slot:[`item.${header.value}`]="{ item }"
                >
                    <slot :name="`item.${header.value}`" :item="item"></slot>
                </template>
            </the-data-table>
        </div>
    </fragment>
</template>

<script>
import { CommonMixin } from "../mixins";

import TheDataCard from "../components/TheDataCard";
import TheDataTable from "../components/TheDataTable";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        headers: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
        items: {
            type: Array,
            default: () => [],
        },
        total: {
            type: Number,
            default: 0,
        },
        model: {
            type: String,
            defautl: "",
        },
    },
    components: {
        TheDataCard,
        TheDataTable,
    },
    computed: {
        alertType() {
            return !!this.loading ? "info" : "warning";
        },
    },
    methods: {
        fetch(options) {
            if (!this.$_.isEqual(this.options, options)) {
                this.$emit("update:options", options);
            }
        },
    },
};
</script>

<style>
</style>
