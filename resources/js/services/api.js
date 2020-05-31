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

export const api = axios.create({
    baseURL: `http://localhost:3000/api`,
    withCredentials: true // required to handle the CSRF token
});

api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
api.defaults.headers.post["Content-Type"] = "application/json";

/*
 * Add a request interceptor
 @param config
*/
api.interceptors.request.use(
    config => {
        store.commit(_mutations.APP_START_LOADING);
        // get token, if user doesn't logout yet
        const token = window.localStorage.getItem("token");
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        // console.log(error);
        store.commit(_mutations.APP_STOP_LOADING);
        return Promise.reject(response);
    }
);

/*
 * Add a response interceptor
 */
api.interceptors.response.use(
    response => {
        // console.log(response);
        store.commit(_mutations.APP_STOP_LOADING);
        return response;
    },
    error => {
        const { response } = error;
        // console.log(response);

        store.commit(_mutations.APP_STOP_LOADING);
        // handle expired token (Unauthorized)
        if (response.status === 401) {
            store.commit(_mutations.APP_CLEAR_PROFILE);
            router.push({ name: "login", query: { redirect: to.fullPath } });
        } else if (response.status === 500) {
            store.commit(_mutations.APP_SET_ERROR, {
                code: response.status,
                text: response.statusText
            });
        }

        if (response.data.message) {
            store.commit(_mutations.APP_SET_ERROR, {
                code: response.status,
                text: response.data.message
            });
        }

        return Promise.reject(response);
    }
);
