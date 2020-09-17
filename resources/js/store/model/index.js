import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    matters: [],
    materials: [],
    formulas: [],
    roles: [],
    users: []
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
