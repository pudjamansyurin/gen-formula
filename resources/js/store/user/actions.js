import { actions, mutations } from "./types";
import { view } from "@/services/model";

export default {
    [actions.GET_USERS]({ commit }) {
        view("user").then(data => {
            const { data: users } = data;

            commit(mutations.SET_USERS, users);
        });
    }
};
