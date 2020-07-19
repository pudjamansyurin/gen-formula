import store from "@/store";
import router from "@/router";
import { get } from "lodash";
import {
    HTTP_UNPROCESSABLE_ENTITY,
    HTTP_UNAUTHORIZED
} from "@/helpers/response";
import { CLEAR_PROFILE } from "@/store/app/mutation-types";

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

export const castRouteParamsId = route => {
    let id = Number(route.params.id);

    return {
        id: Number.isInteger(id) ? id : -1
    };
};

export const ajaxErrorHandler = e => {
    const { status: code } = e;
    const { profile } = store.state.app;
    let errors = [];

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
