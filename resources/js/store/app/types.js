import { addNamespace } from "@/helpers";

const namespace = "app";

export const actions = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
};

export const mutations = {
    TOGGLE_REMEMBER_ME: "TOGGLE_REMEMBER_ME",
    SET_DRAWER: "SET_DRAWER",
    TOGGLE_DRAWER: "TOGGLE_DRAWER",
    START_LOADING: "START_LOADING",
    STOP_LOADING: "STOP_LOADING",
    SET_PROFILE: "SET_PROFILE",
    CLEAR_PROFILE: "CLEAR_PROFILE",
    SET_ERROR: "SET_ERROR"
};

export const _actions = addNamespace(namespace, actions);

export const _mutations = addNamespace(namespace, mutations);
