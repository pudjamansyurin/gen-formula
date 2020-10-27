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
import { logger } from "../utils";

import AppTopBar from "../components/AppTopBar";
import AppContainer from "../components/AppContainer";
import AppBottomNav from "../components/AppBottomNav";
import AppLeftDrawer from "../components/AppLeftDrawer";

export default {
    mixins: [CommonMixin],
    components: {
        AppTopBar,
        AppContainer,
        AppBottomNav,
        AppLeftDrawer,
    },
    mounted() {
        logger("Session credebility should be checked!");
    },
};
</script>

<style></style>
