import { addNamespace } from "@/helpers";

const namespace = "app";
export const ns = addNamespace;

export const actions = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
};

export const mutations = {
    SET_DRAWER: "SET_DRAWER",
    TOGGLE_DRAWER: "TOGGLE_DRAWER",
    START_LOADING: "START_LOADING",
    STOP_LOADING: "STOP_LOADING",
    SET_ERROR: "SET_ERROR",
    SET_MESSAGE: "SET_MESSAGE",
    SET_AUTH: "SET_AUTH",
    CLEAR_AUTH: "CLEAR_AUTH",
    SET_REMEMBER: "SET_REMEMBER"
};
