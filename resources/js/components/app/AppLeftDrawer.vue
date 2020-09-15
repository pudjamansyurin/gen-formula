<template>
    <v-navigation-drawer
        @input="SET_DRAWER"
        :value="drawer || $vuetify.breakpoint.lgAndUp"
        :mini-variant="!drawer && $vuetify.breakpoint.lgAndUp"
        app
    >
        <v-list>
            <v-list-item
                v-if="profile.id > -1"
                :to="{ name: 'profile' }"
                color="red"
                link
                two-line
            >
                <!-- <v-list-item-avatar>
                    <v-img src="/img/unknown.png" alt="Profile"></v-img>
                </v-list-item-avatar> -->

                <v-list-item-action>
                    <v-icon>mdi-face-profile</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ profile.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ profile.email }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
            <template v-for="(item, index) in items">
                <template v-if="item.heading">
                    <v-subheader v-if="drawer" :key="index">
                        {{ item.heading }}
                    </v-subheader>
                </template>
                <v-divider v-else-if="item.divider" :key="index"></v-divider>
                <!-- <v-list-group
                    v-else-if="item.children"
                    :key="index"
                    v-model="item.model"
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                    append-icon
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        color="primary"
                        exact
                        link
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                child.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group> -->
                <v-list-item
                    v-else-if="checkPageRoles(item.to)"
                    :key="index"
                    :to="{ name: item.to }"
                    color="primary"
                    link
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_DRAWER } from "../../store/app/mutation-types";
import { navs } from "../../utils/navigation";

export default {
    computed: {
        ...mapState("app", ["drawer", "profile"]),
        items() {
            return this.$_.cloneDeep(navs);
        },
    },
    methods: {
        ...mapMutations("app", [SET_DRAWER]),
        checkPageRoles(name) {
            let page = this.$router.resolve({ name });
            let role = this.$_.get(this.profile, "role.name");

            // valid page
            if (page) {
                // check authorization
                let roles = page.route.meta.roles;
                if (roles) {
                    if (roles.includes(role)) {
                        // user role is authorized
                        return true;
                    } else {
                        // user role is un-authorized
                        return false;
                    }
                }
                // un-authorized page
                return true;
            }
            // invalid page
            return false;
        },
    },
};
</script>

<style></style>
