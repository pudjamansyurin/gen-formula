<template>
    <v-form @submit.prevent="$emit('save')">
        <validation-observer ref="form">
            <v-row>
                <v-col cols="12" sm="6">
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
                            hint="The package name"
                            counter
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-alert
                        color="primary"
                        class="py-4 my-0"
                        dense
                        outlined
                        text
                    >
                        <span class="caption">Total Price</span><br />
                        <b>{{ priceTotal | currency }}</b>
                    </v-alert>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <validation-provider
                        name="capacity"
                        v-slot="{ errors, valid }"
                    >
                        <v-text-field
                            v-model.number="form.capacity"
                            :error-messages="errors"
                            :success="valid"
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            label="Capacity"
                            type="number"
                            hint="The package capacity"
                            persistent-hint
                        ></v-text-field>
                    </validation-provider>
                </v-col>
                <v-col>
                    <validation-provider
                        name="unit_id"
                        v-slot="{ errors, valid }"
                    >
                        <v-select
                            v-model="form.unit_id"
                            :items="listUnit"
                            :error-messages="errors"
                            :success="valid"
                            :readonly="fieldDisabled"
                            :filled="fieldDisabled"
                            item-text="name"
                            item-value="id"
                            label="Unit"
                            hint="The package unit"
                            persistent-hint
                            attach
                        ></v-select>
                    </validation-provider>
                </v-col>
            </v-row>

            <validation-provider
                v-if="form._packers"
                name="_packers"
                v-slot="{ errors, valid }"
            >
                <v-autocomplete
                    v-model="form._packers"
                    :items="listPacker"
                    :error-messages="errors"
                    :success="valid"
                    :readonly="fieldDisabled"
                    item-text="name"
                    label="Packer"
                    hint="The packer"
                    class="mb-3"
                    persistent-hint
                    deletable-chips
                    return-object
                    multiple
                    chips
                    attach
                ></v-autocomplete>
            </validation-provider>

            <template v-if="form._packers">
                <v-card
                    v-for="(packer, index) in form._packers"
                    :key="`_packers.${index}.content`"
                    class="mb-3"
                >
                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12" sm="4">
                                <validation-provider
                                    :name="`_packers.${index}.content`"
                                    v-slot="{
                                        errors,
                                        valid,
                                    }"
                                >
                                    <v-text-field
                                        v-model.number="packer.content"
                                        :error-messages="errors"
                                        :success="valid"
                                        :readonly="fieldDisabled"
                                        :filled="fieldDisabled"
                                        :label="packer.name"
                                        hint="The packer content"
                                        type="number"
                                        persistent-hint
                                    ></v-text-field>
                                </validation-provider>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <div
                                    v-for="(pack, idx) in packer.packs"
                                    :key="`_packers.${index}.packs.${idx}.price`"
                                >
                                    <validation-provider
                                        :name="`_packers.${index}.packs.${idx}.price`"
                                        v-slot="{
                                            errors,
                                            valid,
                                        }"
                                    >
                                        <v-text-field
                                            v-model.number="pack.price"
                                            :error-messages="errors"
                                            :success="valid"
                                            :readonly="fieldDisabled"
                                            :filled="fieldDisabled"
                                            :label="pack.name"
                                            prefix="Rp"
                                            type="number"
                                            hint="The pack price"
                                            counter
                                            persistent-hint
                                        ></v-text-field>
                                    </validation-provider>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </template>
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
        listUnit: {
            type: Array,
            default: () => [],
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
        priceTotal() {
            if (this.form._packers) {
                return this.form._packers
                    .reduce((carry, { content, packs }) => {
                        let subTotal =
                            packs.reduce((carry, { price }) => {
                                return carry + Number(price);
                            }, 0) / Number(content);

                        return carry + subTotal;
                    }, 0)
                    .toFixed(2);
            }
            return 0;
        },
    },
};
</script>

<style>
</style>
