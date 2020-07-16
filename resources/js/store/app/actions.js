import { get } from "lodash";
import * as auth from "@/api/auth";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.LOGIN]({ commit }, payload) {
        return auth
            .login(payload)
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
        return auth.logout().then(_ => {
            commit(mutations.CLEAR_PROFILE);
        });
    },
    [actions.FORGET]({ commit }, payload) {
        return auth
            .forget(payload)
            .then(() => {
                commit(mutations.SET_MESSAGE, {
                    text: "Check your email",
                    type: "success"
                });
            })
            .catch(e => {
                if (get(e, "data.errors")) {
                    return Promise.reject(e.data.errors);
                }
            });
    },
    [actions.RESET]({ commit }, payload) {
        return auth
            .reset(payload)
            .then(({ data }) => {
                const { user } = data;
                commit(mutations.SET_PROFILE, user);
            })
            .catch(e => {
                if (get(e, "data.errors")) {
                    return Promise.reject(e.data.errors);
                }
            });
    },
    [actions.RESEND]({ commit }) {
        return auth
            .resend()
            .then(() => {
                commit(mutations.SET_MESSAGE, {
                    text: "Check your email",
                    type: "success"
                });
            })
            .catch(e => {});
    },
    [actions.VERIFY]({ commit }) {
        return auth
            .verify()
            .then(res => {
                console.log(res);
                // commit(mutations.SET_MESSAGE, {
                //     text: "Check your email",
                //     type: "success"
                // });
            })
            .catch(e => {
                console.log(e);
            });
    }
};
