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
                    hint="The pack's name"
                    counter
                    persistent-hint
                ></v-text-field>
            </validation-provider>

            <validation-provider name="packer_id" v-slot="{ errors, valid }">
                <v-autocomplete
                    v-model="form.packer_id"
                    :items="listPacker"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    :filled="fieldDisabled"
                    item-text="name"
                    item-value="id"
                    label="Packer"
                    hint="The packer"
                    persistent-hint
                    chips
                ></v-autocomplete>
            </validation-provider>
        </validation-observer>
        <v-btn v-show="false" type="submit"></v-btn>
    </v-form>
</template>

<script>
import { CommonMixin } from "../../mixins";

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
        listPacker: {
            type: Array,
            default: () => [],
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
