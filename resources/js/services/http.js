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
import { _mutations, _actions } from "@/store/app/types";

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
        const { token } = store.state.app;

        config.headers.Authorization = token ? `Bearer ${token}` : null;

        store.commit(_mutations.APP_START_LOADING);
        return config;
    },
    error => {
        console.warn(error);
        store.commit(_mutations.APP_STOP_LOADING);
        return Promise.reject(error);
    }
);

/*
 * Add a response interceptor
 */
http.interceptors.response.use(
    response => {
        // console.info(response);
        store.commit(_mutations.APP_STOP_LOADING);
        return response;
    },
    error => {
        const { response } = error;
        const { status: code, statusText: text, data } = response;

        console.error(response);
        store.commit(_mutations.APP_STOP_LOADING);

        // handle api message
        store.commit(_mutations.APP_SET_ERROR, {
            code,
            text: text || data.message
        });

        // redirect
        if (code === 401 || code === 500) {
            router.push({ name: "error" });
        }

        return Promise.reject(response);
    }
);
