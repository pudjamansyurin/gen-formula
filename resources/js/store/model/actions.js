import { get } from "lodash";
import * as api from "@/api/model";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.GET_MODELS]({ commit }, { model, params, apiUrl }) {
        const url = apiUrl ? apiUrl : model;

        return api
            .viewAny(url, params)
            .then(res => {
                if (!params.filterFields) {
                    commit(mutations.SET_MODELS, {
                        model,
                        data: res.data
                    });
                }

                return res;
            })
            .catch(e => {});
    },
    [actions.GET_MODEL]({ commit }, { model, id, apiUrl }) {
        const url = apiUrl ? apiUrl : model;

        return api
            .view(url, id)
            .then(data => {
                return data;
            })
            .catch(e => {});
    },
    [actions.SAVE_MODEL]({ commit }, { model, payload, apiUrl }) {
        const url = apiUrl ? apiUrl : model;
        const action = payload.id > -1 ? "update" : "create";

        return api[action](url, payload).catch(e => {
            if (get(e, "data.errors")) {
                return Promise.reject(e.data.errors);
            }
        });
    },
    [actions.DELETE_MODELS]({ commit }, { model, ids, apiUrl }) {
        const url = apiUrl ? apiUrl : model;

        return api.destroy(url, ids).catch(e => {});
    }
};
