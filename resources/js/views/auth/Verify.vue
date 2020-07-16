<template>
    <v-col cols="8" :loading="!!loading" class="mx-auto">
        <v-card class="elevation-1" :loading="!!loading">
            <v-card-title>{{ title }}</v-card-title>
            <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <v-btn
                    :disabled="!!loading"
                    @click="submit"
                    color="primary"
                    large
                    >Verify Email</v-btn
                >
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { VERIFY } from "@/store/app/action-types";

export default {
    name: "verify",
    data() {
        return {
            title: "VERIFY",
            subtitle: "Click button bellow to verify"
        };
    },
    computed: {
        ...mapState("app", ["loading"])
    },
    methods: {
        ...mapActions("app", [VERIFY]),
        submit() {
            console.log(this.$route.query.url);
            this.VERIFY(this.$route.query.url);
        }
    }
};
</script>

<style></style>
