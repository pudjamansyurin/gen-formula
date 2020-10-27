import { model as api } from "@/api";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.GET_LIST]({ commit }, { model, params }) {
        return api
            .viewAny(`list/${model}`, params || { itemsPerPage: -1 })
            .then(({ data }) => data);
    },
    [actions.GET_MODELS]({ commit }, { model, params, url }) {
        return api.viewAny(url || model, params).then(({ data, total }) => {
            // create new models
            commit(mutations.SET_MODELS, {
                model,
                data
            });

            return { total };
        });
    },
    [actions.GET_MODEL]({ commit }, { model, id, url }) {
        return api.view(url || model, id).then(data => {
            // update existing on models
            commit(mutations.UPDATE_MODEL, {
                model,
                data
            });

            return data;
        });
    },
    [actions.SAVE_MODEL]({ commit }, { model, payload, url }) {
        const action = payload.id > 0 ? "update" : "create";

        return api[action](url || model, payload);
    },
    [actions.DELETE_MODELS]({ commit }, { model, ids, url }) {
        return api.destroy(url || model, ids);
    }
};
