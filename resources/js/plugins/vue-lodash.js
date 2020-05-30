import Vue from "vue";
import VueLodash from "vue-lodash";
import cloneDeep from "lodash/cloneDeep";
import map from "lodash/map";
import filter from "lodash/filter";

Vue.use(VueLodash, {
    name: "$_",
    lodash: {
        cloneDeep,
        map,
        filter
    }
});
