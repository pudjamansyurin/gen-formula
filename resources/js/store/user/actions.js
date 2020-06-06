import { actions, mutations } from "./types";
import { viewAny } from "@/services/user";

export default {
    [actions.GET_USERS]({ commit }) {
        viewAny().then(data => {
            const { data: users } = data;

            commit(mutations.SET_USERS, users);
        });
    }
    // [actions.LOGGED_IN]({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         user
    //             .fetch()
    //             .then(response => {
    //                 commit(mutations.LOGGED_IN, response.data);
    //                 resolve(response);
    //             })
    //             .catch(error => {
    //                 reject(error);
    //             });
    //     });
    // }
};
