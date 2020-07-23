<template>
    <v-bottom-navigation
        v-model="activeTab"
        color="primary"
        mandatory
        shift
        app
    >
        <v-btn
            v-for="(item, index) in items"
            :key="index"
            :to="{ name: item.to }"
            :value="item.to"
        >
            <span>{{ item.text }}</span>
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { icon: "mdi-chart-areaspline", text: "Report", to: "report" },
                { icon: "mdi-microsoft-excel", text: "Formula", to: "formula" },
                {
                    icon: "mdi-package-variant-closed",
                    text: "Product",
                    to: "product",
                },
                { icon: "mdi-currency-usd", text: "Price", to: "price" },
                { icon: "mdi-account-group", text: "User", to: "user" },
                { icon: "mdi-account-cog", text: "Profile", to: "profile" },
            ],
            activeTab: this.$route.name,
        };
    },
};
</script>

<style>
</style>
