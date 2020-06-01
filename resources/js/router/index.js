import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "@/store";
import { check } from "@/services/auth";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const { token } = store.state.app;

    // handle error code
    // if (to.name === "error") {
    //     next();
    // } else {
    // check is secured page
    if (to.matched.some(record => record.meta.auth)) {
        // check is token expired
        if (!token) {
            next({ name: "error", params: { code: 401 } });
        } else {
            // check token credebility
            check()
                .then(() => next())
                .catch(() => {});
        }
    } else {
        next();
    }
    // }
});

export default router;
