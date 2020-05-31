import { actions, mutations } from "./types";
import AuthService from "@/services/auth";

export default {
    [actions.LOGIN]({ commit }, payload) {
        return AuthService.login(payload)
            .then(res => {
                commit(mutations.SET_PROFILE, res.data);

                return res;
            })
            .catch(e => {
                if (e.data) {
                    if (e.data.errors) {
                        return Promise.reject(e.data.errors);
                    }
                }

                return Promise.reject();
            });
    },
    [actions.LOGOUT]({ commit }) {
        AuthService.logout().then(() => {
            commit(mutations.CLEAR_PROFILE);
            return;
        });
    }
};
