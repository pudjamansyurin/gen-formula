import pluralize from "pluralize";
import * as mutations from "./mutation-types";

export default {
    [mutations.SET_MODELS](state, { model, payload }) {
        state[pluralize(model)] = payload;
    }
    // [mutations.ADD_MODEL](state, {model, payload}) {
    //     state[pluralize(model)].unshift(payload);
    // },
    // [mutations.UPDATE_MODEL](state, {model, payload}) {
    //     let index = state[pluralize(model)].findIndex(
    //         m => m.id === payload.id
    //     );
    //     state[pluralize(model)].splice(index, 1, {model, payload});
    // },
    // [mutations.DELETE_MODELS](state, ids) {
    //     state[pluralize(model)] = [
    //         ...state[pluralize(model)].filter(m => !ids.includes(m.id))
    //     ];
    // }
};
