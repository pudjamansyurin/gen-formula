import Vue from "vue";
import Vuex from "vuex";
import { config } from "../utils/config";
import app from "./app";
import model from "./model";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        app,
        model
    },
    strict: config.DEBUG
});
