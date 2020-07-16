import { http } from "./http";

export const login = async payload => {
    await http.get("api/csrf-cookie");
    return await http.post("login", payload);
};

export const logout = async () => await http.post("logout");

export const forget = async payload =>
    await http.post("password/email", payload);

export const reset = async payload =>
    await http.post("password/reset", payload);

export const resend = async () => await http.post("email/resend");

export const verify = async url => await http.get(url);
