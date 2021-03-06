<template>
    <v-main>
        <v-container
            class="fill-height"
            :class="dark ? 'black' : 'grey lighten-5'"
            fluid
        >
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card :dark="dark">
                        <v-card-text>
                            <span class="text-h1">{{ errorCode }}</span>
                        </v-card-text>

                        <v-card-subtitle>
                            <span class="text-h5">{{ errorText }}</span>
                        </v-card-subtitle>

                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn
                                v-if="!direct"
                                @click="handleBack"
                                elevation="1"
                            >
                                Back
                            </v-btn>
                            <v-btn
                                :to="{ path: redirect.path }"
                                elevation="1"
                                color="primary"
                            >
                                {{ redirect.text }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import { CommonMixin } from "@/mixins";
import { CLEAR_ERROR, CLEAR_MESSAGE } from "@/store/app/mutation-types";
import { HTTP_NOT_FOUND, HTTP_UNAUTHORIZED } from "@/config/responses";

export default {
    mixins: [CommonMixin],
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
        errorCode: function () {
            return (
                this.error.code || (this.errors[this.code] ? this.code : null)
            );
        },
        errorText: function () {
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
        redirect() {
            return {
                path: this.profile.id > -1 ? "/app" : "/",
                text: this.profile.id > -1 ? "Dashboard" : "Login",
            };
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
