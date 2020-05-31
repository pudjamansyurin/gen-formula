import { api } from "./api";

export default {
    csrf() {
        return api.get("csrf-cookie");
    },
    login(payload) {
        return api.post("login", payload);
    },
    logout() {
        return api.post("logout");
    }
};
