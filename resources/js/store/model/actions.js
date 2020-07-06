import { get } from "lodash";
import * as api from "@/api/model";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.GET_MODELS]({ commit }, { model, params, apiUrl }) {
        const url = apiUrl ? apiUrl : model;

        return api
            .viewAny(url, params)
            .then(data => {
                const { data: payload, meta } = data;
                const { total } = meta;

                commit(mutations.SET_MODELS, { model, payload });

                return total;
            })
            .catch(e => {});
    },
    [actions.SAVE_MODEL]({ commit }, { model, payload, apiUrl }) {
        const url = apiUrl ? apiUrl : model;
        const update = payload.id > -1;

        return api[update ? "update" : "create"](url, payload).catch(e => {
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
