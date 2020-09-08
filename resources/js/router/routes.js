const Landing = () =>
    import(/* webpackChunkName: "home" */ "../layouts/Landing");
const Login = () =>
    import(/* webpackChunkName: "auth-login" */ "../views/landing/auth/Login");
const Forget = () =>
    import(
        /* webpackChunkName: "auth-forget" */ "../views/landing/auth/Forget"
    );
const Reset = () =>
    import(/* webpackChunkName: "auth-reset" */ "../views/landing/auth/Reset");
const Verify = () =>
    import(
        /* webpackChunkName: "auth-verify" */ "../views/landing/auth/Verify"
    );
const Error = () =>
    import(/* webpackChunkName: "error" */ "../views/landing/Error");
const Policy = () =>
    import(/* webpackChunkName: "policy" */ "../views/landing/Policy");

const Dashboard = () =>
    import(/* webpackChunkName: "dashboard" */ "../layouts/Dashboard");
const Setting = () =>
    import(/* webpackChunkName: "setting" */ "../views/Setting");
const User = () => import(/* webpackChunkName: "user" */ "../views/User");
const Profile = () =>
    import(/* webpackChunkName: "profile" */ "../views/Profile");
// const Report = () => import(/* webpackChunkName: "report" */ "../views/Report");
const Material = () =>
    import(/* webpackChunkName: "material" */ "../views/Material");
const Price = () => import(/* webpackChunkName: "price" */ "../views/Price");
const Formula = () =>
    import(/* webpackChunkName: "formula" */ "../views/Formula");

import store from "../store";

export default [
    {
        path: "/",
        component: Landing,
        children: [
            {
                path: "",
                name: "login",
                component: Login
            },
            {
                path: "forget",
                name: "forget",
                component: Forget
            },
            {
                path: "reset/:token/:email",
                props: true,
                name: "reset",
                component: Reset
            },
            {
                path: "policy",
                name: "policy",
                component: Policy
            }
        ]
    },
    {
        path: "/app",
        component: Dashboard,
        meta: {
            auth: true
        },
        children: [
            {
                path: "",
                redirect: to => {
                    const { role } = store.state.app.profile;

                    if (["admin", "manager"].includes(role.name)) {
                        return { name: "formula" };
                    }
                    return { name: "material" };
                }
            },
            // {
            //     path: "report",
            //     name: "report",
            //     component: Report
            // },
            {
                path: "formula",
                name: "formula",
                component: Formula,
                meta: {
                    roles: ["admin", "manager"]
                }
            },
            {
                path: "material",
                name: "material",
                component: Material
            },
            {
                path: "price/:id?",
                name: "price",
                component: Price,
                props: true
            },
            {
                path: "user",
                name: "user",
                component: User,
                meta: {
                    roles: ["admin"]
                }
            },
            {
                path: "setting",
                name: "setting",
                component: Setting
            },
            {
                path: "profile",
                name: "profile",
                component: Profile
            },
            {
                path: "verify",
                name: "verify",
                component: Verify
            }
        ]
    },
    {
        path: "/error/:code?/:text?",
        name: "error",
        props: true,
        component: Error
    },
    {
        path: "*",
        redirect: {
            name: "error"
        }
    }
];
