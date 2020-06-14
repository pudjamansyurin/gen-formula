// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/helpers";

const state = {
    title: "GEN Formula",
    drawer: null,
    loading: 0,
    message: {
        text: "",
        type: "info"
    },
    error: {
        code: null,
        text: ""
    },
    auth: {
        email: "",
        password: "",
        remember: ls.get("auth.remember") || false,
        authenticated: ls.get("auth.authenticated") || false
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
