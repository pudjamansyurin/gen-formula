// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    title: "GEN Formula",
    drawer: null,
    loading: false,
    error: null,
    token: window.localStorage.getItem("token"),
    user: null
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
