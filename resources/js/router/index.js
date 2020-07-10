import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const { auth, error } = store.state.app;
    const { profile } = auth;
    const { code } = error;

    if (code && ![422].includes(code)) {
        // forward, already handle by axios
        next();
    } else if (to.matched.some(record => record.meta.auth)) {
        // secured pages
        if (profile) {
            // session exist
            // check session credebility in Dashboard.vue:Created hook
            next();
        } else {
            // session expired
            next({
                name: "error",
                params: {
                    code: 401
                }
            });
        }
    } else if (profile) {
        // non-secured pages, session exist
        // redirect to dashboard
        next("/app");
    } else {
        // non-secured pages, session expired
        next();
    }
});

export default router;
