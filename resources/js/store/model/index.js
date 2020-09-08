import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    users: [],
    materials: [],
    prices: [],
    formulas: []
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
