import { reduce } from "lodash";

export const addNamespace = (namespace, definition) => {
    return `${namespace.toLowerCase()}/${definition}`;
};

export const removeNamespace = (namespace, definition) => {
    return definition.replace(`${namespace.toLowerCase()}/`, "");
};

export const ls = {
    set: (item, value) => {
        window.localStorage.setItem(item, JSON.stringify(value));
    },
    get: item => {
        return JSON.parse(window.localStorage.getItem(item));
    },
    remove: item => {
        window.localStorage.removeItem(item);
    }
};

// export const addNamespaces = (namespace, types) => {
//     return reduce(
//         types,
//         (typeObj, typeValue, typeName) => ({
//             ...typeObj,
//             [`${namespace.toUpperCase()}_${typeName}`]: `${namespace.toLowerCase()}/${typeValue}`
//         }),
//         {}
//     );
// };

// export const removeNamespaces = (namespace, types) => {
//     return reduce(
//         types,
//         (typeObj, typeValue, typeName) => ({
//             ...typeObj,
//             [typeName.replace(
//                 `${namespace.toUpperCase()}_`,
//                 ""
//             )]: typeValue.replace(`${namespace.toLowerCase()}/`, "")
//         }),
//         {}
//     );
// };
