import { actions, mutations } from "./types";
import { view } from "@/api/model";

export default {
    [actions.GET_PRODUCTS]({ commit }, options) {
        return view("product")
            .then(data => {
                const { data: products, meta } = data;
                const { total, per_page, current_page } = meta;

                commit(mutations.SET_PRODUCTS, products);

                // let options = {
                //     page: current_page,
                //     itemsPerPage: per_page
                //     //   sortBy: string[],
                //     //   sortDesc: boolean[],
                //     //   groupBy: string[],
                //     //   groupDesc: boolean[],
                //     //   multiSort: boolean,
                //     //   mustSort: boolean,
                // };

                return total;
            })
            .catch(e => {});
    }
};
