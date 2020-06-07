import { http } from "./http";

const login = async payload => {
    return await http.get("csrf-cookie").then(async () => {
        return await http.post("login", payload);
    });
};

const logout = async () => await http.post("logout");

const check = async () => await http.get("check");

export { login, logout, check };
