import { mutations } from "./types";

export default {
    [mutations.SET_USERS](state, payload) {
        state.users = payload;
    }
};
