import { addNamespace } from "@/helpers";

const namespace = "user";

export const actions = {
    LOGGED_IN: "LOGGED_IN"
};

export const mutations = {
    LOGGED_IN: "LOGGED_IN"
};

export const _actions = addNamespace(namespace, actions);

export const _mutations = addNamespace(namespace, mutations);
