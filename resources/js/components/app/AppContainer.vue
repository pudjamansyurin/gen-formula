<template>
    <v-content>
        <v-container fluid>
            <slot></slot>
            <!-- loading overlay -->
            <v-overlay :value="loading" absolute>
                <v-progress-circular indeterminate size="64" color="white">
                </v-progress-circular>
            </v-overlay>
        </v-container>
    </v-content>
</template>

<script>
import { CommonMixin } from "../../mixins";

export default {
    mixins: [CommonMixin],
};
</script>

<style>
</style>
