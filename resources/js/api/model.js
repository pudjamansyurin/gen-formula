import { http } from "./http";

const view = async model =>
    await http.get(`api/${model}`).then(response => {
        return response.data;
    });

export { view };
