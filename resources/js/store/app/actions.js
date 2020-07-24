import * as auth from "../../api/auth";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.LOGIN]({ commit }, payload) {
        return auth.login(payload).then(({ data }) => {
            const { user } = data;
            const { remember } = payload;

            commit(mutations.SET_PROFILE, user);
            commit(mutations.SET_REMEMBER, remember);
        });
    },
    [actions.LOGOUT]({ commit }) {
        return auth.logout().then(() => {
            commit(mutations.CLEAR_PROFILE);
        });
    },
    [actions.FORGET]({ commit }, payload) {
        return auth.forget(payload).then(() => {
            commit(mutations.SET_MESSAGE, {
                text: "Check your email",
                type: "success"
            });
        });
    },
    [actions.RESET]({ commit }, payload) {
        return auth.reset(payload).then(({ data }) => {
            const { user } = data;
            commit(mutations.SET_PROFILE, user);
        });
    },
    [actions.RESEND]({ commit }) {
        return auth.resend().then(() => {
            commit(mutations.SET_MESSAGE, {
                text: "Check your email",
                type: "success"
            });
        });
    },
    [actions.VERIFY]({ commit }, url) {
        return auth.verify(url);
    },
    [actions.PROFILE]({ commit }) {
        return auth.profile().then(({ user }) => {
            commit(mutations.SET_PROFILE, user);
        });
    }
};
