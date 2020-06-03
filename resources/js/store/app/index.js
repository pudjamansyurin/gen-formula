// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/helpers";

const state = {
    title: "GEN Formula",
    drawer: null,
    loading: 0,
    message: "",
    error: {
        code: null,
        text: ""
    },
    auth: {
        email: "",
        password: "",
        token: ls.get("auth.token") || "",
        remember: ls.get("auth.remember") || false
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
