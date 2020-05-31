import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    // logged_user: {}
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
