// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    title: "GEN Formula",
    drawer: null,
    loading: 0,
    error: {
        code: null,
        text: null
    },
    remember_me: false,
    token: window.localStorage.getItem("token") || null,
    profile: null
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
