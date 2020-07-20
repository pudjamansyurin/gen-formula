import Vue from "vue";
import VueLodash from "vue-lodash";
import { get, map, find, reduce, pick, cloneDeep, startCase } from "lodash";

Vue.use(VueLodash, {
    name: "$_",
    lodash: { get, map, find, reduce, pick, cloneDeep, startCase }
});
