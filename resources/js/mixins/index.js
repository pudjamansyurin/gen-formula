import { mapState } from "vuex";

export default {
    computed: {
        ...mapState("app", ["loading", "dense"]),
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        }
    },
    methods: {
        isNewModel({ id }) {
            return id === -1;
        }
    }
};
