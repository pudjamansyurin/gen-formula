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

                commit(mutations.STOP_LOADING);
                commit(mutations.SET_AUTH, { user, remember });

                // redirect
                const { redirect } = router.currentRoute.query;
                router.push("/app");
            })
            .catch(error => {
                commit(mutations.STOP_LOADING);
                if (error.data) {
                    if (error.data.errors) {
                        return Promise.reject(error.data.errors);
                    }
                }
            });
    },
    [actions.LOGOUT]({ commit }) {
        logout().then(() => {
            commit(mutations.CLEAR_AUTH);
            // redirect
            router.push({ name: "login" });
        });
    }
};
