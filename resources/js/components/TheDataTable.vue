<template>
    <v-data-table
        :value="value"
        @input="$emit('input', $event)"
        :options="options"
        @update:options="$emit('update:options', $event)"
        :headers="headers"
        :items="items"
        :server-items-length="total"
        :loading="!!loading"
        :dense="dense"
        :dark="dark"
        :page="1"
        :items-per-page="10"
        :footer-props="{
            itemsPerPageText: 'Rows',
        }"
        selectable-key="authorized"
        sort-by="updated_at"
        class="elevation-1"
        sort-desc
        show-select
        must-sort
    >
        <template
            v-for="header in headers"
            v-slot:[`item.${header.value}`]="{ item }"
        >
            <slot :name="`item.${header.value}`" :item="item">
                {{ getItemValue(item, header) }}
            </slot>
        </template>
    </v-data-table>
</template>

<script>
import { mapMutations } from "vuex";
import { get } from "lodash";

import { CommonMixin } from "@/mixins";

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
    },
    methods: {
        getItemValue(item, header) {
            return get(item, header.value);
        },
    },
};
</script>

<style>
</style>
