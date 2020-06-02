// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

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
        token: window.localStorage.getItem("token") || "",
        remember: true
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
