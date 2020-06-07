import { mutations } from "./types";

export default {
    [mutations.SET_PRODUCTS](state, payload) {
        state.products = payload;
    }
};
