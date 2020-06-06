import Vue from "vue";
import Vuex from "vuex";
import app from "./app";
import user from "./user";
import config from "@/config";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        app,
        user
    },
    strict: config.DEBUG
});
