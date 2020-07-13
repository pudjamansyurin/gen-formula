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
    remember_me: ls.get("remember_me") || false,
    profile: ls.get("profile") || null
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
