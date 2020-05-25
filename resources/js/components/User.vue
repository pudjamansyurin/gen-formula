<template>
    <div>
        <!-- DataTable -->
        <slot></slot>

        <!-- Modal -->
        <b-modal
            id="modal"
            ref="modal"
            :title="title"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
        >
            <b-form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                    :state="state.name"
                    label="Name"
                    invalid-feedback="Name is required"
                >
                    <b-form-input
                        v-model="form.name"
                        :state="state.name"
                        type="text"
                        placeholder="Enter name for user"
                        autocomplete="off"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    :state="state.email"
                    label="Email"
                    invalid-feedback="Email is required"
                >
                    <b-form-input
                        v-model="form.email"
                        :state="state.email"
                        type="email"
                        placeholder="Enter active email"
                        autocomplete="off"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    :state="state.role_id"
                    label="Role"
                    invalid-feedback="Role is required"
                >
                    <b-form-select
                        v-model="form.role_id"
                        :state="state.role_id"
                        :options="optionsRoles"
                        required
                    ></b-form-select>
                </b-form-group>

                <b-form-group
                    :state="state.password"
                    label="Passowrd"
                    invalid-feedback="Password is required"
                >
                    <b-form-input
                        v-model="form.password"
                        :state="state.password"
                        type="password"
                        placeholder="Enter password for user"
                        autocomplete="off"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    :state="state.password_confirmation"
                    label="Passowrd Confirmation"
                    invalid-feedback="Password confirmation is required"
                >
                    <b-form-input
                        v-model="form.password_confirmation"
                        :state="state.password_confirmation"
                        type="password"
                        placeholder="Enter the password again"
                        autocomplete="off"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        roles: Object,
        data: Object
    },
    data() {
        return {
            model: "user",
            title: "",
            form: {
                name: null,
                email: null,
                role_id: null,
                password: null,
                password_confirmation: null
            },
            state: {
                name: null,
                email: null,
                role_id: null,
                password: null,
                password_confirmation: null
            },
            msgBoxOptions: {
                title: "Please Confirm",
                size: "md",
                buttonSize: "md",
                okVariant: "danger",
                okTitle: "YES",
                cancelTitle: "NO",
                footerClass: "p-2",
                hideHeaderClose: false,
                centered: true
            }
        };
    },
    computed: {
        optionsRoles: function() {
            let roles = _.map(this.roles, function(role) {
                return {
                    value: role.id,
                    text: role.name
                };
            });

            return [{ value: null, text: "Please select an option" }, ...roles];
        }
    },
    methods: {
        // checkFormValidity() {
        //     const valid = this.$refs.form.checkValidity();
        //     this.state.name = valid;
        //     return valid;
        // },
        resetModal() {
            _.forOwn(this.form, (value, key) => {
                this.form[key] = null;
                this.state[key] = null;
            });
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault();

            // Trigger submit handler
            this.handleSubmit();
        },
        handleSubmit() {
            // Exit when the form isn't valid
            // if (!this.checkFormValidity()) {
            //     return;
            // }

            Axios.post(this.model, this.form)
                .then(response => {
                    // handle success
                    console.log(response);
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                });

            // Hide the modal manually
            this.$nextTick(() => {
                this.$bvModal.hide("modal");
            });
        },
        showDeleteConfirmation: function(id) {
            this.$bvModal
                .msgBoxConfirm(`Sure to delete ID ${id} ?`, this.msgBoxOptions)
                .then(value => {
                    if (value) {
                        // delete
                    }
                })
                .catch(err => {
                    // An error occurred
                    console.error(err);
                });
        },
        getModel: function(id) {
            Axios.get(`${this.model}/${id}/edit`)
                .then(response => {
                    // handle success
                    _.forOwn(response.data, (value, key) => {
                        if (_.has(this.form, key)) {
                            // copy value
                            this.form[key] = value;
                        }
                    });
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                });
        }
    },
    watch: {
        "data.create": function() {
            this.title = `Create ${this.model}`;
            this.$bvModal.show("modal");
        },
        "data.edit": function() {
            this.title = `Edit ${this.model}`;
            this.getModel(this.data.id);
            this.$bvModal.show("modal");
        },
        "data.delete": function() {
            this.showDeleteConfirmation(this.data.id);
        }
    }
};
</script>
