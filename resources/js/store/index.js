import Vue from "vue";
import Vuex from "vuex";
// import users from "./modules/users";
import app from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        // users
        app
    },
    strict: process.env.DEBUG
});
