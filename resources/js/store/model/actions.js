import { get } from "lodash";
import * as api from "@/api/model";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.GET_MODELS]({ commit }, { model, params }) {
        return api
            .viewAny(model, params)
            .then(data => {
                const { data: payload, meta } = data;
                const { total } = meta;

                commit(mutations.SET_MODELS, { model, payload });

                return total;
            })
            .catch(e => {});
    },
    [actions.SAVE_MODEL]({ commit }, { model, payload }) {
        const update = payload.id > -1;

        return api[update ? "update" : "create"](model, payload).catch(e => {
            if (get(e, "data.errors")) {
                return Promise.reject(e.data.errors);
            }
        });
    },
    [actions.DELETE_MODELS]({ commit }, { model, ids }) {
        return api.destroy(model, ids).catch(e => {});
    }
};
