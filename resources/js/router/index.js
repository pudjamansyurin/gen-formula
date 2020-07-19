import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "@/store";
import {
    HTTP_UNPROCESSABLE_ENTITY,
    HTTP_UNAUTHORIZED
} from "@/helpers/response";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const { profile, error } = store.state.app;
    // const { code } = error;

    // if (code && ![HTTP_UNPROCESSABLE_ENTITY].includes(code)) {
    //     // forward, already handle by axios
    //     next();
    // } else
    if (to.matched.some(record => record.meta.auth)) {
        // secured pages
        if (!profile) {
            // session expired
            next({
                name: "error",
                params: {
                    code: HTTP_UNAUTHORIZED
                }
            });
        } else {
            // session exist
            next();
        }
    } else if (profile && !to.name == "error") {
        // non-secured pages, session exist
        next("/app");
    } else {
        // non-secured pages, session expired
        next();
    }
});

export default router;
