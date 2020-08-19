import { mapState } from "vuex";

export default {
    computed: {
        ...mapState("app", ["loading", "dense"]),
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        }
    }
};
