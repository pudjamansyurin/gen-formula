<template>
    <v-bottom-navigation color="primary" app>
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
import { navigations } from "../../utils/navigation";
import { NavigationMixin } from "../../mixins";

export default {
    mixins: [NavigationMixin],
    computed: {
        items() {
            console.warn(this.navs);
            return this.navs
                .filter(({ bottomNav, children }) => !!bottomNav || !!children)
                .map(el => {
                    if (el.children) {
                        return el.children[0];
                    }
                    return el;
                });
        }
    }
};
</script>

<style></style>
