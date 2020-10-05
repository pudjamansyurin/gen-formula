import { map, cloneDeep } from "lodash";
import { mapActions, mapMutations } from "vuex";

import { eHandler } from "../utils/helper";
import { TABLE_OPTIONS } from "../utils/config";
import { UPDATE_MODEL } from "../store/model/mutation-types";
import {
    GET_MODEL,
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "../store/model/action-types";

import TheData from "../components/TheData";
import TheDialogForm from "../components/TheDialogForm";
import TheDialogDelete from "../components/TheDialogDelete";

export default {
    components: {
        TheData,
        TheDialogForm,
        TheDialogDelete
    },
    data() {
        return {
            options: cloneDeep(TABLE_OPTIONS),
            total: 0,
            selected: [],
            dialog: false,
            dialogDelete: false
        };
    },
    computed: {
        creating() {
            return this.form.id === -1;
        },
        fieldDisabled() {
            return !this.creating && !this.form.authorized;
        }
    },
    methods: {
        ...mapMutations("model", [UPDATE_MODEL]),
        ...mapActions("model", [
            GET_MODEL,
            GET_MODELS,
            SAVE_MODEL,
            DELETE_MODELS
        ]),
        chipColor(item) {
            return item.authorized ? "green" : "grey";
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => this.$refs.form.$refs.form.reset());
        },
        onCreate() {
            this.form = cloneDeep(this.modelDefault);
        },
        onEdit(item) {
            this.form = cloneDeep(item || this.selected[0]);
        },
        create() {
            this.onCreate();
            this.$nextTick(() => (this.dialog = true));
        },
        edit(item) {
            this.onEdit(item);
            this.$nextTick(() => (this.dialog = true));
        },
        fetchAll: async function() {
            await this.GET_MODELS({
                model: this.model,
                params: this.options
            })
                .then(({ total }) => (this.total = total))
                .catch(e => eHandler(e));
        },
        remove: async function() {
            this.START_LOADING();
            await this.DELETE_MODELS({
                model: this.model,
                ids: map(this.selected, "id")
            })
                .then(async () => {
                    await this.fetchAll();

                    this.dialogDelete = false;
                    this.$nextTick(() => (this.selected = []));
                })
                .catch(e => eHandler(e))
                .then(() => this.STOP_LOADING());
        },
        onSave() {},
        save: async function() {
            this.onSave();

            this.$refs.form.$refs.form.validate().then(async valid => {
                if (valid) {
                    this.START_LOADING();
                    await this.SAVE_MODEL({
                        model: this.model,
                        payload: this.form
                    })
                        .then(async data => {
                            this.updateOrFetchAll(data);

                            this.selected = [];
                            this.close();
                        })
                        .catch(e =>
                            this.$refs.form.$refs.form.setErrors(eHandler(e))
                        )
                        .then(() => this.STOP_LOADING());
                }
            });
        },
        updateOrFetchAll: async function(data) {
            if (this.creating) {
                await this.fetchAll();
            } else {
                this.UPDATE_MODEL({
                    model: this.model,
                    data
                });
            }
        }
    },
    watch: {
        options: {
            handler() {
                this.fetchAll();
            },
            immediate: true,
            deep: true
        }
    }
};
