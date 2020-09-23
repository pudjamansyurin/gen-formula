export default {
    data() {
        return {
            formTabIndex: 0,
            formTabList: ["data", "rev"]
        };
    },
    computed: {
        formTabs() {
            if (this.creating) {
                return this.formTabList.slice(-1, 1);
            }
            return this.formTabList;
        }
    }
};
