import { get } from "lodash";
import { login, logout, forget, reset, resend } from "@/api/auth";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.LOGIN]({ commit }, payload) {
        return login(payload)
            .then(({ data }) => {
                const { user } = data;
                const { remember } = payload;

                commit(mutations.SET_PROFILE, user);
                commit(mutations.SET_REMEMBER, remember);
            })
            .catch(e => {
                if (get(e, "data.errors")) {
                    return Promise.reject(e.data.errors);
                }
            });
    },
    [actions.LOGOUT]({ commit }) {
        return logout().then(_ => {
            commit(mutations.CLEAR_PROFILE);
        });
    },
    [actions.FORGET]({ commit }, payload) {
        return forget(payload).catch(e => {
            if (get(e, "data.errors")) {
                return Promise.reject(e.data.errors);
            }
        });
    },
    [actions.RESET]({ commit }, payload) {
        return reset(payload)
            .then(({ data }) => {
                const { user } = data;
                commit(mutations.SET_PROFILE, user);
            })
            .catch(e => {
                if (get(e, "data.errors")) {
                    return Promise.reject(e.data.errors);
                }
            });
    }
};
