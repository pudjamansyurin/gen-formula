<template>
    <v-dialog
        :value="value"
        @input="$emit('input', $event)"
        :fullscreen="$vuetify.breakpoint.smAndDown"
        :max-width="width"
        persistent
        scrollable
    >
        <v-card :loading="!!loading">
            <v-card-title class="headline grey lighten-2" primary-title>
                <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text
                :style="
                    !$vuetify.breakpoint.smAndDown ? 'max-height: 500px;' : ''
                "
            >
                <v-form @submit.prevent="$emit('submit')">
                    <slot></slot>
                    <v-btn v-show="false" type="submit"></v-btn>
                </v-form>
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
import { mapState } from "vuex";

export default {
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
            default: "500px",
        },
    },
    computed: {
        ...mapState("app", ["loading"]),
        formTitle() {
            if (this.title) {
                return this.title;
            }

            return this.form.id === -1 ? "New Item" : "Edit Item";
        },
    },
};
</script>

<style>
</style>
