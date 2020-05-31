import { Action, Mutation } from "./types";
import AuthService from "../../../services/auth";

export default {
    [Action.login]({ commit }, payload) {
        return AuthService.login(payload)
            .then(response => {
                // commit(Mutation.SET_TOKEN, response.data.token);
            })
            .catch(error => {
                // commit(
                //     Mutation.SET_ERROR,
                //     error.data ? error.data.message : error
                // );
            });
    },
    [Action.logout]({ commit }) {
        return AuthService.logout()
            .then(() => {
                // commit(Mutation.CLEAR_USER);
            })
            .catch(() => {
                // commit(Mutation.CLEAR_USER);
            });
    }
};
