<template>
    <v-bottom-navigation color="primary" hide-on-scroll app>
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
import { navs } from "../../utils/navigation";

export default {
    data() {
        return {
            // activeTab: this.$route.name,
        };
    },
    computed: {
        items() {
            return this.$_.cloneDeep(
                navs.filter((el) => {
                    return el.icon && el.bottomNav;
                })
            );
        },
    },
};
</script>

<style>
</style>
