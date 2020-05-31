import Vue from "vue";
import Vuex from "vuex";
// import user from "./user";
import app from "./app";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        // user
        app
    },
    strict: process.env.DEBUG
});
