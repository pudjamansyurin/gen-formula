export const ns = (namespace, definition) => {
    return `${namespace.toLowerCase()}/${definition}`;
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
