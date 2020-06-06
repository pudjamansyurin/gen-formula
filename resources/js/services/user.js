import { http } from "./http";

const viewAny = async () =>
    await http.get("user").then(response => {
        return response.data;
    });

export { viewAny };
