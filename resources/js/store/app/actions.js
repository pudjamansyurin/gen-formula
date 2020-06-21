import { actions, mutations } from "./types";
import { login, logout } from "@/api/auth";
import router from "@/router";

export default {
    [actions.LOGIN]({ commit }, payload) {
        commit(mutations.START_LOADING);
        return login(payload)
            .then(response => {
                const { user } = response.data;
                const { remember } = payload;

                commit(mutations.SET_AUTH, { user, remember });

                // redirect
                const { redirect } = router.currentRoute.query;
                router.push({ path: redirect || "/app" });
            })
            .catch(error => {
                if (error.data) {
                    if (error.data.errors) {
                        return Promise.reject(error.data.errors);
                    }
                }
            })
            .then(_ => {
                commit(mutations.STOP_LOADING);
            });
    },
    [actions.LOGOUT]({ commit }) {
        logout().then(_ => {
            commit(mutations.CLEAR_AUTH);
            router.push({ name: "login" });
        });
    }
};
