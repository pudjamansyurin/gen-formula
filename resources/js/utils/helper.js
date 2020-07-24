import store from "../store";
import router from "../router";
import { get } from "lodash";
import {
    HTTP_UNPROCESSABLE_ENTITY,
    HTTP_UNAUTHORIZED
} from "../utils/response";
import { CLEAR_PROFILE, SET_ERROR } from "../store/app/mutation-types";

export const ns = (namespace, definition) => {
    return `${namespace.toLowerCase()}/${definition}`;
};

export const ls = {
    set: (item, value) => {
        window.localStorage.setItem(item, JSON.stringify(value));
    },
    get: item => {
        return JSON.parse(window.localStorage.getItem(item));
    },
    remove: item => {
        window.localStorage.removeItem(item);
    }
};

export const castParamsId = value => {
    let id = Number(value);

    return Number.isInteger(id) ? id : -1;
};

export const eHandler = e => {
    const { status: code, statusText: text } = e;
    const { profile } = store.state.app;
    let errors = [];

    // save system generated message
    store.commit(ns("app", SET_ERROR), {
        code,
        text
    });

    // handle each error codes
    switch (code) {
        case HTTP_UNPROCESSABLE_ENTITY:
            if (get(e, "data.errors")) {
                errors = e.data.errors;
            }
            break;

        case HTTP_UNAUTHORIZED:
            if (profile) {
                // remove session
                store.commit(ns("app", CLEAR_PROFILE));
                // session expired
                router.push({
                    name: "login",
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                });
            }
            break;

        default:
            router.push({ name: "error" });
            break;
    }

    return errors;
};
