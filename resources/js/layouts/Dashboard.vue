<template>
    <fragment>
        <app-left-drawer></app-left-drawer>
        <app-container>
            <router-view></router-view>
        </app-container>
        <app-bottom-nav v-if="mobile"></app-bottom-nav>
    </fragment>
</template>

<script>
import AppBottomNav from "../components/app/AppBottomNav";
import AppLeftDrawer from "../components/app/AppLeftDrawer";
import AppContainer from "../components/app/AppContainer";
import AppTopBar from "../components/app/AppTopBar";
import mixins from "../mixins";

export default {
    mixins: [mixins],
    components: {
        AppBottomNav,
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
