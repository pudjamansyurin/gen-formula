<template>
    <v-timeline dense clipped>
        <v-timeline-item
            v-for="(rev, index) in revs"
            :key="rev.id"
            :fill-dot="index === 0"
            small
        >
            <v-card outlined elevation="2">
                <v-card-subtitle class="py-2">
                    <b v-if="rev.user">
                        {{ rev.user.name }}
                    </b>
                    <i class="text-right">
                        - {{ rev.updated_at | moment("from") }}
                    </i>
                </v-card-subtitle>
                <v-card-text>
                    <slot name="card-text" :item="{ rev, index }">
                        <v-chip :color="index === 0 ? 'primary' : ''">
                            {{ rev.price | currency }}
                        </v-chip>
                    </slot>
                </v-card-text>
                <v-card-actions>
                    <slot name="card-actions" :item="{ rev, index }"> </slot>
                </v-card-actions>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
import { CommonMixin } from "../mixins";

export default {
    mixins: [CommonMixin],
    props: {
        revs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style></style>
