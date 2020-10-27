import { map, cloneDeep } from "lodash";
import { mapState, mapActions, mapMutations } from "vuex";

import { eHandler, ls } from "@/utils";
import { table } from "@/config";
import { UPDATE_MODEL } from "@/store/model/mutation-types";
import {
    GET_MODEL,
    GET_MODELS,
    SAVE_MODEL,
    DELETE_MODELS
} from "@/store/model/action-types";

import TheData from "@/components/TheData";
import TheDialogForm from "@/components/TheDialogForm";
import TheDialogDelete from "@/components/TheDialogDelete";
import { SET_PER_PAGE } from "@/store/app/mutation-types";
import CommonMixin from "./CommonMixin";

export default {
    mixins: [CommonMixin],
    components: {
        TheData,
        TheDialogForm,
        TheDialogDelete
    },
    data() {
        return {
            options: cloneDeep({
                ...table.options,
                itemsPerPage: ls.get("perPage") || table.options.itemsPerPage
            }),
            total: 0,
            selected: [],
            dialog: false,
            dialogDelete: false
        };
    },
    computed: {
        ...mapState("app", ["perPage"]),
        creating() {
            return this.form.id === -1;
        },
        fieldDisabled() {
            return !this.creating && !this.form.authorized;
        }
    },
    methods: {
        ...mapMutations("app", [SET_PER_PAGE]),
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
            this.$nextTick(() => this.$refs.form.validator.reset());
        },
        onCreate() {
            this.form = cloneDeep(this.modelDefault);
        },
        onEdit(item) {
            this.form = cloneDeep(item || this.selected[0]);
        },
        create: async function() {
            await this.onCreate();
            this.$nextTick(() => (this.dialog = true));
        },
        edit: async function(item) {
            if (this.selected.length > 0) {
                return;
            }
            await this.onEdit(item);
            this.$nextTick(() => (this.dialog = true));
        },
        fetchAll: async function() {
            await this.GET_MODELS({
                model: this.model,
                params: {
                    ...this.options,
                    itemsPerPage: this.mobile ? -1 : this.perPage
                }
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
        onSaved(data) {},
        save: async function() {
            this.onSave();

            await this.$refs.form.validator.validate().then(async valid => {
                if (valid) {
                    this.START_LOADING();
                    await this.SAVE_MODEL({
                        model: this.model,
                        payload: this.form
                    })
                        .then(async data => {
                            this.updateOrFetchAll(data);
                            this.onSaved(data);
                            this.selected = [];
                            this.close();
                        })
                        .catch(e =>
                            this.$refs.form.validator.setErrors(eHandler(e))
                        )
                        .then(() => this.STOP_LOADING());
                }
            });
        },
        updateOrFetchAll: async function(data) {
            if (this.creating) {
                await this.fetchAll();
            } else {
                await this.UPDATE_MODEL({
                    model: this.model,
                    data
                });
            }
        }
    },
    watch: {
        options: {
            handler(newVal, oldVal) {
                if (!this.mobile && oldVal) {
                    if (oldVal.itemsPerPage != newVal.itemsPerPage) {
                        this.SET_PER_PAGE(newVal.itemsPerPage);
                    }
                }
                this.fetchAll();
            },
            immediate: true,
            deep: true
        }
    }
};
