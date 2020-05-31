import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.APP_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem("token");

    if (to.matched.some(record => record.meta.auth) && !token) {
        next({ name: "login", query: { redirect: to.fullPath } });
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;
