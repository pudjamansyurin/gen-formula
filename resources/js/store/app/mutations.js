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
    [mutations.SET_AUTH](state, { user, token }) {
        const { email, password } = user;

        state.auth = {
            ...state.auth,
            email,
            password,
            token
        };

        // save token, based on remember
        if (state.auth.remember) {
            ls.set("auth.token", token);
        }
    },
    [mutations.CLEAR_AUTH](state) {
        state.auth = {
            ...state.auth,
            email: "",
            password: "",
            token: ""
        };
        ls.remove("auth.token");
    },
    [mutations.SET_REMEMBER](state, remember) {
        state.auth.remember = remember;

        ls.set("auth.remember", remember);
    }
};
