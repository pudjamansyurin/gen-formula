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
    const { token } = store.state.app.auth;

    // check is secured page
    if (to.matched.some(record => record.meta.auth)) {
        // check is token expired
        if (!token) {
            console.log("!token");
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
});

export default router;
