import { mutations } from "./types";
import { ls } from "@/helpers";

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
    [mutations.SET_MESSAGE](state, { text, type }) {
        state.message = {
            text,
            type
        };
    },
    [mutations.CLEAR_MESSAGE](state) {
        state.message = {
            text: "",
            type: "info"
        };
    },
    [mutations.SET_AUTH](state, { user, remember }) {
        const { email, password } = user;

        state.auth = {
            email,
            password,
            remember,
            authenticated: true
        };

        ls.set("auth.remember", remember);
        ls.set("auth.authenticated", true);
    },
    [mutations.CLEAR_AUTH](state) {
        state.auth = {
            ...state.auth,
            email: "",
            password: "",
            authenticated: false
        };

        ls.remove("auth.authenticated");
    }
};
