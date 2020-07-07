import { http } from "./http";

export const viewAny = async (model, params) => {
    return await http.get(`api/${model}`, { params }).then(response => {
        return response.data;
    });
};

// export const view = async (model, id) => {
//     return await http.get(`api/${model}/${id}`).then(response => {
//         return response.data;
//     });
// };

export const create = async (model, payload) => {
    return await http.post(`api/${model}`, payload).then(response => {
        return response.data;
    });
};

export const update = async (model, payload) => {
    const { id } = payload;

    return await http.put(`api/${model}/${id}`, payload).then(response => {
        return response.data;
    });
};

export const destroy = async (model, ids) => {
    return await http
        .delete(`api/${model}/-1`, { data: { ids } })
        .then(response => {
            return response.data;
        });
};
