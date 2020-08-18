export default {
    computed: {
        mobile() {
            return this.$vuetify.breakpoint.smAndDown;
        }
    }
};
