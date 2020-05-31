import { reduce } from "lodash";

export const mapStore = (object, prefix) =>
    reduce(
        object,
        (result, value, key) => ({
            ...result,
            [key]: `${prefix}/${value}`
        }),
        {}
    );
