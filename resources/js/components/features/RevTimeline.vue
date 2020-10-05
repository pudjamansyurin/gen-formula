<template>
    <v-timeline dense clipped>
        <v-timeline-item
            v-for="(rev, index) in revs"
            :key="rev.id"
            :color="index === 0 ? 'primary' : 'grey'"
            :fill-dot="index === 0"
            small
        >
            <v-card :outlined="index === 0" elevation="2">
                <v-card-subtitle class="py-2">
                    <v-row no-gutters>
                        <v-col>
                            <b v-if="rev.user">
                                {{ rev.user.name }}
                            </b>
                        </v-col>
                        <v-col class="text-right">
                            {{ rev.updated_at | moment("from") }}
                        </v-col>
                    </v-row>
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
export default {
    props: {
        revs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
</style>
