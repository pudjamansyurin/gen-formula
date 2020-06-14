import { http } from "./http";

const login = async payload => {
    await http.get("api/csrf-cookie");
    return await http.post("login", payload);
};

const logout = async () => await http.post("logout");

export { login, logout };
