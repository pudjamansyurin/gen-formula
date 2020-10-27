<template>
    <v-form @submit.prevent="$emit('save')">
        <validation-observer ref="form">
            <validation-provider name="name" v-slot="{ errors, valid }">
                <v-text-field
                    v-model="form.name"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    :filled="fieldDisabled"
                    :autofocus="!mobile"
                    label="Name"
                    type="text"
                    hint="The matter's name"
                    counter
                    outlined
                    persistent-hint
                ></v-text-field>
            </validation-provider>
        </validation-observer>
        <v-btn v-show="false" type="submit"></v-btn>
    </v-form>
</template>

<script>
import { CommonMixin } from "@/mixins";

export default {
    mixins: [CommonMixin],
    props: {
        value: {
            type: Object,
            required: true,
        },
        fieldDisabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        form: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        validator() {
            return this.$refs.form;
        },
    },
};
</script>

<style>
</style>
