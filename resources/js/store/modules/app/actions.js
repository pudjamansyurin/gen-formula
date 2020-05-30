import * as mutations from "../../mutation-types";
import * as actions from "../../action-types";

export default {
    [actions.SET_DRAWER]({ commit }, open) {
        commit(mutations.SET_DRAWER, open);
    },
    [actions.TOGGLE_DRAWER]({ commit }) {
        commit(mutations.TOGGLE_DRAWER);
    }
};
