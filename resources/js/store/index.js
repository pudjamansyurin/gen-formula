import Vue from "vue";
import Vuex from "vuex";

import { APP_DEBUG } from "@/config/app";
import app from "./app";
import model from "./model";

Vue.use(Vuex);

export default new Vuex.Store({
    // namespaced: true,
    modules: {
        app,
        model
    },
    strict: APP_DEBUG
});
