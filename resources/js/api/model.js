import http from "@/plugins/axios";

export const viewAny = async (model, params) =>
    await http.get(`api/${model}`, { params }).then(({ data }) => data);

export const view = async (model, id) =>
    await http.get(`api/${model}/${id}`).then(({ data }) => data);

export const create = async (model, payload) =>
    await http.post(`api/${model}`, payload).then(({ data }) => data);

export const update = async (model, payload) =>
    await http
        .put(`api/${model}/${payload.id}`, payload)
        .then(({ data }) => data);

export const destroy = async (model, ids) =>
    await http
        .delete(`api/${model}/-1`, { data: { ids } })
        .then(({ data }) => data);
