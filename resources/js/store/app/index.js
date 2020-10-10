
import { cloneDeep } from "lodash";

// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ls } from "../../utils/helper";
import { User } from "../../models";
import { TABLE_OPTIONS } from "../../utils/config";

const state = {
    title: "GEN Formula",
    drawer: null,
    dense: false,
    dark: false,
    fullscreen: false,
    loading: 0,
    perPage: TABLE_OPTIONS.itemsPerPage,
    remember: ls.get("remember") || false,
    profile: ls.get("profile") || cloneDeep(User),
    size: {
        width: 0,
        height: 0
    },
    message: {
        text: "",
        type: "info"
    },
    error: {
        code: null,
        text: ""
    },
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
