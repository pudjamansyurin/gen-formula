import pluralize from "pluralize";
import * as mutations from "./mutation-types";

export default {
    [mutations.SET_MODELS](state, { model, data }) {
        state[pluralize(model)] = data;
    },
    [mutations.UPDATE_MODEL](state, { model, data }) {
        let index = state[pluralize(model)].findIndex(
            ({ id }) => id === data.id
        );

        if (index > -1) {
            state[pluralize(model)].splice(index, 1, data);
        } else {
            state[pluralize(model)].push(data);
        }
    }
    // [mutations.ADD_MODEL](state, {model, data}) {
    //     state[pluralize(model)].unshift(data);
    // },
    // [mutations.DELETE_MODELS](state, ids) {
    //     state[pluralize(model)] = [
    //         ...state[pluralize(model)].filter(m => !ids.includes(m.id))
    //     ];
    // }
};
