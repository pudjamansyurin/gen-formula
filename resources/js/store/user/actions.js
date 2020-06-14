import { actions, mutations } from "./types";
import { viewAny } from "@/api/model";

export default {
    [actions.GET_USERS]({ commit }) {
        viewAny("user").then(data => {
            const { data: users } = data;

            commit(mutations.SET_USERS, users);
        });
    }
};
