<template>
    <fragment>
        <app-left-drawer></app-left-drawer>
        <!-- <app-top-bar></app-top-bar> -->
        <app-container>
            <router-view></router-view>
        </app-container>
        <app-bottom-navigation
            v-if="$vuetify.breakpoint.smAndDown"
        ></app-bottom-navigation>
    </fragment>
</template>

<script>
import AppBottomNavigation from "../components/app/AppBottomNavigation.vue";
import AppLeftDrawer from "../components/app/AppLeftDrawer.vue";
import AppContainer from "../components/app/AppContainer.vue";
import AppTopBar from "../components/app/AppTopBar.vue";

export default {
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
