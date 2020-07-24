import * as api from "../../api/model";
import * as actions from "./action-types";
import * as mutations from "./mutation-types";

export default {
    [actions.GET_MODELS]({ commit }, { model, params, url }) {
        return api.viewAny(url || model, params).then(res => {
            if (!params.temporary) {
                commit(mutations.SET_MODELS, {
                    model,
                    data: res.data
                });
            }
            return res;
        });
    },
    // [actions.GET_MODEL]({ commit }, { model, id, url }) {
    //     return api
    //         .view(url || model, id)
    //         .then(data => {
    //             return data;
    //         });
    // },
    [actions.SAVE_MODEL]({ commit }, { model, payload, url }) {
        const action = payload.id > 0 ? "update" : "create";

        return api[action](url || model, payload);
    },
    [actions.DELETE_MODELS]({ commit }, { model, ids, url }) {
        return api.destroy(url || model, ids);
    }
};
