<template>
    <v-content>
        <v-container class="fill-height blue-grey lighten-5" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <p class="display-2 font-weight-thin">{{ error_code }}</p>
                    <p class="display-1 font-weight-thin">{{ error_text }}</p>
                    <div>
                        <v-btn v-if="!direct" @click="handleBack" elevation="1"
                            >Back</v-btn
                        >
                        <v-btn
                            :to="{ path: profile.id > -1 ? '/app' : '/' }"
                            elevation="1"
                            color="primary"
                            >{{
                                profile.id > -1 ? "Dashboard" : "Login"
                            }}</v-btn
                        >
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { CLEAR_ERROR, CLEAR_MESSAGE } from "../../store/app/mutation-types";
import { HTTP_NOT_FOUND, HTTP_UNAUTHORIZED } from "../../utils/response";

export default {
    props: {
        code: {
            default: HTTP_NOT_FOUND,
        },
        text: {
            default: null,
        },
    },
    data() {
        return {
            errors: {
                [HTTP_NOT_FOUND]: "Page not found",
                [HTTP_UNAUTHORIZED]: "Unauthorized access",
            },
        };
    },
    computed: {
        ...mapState("app", ["error", "profile"]),
        error_code: function () {
            if (this.error.code) {
                return this.error.code;
            }
            return this.errors[this.code] ? this.code : null;
        },
        error_text: function () {
            return (
                this.error.text ||
                this.text ||
                this.errors[this.code] ||
                "Opps, something wrong."
            );
        },
        direct: function () {
            return window.history.length <= 2;
        },
    },
    methods: {
        ...mapMutations("app", [CLEAR_ERROR, CLEAR_MESSAGE]),
        handleBack() {
            this.$router.go(-1);
        },
    },
    beforeDestroy() {
        this.CLEAR_MESSAGE();
        this.CLEAR_ERROR();
    },
};
</script>

<style></style>
