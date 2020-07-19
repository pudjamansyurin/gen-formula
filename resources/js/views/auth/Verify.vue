<template>
    <v-col cols="8">
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
import { ajaxErrorHandler } from "../../helpers";

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
            this.VERIFY(this.$route.query.url)
                .then(() => {
                    this.$router.push({ name: "profile" });
                })
                .catch(e => ajaxErrorHandler(e));
        }
    }
};
</script>

<style></style>
