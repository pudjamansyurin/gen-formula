<template>
    <v-main>
        <v-container class="fill-height blue-grey lighten-5" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <p class="display-2 font-weight-thin">{{ title }}</p>
                </v-col>
                <v-col cols="12" sm="8" md="4">
                    <router-view></router-view>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState("app", ["title"])
    }
};
</script>

<style></style>
