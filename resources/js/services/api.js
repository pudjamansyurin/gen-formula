/*
 * This is the initial API interface
 * we set the base URL for the API
 * store the token in local storage
 * append the token to all requests
 ? Both request & response are logged to the console.
 ! Remove the console logs for production.
*/

import axios from "axios";
import store from "../store";
import { MapMutation, MapAction } from "../store/modules/app/types";

export const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true // required to handle the CSRF token
});

const ls = window.localStorage;

/*
 * Add a request interceptor
 @param config
*/
api.interceptors.request.use(
    config => {
        // get token, if user doesn't logout yet
        const token = ls.getItem("token");
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        store.commit(MapMutation.START_LOADING);
        return config;
    },
    error => {
        store.commit(MapMutation.STOP_LOADING);
        return Promise.reject(error.response);
    }
);

/*
 * Add a response interceptor
 */
api.interceptors.response.use(
    response => {
        store.commit(MapMutation.STOP_LOADING);
        return response;
    },
    error => {
        // handle expired token
        if (error.response.status === 401) {
            store.dispatch(MapAction.LOGOUT);
        }

        store.commit(MapMutation.STOP_LOADING);
        return Promise.reject(error.response);
    }
);
