import { isUndefined, cloneDeep } from "lodash";

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
        create() {
            // Handle 'FormTabMixin'
            if (!isUndefined(this.formTabIndex)) {
                this.formTabIndex = 0;
            }

            this.fillForm();
            this.$nextTick(() => (this.dialog = true));
        },
        edit(item) {
            // Handle 'FormTabMixin'
            if (!isUndefined(this.formTabIndex)) {
                this.formTabIndex = 0;
            }

            this.fillForm(item);
            this.$nextTick(() => (this.dialog = true));
        },
        fillForm(item) {
            let data = this.modelProp;
            if (item) {
                data = item || this.selected[0];
            }

            this.form = cloneDeep(data);
        }
    }
};
