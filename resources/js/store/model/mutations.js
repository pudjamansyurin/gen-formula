import pluralize from "pluralize";
import * as mutations from "./mutation-types";

export default {
    [mutations.SET_MODELS](state, { model, data }) {
        state[pluralize(model)] = data;
    }
    // [mutations.ADD_MODEL](state, {model, data}) {
    //     state[pluralize(model)].unshift(data);
    // },
    // [mutations.UPDATE_MODEL](state, {model, data}) {
    //     let index = state[pluralize(model)].findIndex(
    //         m => m.id === data.id
    //     );
    //     state[pluralize(model)].splice(index, 1, {model, data});
    // },
    // [mutations.DELETE_MODELS](state, ids) {
    //     state[pluralize(model)] = [
    //         ...state[pluralize(model)].filter(m => !ids.includes(m.id))
    //     ];
    // }
};
