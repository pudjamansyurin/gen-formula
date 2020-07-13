/*
 * This is the initial API interface
 * we set the base URL for the API
 * append the token to all requests
 ? Both request & response are logged to the console.
 ! Remove the console logs for production.
*/

import axios from "axios";
import store from "@/store";
import router from "@/router";
import config from "@/config";
import { ns } from "@/helpers";
import {
    START_LOADING,
    STOP_LOADING,
    SET_MESSAGE,
    SET_ERROR,
    CLEAR_ERROR,
    CLEAR_MESSAGE,
    CLEAR_PROFILE
} from "@/store/app/mutation-types";

export const http = axios.create({
    baseURL: `${config.APP_URL}/`,
    withCredentials: true // required to handle the CSRF token
});

// http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
http.defaults.headers.common["Content-Type"] = "application/json";
http.defaults.headers.common["Accept"] = "application/json";

/*
 * Add a request interceptor
 @param config
*/
http.interceptors.request.use(
    config => {
        // get token, if user doesn't logout yet
        // const { token } = store.state.app;
        // config.headers.Authorization = token ? `Bearer ${token}` : null;

        store.commit(ns("app", START_LOADING));
        store.commit(ns("app", CLEAR_ERROR));
        store.commit(ns("app", CLEAR_MESSAGE));
        return config;
    },
    error => {
        console.warn(error);
        store.commit(ns("app", STOP_LOADING));
        return Promise.reject(error);
    }
);

/*
 * Add a response interceptor
 */
http.interceptors.response.use(
    response => {
        const { data } = response;
        const { message } = data;

        console.info(response);
        store.commit(ns("app", STOP_LOADING));

        // save api generated message
        if (message) {
            store.commit(ns("app", SET_MESSAGE), {
                text: message,
                type: "success"
            });
        }

        return response;
    },
    ({ response }) => {
        const { status: code, statusText: text, data } = response;
        const { message } = data;
        const { profile } = store.state.app;

        console.error(response);
        store.commit(ns("app", STOP_LOADING));

        // save system generated message
        store.commit(ns("app", SET_ERROR), {
            code,
            text
        });

        // save api generated message
        if (message) {
            store.commit(ns("app", SET_MESSAGE), {
                text: message,
                type: "error"
            });
        }

        // redirect
        if (![422].includes(code)) {
            if (profile && code === 401) {
                // remove session
                store.commit(ns("app", CLEAR_PROFILE));
                // session expired
                router.push({
                    name: "login",
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                });
            } else {
                router.push({ name: "error" });
            }
        }

        return Promise.reject(response);
    }
);
