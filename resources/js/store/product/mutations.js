import { mutations } from "./types";

export default {
    [mutations.SET_PRODUCTS](state, payload) {
        state.products = payload;
    },
    [mutations.ADD_PRODUCT](state, payload) {
        state.products.unshift(payload);
    },
    [mutations.UPDATE_PRODUCT](state, payload) {
        let index = state.products.findIndex(
            product => product.id === payload.id
        );
        state.products.splice(index, 1, payload);
    },
    [mutations.DELETE_PRODUCTS](state, ids) {
        state.products = [
            ...state.products.filter(product => !ids.includes(product.id))
        ];
    }
};
