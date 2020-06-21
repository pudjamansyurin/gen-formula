import { actions, mutations } from "./types";
import * as api from "@/api/model";
import store from "../index";

const model = "product";

export default {
    [actions.GET_PRODUCTS]({ commit }, options) {
        return api
            .viewAny(model)
            .then(data => {
                const { data: products, meta } = data;
                const { total, per_page, current_page } = meta;

                commit(mutations.SET_PRODUCTS, products);

                // let options = {
                //     page: current_page,
                //     itemsPerPage: per_page
                //     //   sortBy: string[],
                //     //   sortDesc: boolean[],
                //     //   groupBy: string[],
                //     //   groupDesc: boolean[],
                //     //   multiSort: boolean,
                //     //   mustSort: boolean,
                // };

                return total;
            })
            .catch(e => {});
    },
    [actions.SAVE_PRODUCT]({ commit }, payload) {
        const action = payload.id > -1 ? "update" : "create";

        return api[action](model, payload)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                if (error.data) {
                    if (error.data.errors) {
                        return Promise.reject(error.data.errors);
                    }
                }
            });
    },
    [actions.DELETE_PRODUCTS]({ commit }, ids) {
        return api
            .destroy(model, ids)
            .then(data => {
                console.log(data);
            })
            .catch(e => {});
    }
};
