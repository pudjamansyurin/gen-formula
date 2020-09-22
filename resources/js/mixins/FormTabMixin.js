export default {
    data() {
        return {
            formTabIndex: 0
        };
    },
    computed: {
        formTabs() {
            let tabs = ["data", "rev"];

            if (this.creating) {
                return [tabs[0]];
            }
            return tabs;
        }
    }
};
