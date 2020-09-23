import { cloneDeep } from "lodash";

import { TABLE_OPTIONS } from "../utils/config";

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
        close() {
            this.dialog = false;
            this.$nextTick(() => this.$refs.form.reset());
        },
        onCreate() {
            this.form = cloneDeep(this.modelProp);
        },
        create() {
            this.onCreate();
            this.$nextTick(() => (this.dialog = true));
        },
        onEdit(item) {
            this.form = cloneDeep(item || this.selected[0]);
        },
        edit(item) {
            this.onEdit(item);
            this.$nextTick(() => (this.dialog = true));
        }
    }
};
