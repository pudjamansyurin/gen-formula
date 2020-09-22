import { mapState, mapMutations } from "vuex";
import { START_LOADING, STOP_LOADING } from "../store/app/mutation-types";

export default {
    computed: {
        ...mapState("app", ["loading", "dense"]),
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        }
    },
    methods: {
        ...mapMutations("app", [START_LOADING, STOP_LOADING]),
        isNewModel({ id }) {
            return id === -1;
        }
    }
};
