<template>
    <v-navigation-drawer
        :value="drawer"
        @input="SET_DRAWER"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
    >
        <v-list>
            <template v-for="(item, index) in items">
                <v-subheader v-if="item.heading" :key="index">
                    {{ item.heading }}
                </v-subheader>
                <v-divider v-else-if="item.divider" :key="index"></v-divider>
                <v-list-group
                    v-else-if="item.children"
                    :key="index"
                    v-model="item.model"
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                    append-icon=""
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        color="primary"
                        exact=""
                        link
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                    v-else
                    :key="index"
                    :to="{ name: item.to }"
                    color="primary"
                    exact
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { mutations } from "@/store/app/types";

const { SET_DRAWER } = mutations;

export default {
    data() {
        return {
            items: [
                { divider: true },
                { heading: "DASHBOARD" },
                { icon: "mdi-chart-areaspline", text: "Report", to: "report" },
                {
                    icon: "mdi-package-variant-closed",
                    text: "Product",
                    to: "product"
                },
                { icon: "mdi-microsoft-excel", text: "Formula", to: "formula" },
                { divider: true },
                { heading: "CONFIGURATION" },
                { icon: "mdi-account-group", text: "User", to: "user" },
                { icon: "mdi-cogs", text: "Setting", to: "setting" }
                //     { icon: "mdi-content-copy", text: "Duplicates" }
                // {
                //     icon: "mdi-chevron-up",
                //     "icon-alt": "mdi-chevron-down",
                //     text: "Labels",
                //     model: true,
                //     children: [{ icon: "mdi-plus", text: "Create label" }]
                // },
                // {
                //     icon: "mdi-chevron-up",
                //     "icon-alt": "mdi-chevron-down",
                //     text: "More",
                //     model: false,
                //     children: [
                //         { text: "Import" },
                //         { text: "Export" },
                //         { text: "Print" },
                //         { text: "Undo changes" },
                //         { text: "Other contacts" }
                //     ]
                // }
            ]
        };
    },
    computed: {
        ...mapState("app", ["drawer"])
    },
    methods: {
        ...mapMutations("app", [SET_DRAWER])
    }
};
</script>

<style></style>
