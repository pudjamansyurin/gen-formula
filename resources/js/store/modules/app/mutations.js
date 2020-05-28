import * as types from "../../mutation-types";

export default {
    [types.SET_DRAWER](state, open) {
        state.drawer = open;
    },
    [types.TOGGLE_DRAWER](state) {
        state.drawer = !state.drawer;
    }
};
