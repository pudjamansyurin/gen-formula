import { http } from "./http";

const viewAny = async model => {
    return await http.get(`api/${model}`).then(response => {
        return response.data;
    });
};

const view = async (model, id) => {
    return await http.get(`api/${model}/${id}`).then(response => {
        return response.data;
    });
};

const create = async (model, payload) => {
    return await http.post(`api/${model}`, payload).then(response => {
        return response.data;
    });
};

const update = async (model, payload) => {
    const { id } = payload;

    return await http.put(`api/${model}/${id}`, payload).then(response => {
        return response.data;
    });
};

const destroy = async (model, ids) => {
    const multiple = ids.length > 1;
    const data = multiple ? { ids } : null;

    return await http
        .delete(`api/${model}/${ids[0]}`, { data })
        .then(response => {
            return response.data;
        });
};

export { viewAny, create, view, update, destroy };
