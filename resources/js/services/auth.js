import { api } from "./api";

export default {
    login(payload) {
        return api.get("csrf-cookie").then(() => {
            return api.post("login", payload);
        });
    },
    logout() {
        return api.post("logout").catch(e => {});
    }
};
