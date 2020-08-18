<template>
    <fragment>
        <app-left-drawer></app-left-drawer>
        <app-container>
            <router-view></router-view>
        </app-container>
        <app-bottom-navigation v-if="mobile"></app-bottom-navigation>
    </fragment>
</template>

<script>
import AppBottomNavigation from "../components/app/AppBottomNavigation.vue";
import AppLeftDrawer from "../components/app/AppLeftDrawer.vue";
import AppContainer from "../components/app/AppContainer.vue";
import AppTopBar from "../components/app/AppTopBar.vue";
import mixins from "../mixins";

export default {
    mixins: [mixins],
    components: {
        AppBottomNavigation,
        AppLeftDrawer,
        AppContainer,
        AppTopBar,
    },
    mounted() {
        console.log("Session credebility should be checked!");
    },
};
</script>

<style></style>
