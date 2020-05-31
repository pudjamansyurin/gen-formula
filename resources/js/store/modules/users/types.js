import { mapStore } from "../../../helpers";

const module = "user";

export const Action = {
    LOGGED_USER: "LOGGED_USER"
};

export const Mutation = {
    LOGGED_USER: "LOGGED_USER"
};

export const MapAction = mapStore(Action, module);

export const MapMutation = mapStore(Mutation, module);
