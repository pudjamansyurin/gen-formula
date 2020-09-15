<template>
    <v-dialog
        :value="value"
        @input="$emit('input', $event)"
        :fullscreen="mobile"
        max-width="300"
        persistent
        scrollable
    >
        <v-card :loading="!!loading">
            <v-card-title class="headline grey lighten-2" primary-title>
                Confirmation
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text class="pt-2" :style="cardTextHeight">
                Are you sure to delete {{ question }}
                <v-chip-group column small active-class="primary--text">
                    <v-chip v-for="item in selected" :key="item.id">
                        <slot :item="item"></slot>
                    </v-chip>
                </v-chip-group>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="darken-1" @click="$emit('close')" text>
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!!loading"
                    @click="$emit('delete')"
                    color="red"
                    dark
                >
                    Yes, sure
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import mixins from "../mixins";
import pluralize from "pluralize";

export default {
    mixins: [mixins],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Array,
            default: () => [],
        },
        model: {
            type: String,
            default: "",
        },
    },
    computed: {
        question() {
            const { length } = this.selected;
            const single = length === 1;

            if (single) {
                return `this ${this.model} ?`;
            }
            return `these ${length} ${pluralize(this.model)}?`;
        },
        cardTextHeight() {
            return !this.mobile ? "max-height: 300px;" : "";
        },
    },
};
</script>

<style>
</style>
