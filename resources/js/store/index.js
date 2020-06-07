import Vue from "vue";
import Vuex from "vuex";
import config from "@/config";
import app from "./app";
import user from "./user";
import product from "./product";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        app,
        user,
        product
    },
    strict: config.DEBUG
});
