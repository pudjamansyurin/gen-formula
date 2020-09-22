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
import { CommonMixin } from "../mixins";

import AppTopBar from "../components/app/AppTopBar";
import AppContainer from "../components/app/AppContainer";
import AppBottomNav from "../components/app/AppBottomNav";
import AppLeftDrawer from "../components/app/AppLeftDrawer";

export default {
    mixins: [CommonMixin],
    components: {
        AppTopBar,
        AppContainer,
        AppBottomNav,
        AppLeftDrawer,
    },
    mounted() {
        console.log("Session credebility should be checked!");
    },
};
</script>

<style></style>
