import { initial } from "lodash";

export default {
    data() {
        return {
            formTabIndex: 0,
            formTabList: ["DATA", "REV"]
        };
    },
    computed: {
        formTabs() {
            if (this.creating) {
                return initial(this.formTabList);
            }
            return this.formTabList;
        }
    }
};
