import { mapActions } from "vuex";

import { GET_LIST } from "../store/model/action-types";

export default {
    methods: {
        ...mapActions("model", [GET_LIST]),
        fetchList: async function(model) {
            return await this.GET_LIST({ model });
        }
    }
};
