import { cloneDeep } from "lodash";

// import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ls } from "@/utils";
import { User } from "@/config/models";
import { table } from "@/config";

const state = {
    title: "CIWI Formula",
    drawer: null,
    dense: ls.get("dense") || false,
    dark: ls.get("dark") || false,
    fullscreen: false,
    loading: 0,
    perPage: ls.get("perPage") || table.options.itemsPerPage,
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
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
};
