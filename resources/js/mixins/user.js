export default {
    data: function() {
        return {
            user: {
                create: false,
                edit: false,
                delete: false,
                id: null
            }
        };
    },
    methods: {
        userModal: function(method, id) {
            this.user[method] = !this.user[method];
            this.user.id = id;
        }
    }
};
