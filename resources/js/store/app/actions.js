import { get } from "lodash";
import { login, logout } from "@/api/auth";
import router from "@/router";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.LOGIN]({ commit }, payload) {
        return login(payload)
            .then(({ data }) => {
                const { user } = data;
                const { remember } = payload;

                commit(mutations.SET_AUTH, { user, remember });

                // redirect
                const { redirect } = router.currentRoute.query;
                router.push({ path: redirect || "/app" });
            })
            .catch(e => {
                if (get(e, "data.errors")) {
                    return Promise.reject(e.data.errors);
                }
            });
    },
    [actions.LOGOUT]({ commit }) {
        logout().then(_ => {
            commit(mutations.CLEAR_AUTH);
            router.push({ name: "login" });
        });
    }
};
