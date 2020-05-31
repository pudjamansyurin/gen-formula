// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    title: "GEN Formula",
    drawer: null,
    loading: 0,
    error: {
        code: null,
        text: ""
    },
    rememberToken: false,
    token: window.localStorage.getItem("token"),
    profile: null
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
