import { actions, mutations } from "./types";
import { login, logout } from "@/services/auth";
import router from "@/router";

const { app } = window;

export default {
    [actions.LOGIN]({ commit }, payload) {
        return login(payload)
            .then(response => {
                commit(mutations.SET_PROFILE, response.data);
                // redirect
                router.push({ name: "report" });
            })
            .catch(error => {
                if (error.data) {
                    if (error.data.errors) {
                        return Promise.reject(error.data.errors);
                    }
                }
            });
    },
    [actions.LOGOUT]({ commit }) {
        logout().then(() => {
            commit(mutations.CLEAR_PROFILE);
            // redirect
            router.push({ name: "login" });
        });
    }
};
