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
    const { code } = error;
    const { token } = auth;

    // if not already handle by axios
    if (!(code && ![422].includes(code))) {
        // check is secured page
        if (to.matched.some(record => record.meta.auth)) {
            // check is token expired
            if (!token) {
                next({ name: "error", params: { code: 401 } });
            } else {
                // check token credebility, in Dashboard hook
                next();
            }
        } else {
            // redirect if has token
            if (token) {
                next({ name: "report" });
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;
