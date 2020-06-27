import { actions, mutations } from "./types";
import * as api from "@/api/model";
import store from "../index";

const model = "product";

export default {
    [actions.GET_PRODUCTS]({ commit }, params) {
        return api
            .viewAny(model, params)
            .then(data => {
                const { data: products, meta } = data;
                const { total } = meta;

                commit(mutations.SET_PRODUCTS, products);

                return total;
            })
            .catch(e => {});
    },
    [actions.SAVE_PRODUCT]({ commit }, payload) {
        const update = payload.id > -1;

        return api[update ? "update" : "create"](model, payload).catch(
            error => {
                if (error.data) {
                    if (error.data.errors) {
                        return Promise.reject(error.data.errors);
                    }
                }
            }
        );
    },
    [actions.DELETE_PRODUCTS]({ commit }, ids) {
        return api.destroy(model, ids).catch(e => {});
    }
};
