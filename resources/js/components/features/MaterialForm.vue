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
                    label="Material name"
                    type="text"
                    hint="This is to identify the material"
                    counter
                    autofocus
                    persistent-hint
                ></v-text-field>
            </validation-provider>

            <validation-provider name="matter_id" v-slot="{ errors, valid }">
                <v-autocomplete
                    v-model="form.matter_id"
                    :items="listMatter"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    :filled="fieldDisabled"
                    item-text="name"
                    item-value="id"
                    label="Matter"
                    hint="The material's category"
                    persistent-hint
                    chips
                ></v-autocomplete>
            </validation-provider>

            <validation-provider name="rev.price" v-slot="{ errors, valid }">
                <v-text-field
                    v-model.number="form.rev.price"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    :filled="fieldDisabled"
                    label="Material price"
                    type="number"
                    prefix="Rp"
                    hint="The updated material price"
                    counter
                    persistent-hint
                ></v-text-field>
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
        listMatter: {
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
