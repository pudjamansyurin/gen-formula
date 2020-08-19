import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "../store";
import { HTTP_UNAUTHORIZED } from "../utils/response";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const { profile } = store.state.app;

    if (to.matched.some(record => record.meta.auth)) {
        // secured pages
        if (profile.id > -1) {
            let passedRoles = to.matched[to.matched.length - 1].meta.roles;
            if (passedRoles) {
                // pages with authorization
                if (passedRoles.includes(profile.role.name)) {
                    next();
                } else {
                    // un-authorized pages
                    next({
                        name: "error",
                        params: {
                            code: HTTP_UNAUTHORIZED
                        }
                    });
                }
            } else {
                // pages without authorization, session exist
                next();
            }
        } else {
            // session expired
            next({
                name: "error",
                params: {
                    code: HTTP_UNAUTHORIZED
                }
            });
        }
    } else if (profile.id > -1) {
        // non-secured pages, session exist
        if (to.name == "error") {
            next();
        } else {
            // redirect to dashboard
            next("/app");
        }
    } else {
        // non-secured pages, session expired
        next();
    }
});

export default router;
