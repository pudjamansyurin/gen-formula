// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/helpers";

const state = {
    title: "GEN Formula",
    drawer: null,
    dense: false,
    dark: false,
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
        remember: ls.get("auth.remember") || false,
        profile: ls.get("auth.profile") || null
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
