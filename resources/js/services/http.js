/*
 * This is the initial API interface
 * we set the base URL for the API
 * store the token in local storage
 * append the token to all requests
 ? Both request & response are logged to the console.
 ! Remove the console logs for production.
*/

import axios from "axios";
import store from "@/store";
import router from "@/router";
import { mutations, ns } from "@/store/app/types";

export const http = axios.create({
    baseURL: `http://localhost:3000/api`,
    withCredentials: true // required to handle the CSRF token
});

http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
http.defaults.headers.post["Content-Type"] = "application/json";

/*
 * Add a request interceptor
 @param config
*/
http.interceptors.request.use(
    config => {
        // get token, if user doesn't logout yet
        const { token } = store.state.app.auth;

        config.headers.Authorization = token ? `Bearer ${token}` : null;

        store.commit(ns("app", mutations.START_LOADING));
        return config;
    },
    error => {
        console.warn(error);
        store.commit(ns("app", mutations.STOP_LOADING));
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
        store.commit(ns("app", mutations.STOP_LOADING));

        // save api generated message
        if (message) {
            store.commit(ns("app", mutations.SET_MESSAGE, message));
        }

        return response;
    },
    error => {
        const { response } = error;
        const { status: code, statusText: text, data } = response;
        const { message } = data;

        console.error(response);
        store.commit(ns("app", mutations.STOP_LOADING));

        // save system generated message
        store.commit(ns("app", mutations.SET_ERROR), {
            code,
            text
        });

        // save api generated message
        if (message) {
            store.commit(ns("app", mutations.SET_MESSAGE, message));
        }

        // redirect
        if (![422].includes(code)) {
            router.push({ name: "error" });
        }

        return Promise.reject(response);
    }
);
