import { mapStore } from "../../../helpers";

const module = "app";

export const Action = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
};

export const Mutation = {
    SET_DRAWER: "SET_DRAWER",
    TOGGLE_DRAWER: "TOGGLE_DRAWER",
    START_LOADING: "START_LOADING",
    STOP_LOADING: "STOP_LOADING",
    SET_USER: "SET_USER",
    CLEAR_USER: "CLEAR_USER",
    SET_TOKEN: "SET_TOKEN",
    SET_ERROR: "SET_ERROR"
};

export const MapAction = mapStore(Action, module);

export const MapMutation = mapStore(Mutation, module);
