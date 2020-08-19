// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ls } from "../../utils/helper";
import { User } from "../../models";
import { cloneDeep } from "lodash";

const state = {
    title: "GEN Formula",
    drawer: null,
    dense: false,
    dark: false,
    fullscreen: false,
    loading: 0,
    message: {
        text: "",
        type: "info"
    },
    error: {
        code: null,
        text: ""
    },
    remember: ls.get("remember") || false,
    profile: ls.get("profile") || cloneDeep(User)
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
