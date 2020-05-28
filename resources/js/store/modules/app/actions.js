import * as mutations from "../../mutation-types";
import * as actions from "../../action-types";

export default {
    [actions.SET_DRAWER](context, open) {
        context.commit(mutations.SET_DRAWER, open);
    },
    [actions.TOGGLE_DRAWER](context) {
        context.commit(mutations.TOGGLE_DRAWER);
    }
};
