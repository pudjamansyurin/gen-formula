<template>
    <v-col cols="12">
        <v-card>
            <v-card-title>
                Users
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="users"
                :search="search"
                :loading="!!loading"
                show-select
                class="elevation-1"
            >
            </v-data-table>
            <template v-slot:item.last_at="{ item }">
                {{ item.last_at | moment("from") }}
            </template>
        </v-card>
    </v-col>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { actions } from "@/store/user/types";

const { GET_USERS } = actions;

export default {
    name: "User",
    data() {
        return {
            search: "",
            headers: [
                {
                    text: "Name",
                    align: "start",
                    // sortable: false,
                    value: "name"
                },
                { text: "Email", value: "email" },
                { text: "Role", value: "role" },
                { text: "Last At", value: "last_at" },
                { text: "Last Ip", value: "last_ip" }
            ]
        };
    },
    computed: {
        ...mapState("app", ["loading"]),
        ...mapState("user", ["users"])
    },
    methods: {
        ...mapActions("user", [GET_USERS])
    },
    mounted() {
        this.GET_USERS();
    }
};
</script>

<style></style>
