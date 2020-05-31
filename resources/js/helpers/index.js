import { reduce } from "lodash";

export const addNamespace = (namespace, types) => {
    return reduce(
        types,
        (typeObj, typeValue, typeName) => ({
            ...typeObj,
            [`${namespace.toUpperCase()}_${typeName}`]: `${namespace.toLowerCase()}/${typeValue}`
        }),
        {}
    );
};

export const removeNamespace = (namespace, types) => {
    return reduce(
        types,
        (typeObj, typeValue, typeName) => ({
            ...typeObj,
            [typeName.replace(
                `${namespace.toUpperCase()}_`,
                ""
            )]: typeValue.replace(`${namespace.toLowerCase()}/`, "")
        }),
        {}
    );
};
