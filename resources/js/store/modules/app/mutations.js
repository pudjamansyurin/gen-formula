import { Mutation } from "./types";

const ls = window.localStorage;

export default {
    [Mutation.SET_DRAWER](state, open) {
        state.drawer = open;
    },
    [Mutation.TOGGLE_DRAWER](state) {
        state.drawer = !state.drawer;
    },
    [Mutation.START_LOADING](state) {
        state.loading += 1;
    },
    [Mutation.STOP_LOADING](state) {
        state.loading -= 1;
    },
    [Mutation.SET_ERROR](state, error) {
        state.error = error;
    },

    [Mutation.SET_USER](state, user) {
        state.user = user;
    },
    [Mutation.CLEAR_USER](state) {
        state.token = null;
        ls.removeItem("token");
    },
    [Mutation.SET_TOKEN](state, token) {
        state.token = token;
        ls.setItem("token", token);
    }
    // [Mutation.SET_MESSAGE](state, message) {
    //     state.message = message;
    // },
};
