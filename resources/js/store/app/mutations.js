import { ls } from "@/helpers";
import * as mutations from "./mutation-types";

export default {
    [mutations.SET_DRAWER](state, open) {
        state.drawer = open;
    },
    [mutations.TOGGLE_DRAWER](state) {
        state.drawer = !state.drawer;
    },
    [mutations.TOGGLE_DENSE](state) {
        state.dense = !state.dense;
    },
    [mutations.TOGGLE_DARK](state) {
        state.dark = !state.dark;
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
    [mutations.SET_AUTH](state, { user: profile, remember }) {
        state.auth = {
            remember,
            profile
        };

        ls.set("auth.remember", remember);
        ls.set("auth.profile", profile);
    },
    [mutations.CLEAR_AUTH](state) {
        state.auth.profile = null;

        ls.remove("auth.profile");
    }
};
