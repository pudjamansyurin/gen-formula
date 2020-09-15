<template>
    <v-dialog
        :value="value"
        @input="$emit('input', $event)"
        :fullscreen="mobile"
        :max-width="width"
        persistent
        scrollable
    >
        <v-card :loading="!!loading">
            <v-card-title class="headline grey lighten-2" primary-title>
                <v-row no-gutters>
                    <v-col cols="12" sm="6">
                        <span class="headline">{{ formTitle }}</span>
                    </v-col>
                    <v-col v-if="tabs.length" cols="12" sm="6">
                        <v-tabs
                            :value="tab"
                            @change="$emit('update:tab', $event)"
                            background-color="transparent"
                            height="30"
                            right
                        >
                            <v-tab v-for="item in tabs" :key="item">{{
                                item
                            }}</v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text class="pt-2" :style="cardTextHeight">
                <v-tabs-items
                    v-if="tabs.length"
                    :value="tab"
                    @input="$emit('update:tab', $event)"
                >
                    <v-tab-item v-for="item in tabs" :key="item">
                        <slot :name="item"></slot>
                    </v-tab-item>
                </v-tabs-items>
                <slot v-else></slot>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
                <v-btn @click="$emit('close')" color="blue darken-1" text
                    >Cancel</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                    v-if="!readonly"
                    :disabled="!!loading"
                    @click="$emit('submit')"
                    color="primary"
                    >Save</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import mixins from "../mixins";

export default {
    mixins: [mixins],
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        form: {
            type: Object,
            default: () => {},
        },
        title: {
            type: String,
            default: "",
        },
        width: {
            type: String,
            default: "500",
        },
        tabs: {
            type: Array,
            default: () => [],
        },
        tab: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        formTitle() {
            return this.title || `${this.form.id === -1 ? "New" : "Edit"} Item`;
        },
        cardTextHeight() {
            return !this.mobile ? "max-height: 500px;" : "";
        },
    },
};
</script>

<style>
</style>
