import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = {
    units: [],
    packs: [],
    packers: [],
    packages: [],
    matters: [],
    materials: [],
    formulas: [],
    sales: [],
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
