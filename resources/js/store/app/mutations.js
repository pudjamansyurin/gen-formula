import { mutations } from "./types";

export default {
    [mutations.SET_DRAWER](state, open) {
        state.drawer = open;
    },
    [mutations.TOGGLE_DRAWER](state) {
        state.drawer = !state.drawer;
    },
    [mutations.START_LOADING](state) {
        state.loading += 1;
    },
    [mutations.STOP_LOADING](state) {
        state.loading -= 1;
    },
    [mutations.SET_ERROR](state, { code, text }) {
        state.error = {
            code,
            text
        };
    },
    [mutations.CLEAR_ERROR](state) {
        state.error = {
            code: null,
            text: ""
        };
    },
    [mutations.SET_PROFILE](state, { user, token }) {
        state.profile = user;
        state.token = token;
        window.localStorage.setItem("token", token);
    },
    [mutations.CLEAR_PROFILE](state) {
        state.profile = state.token = null;
        window.localStorage.removeItem("token");
    },
    [mutations.TOGGLE_REMEMBER_ME](state) {
        state.remember_me = !state.remember_me;
    }
    // [mutations.SET_MESSAGE](state, message) {
    //     state.message = message;
    // },
};
