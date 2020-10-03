const Landing = () =>
    import(/* webpackChunkName: "landing" */ "../layouts/Landing");
const Dashboard = () =>
    import(/* webpackChunkName: "dashboard" */ "../layouts/Dashboard");

const Error = () =>
    import(/* webpackChunkName: "error" */ "../views/landing/Error");
const Policy = () =>
    import(/* webpackChunkName: "policy" */ "../views/landing/Policy");

const Login = () =>
    import(/* webpackChunkName: "auth.login" */ "../views/auth/Login");
const Forget = () =>
    import(/* webpackChunkName: "auth.forget" */ "../views/auth/Forget");
const Reset = () =>
    import(/* webpackChunkName: "auth.reset" */ "../views/auth/Reset");
const Verify = () =>
    import(/* webpackChunkName: "auth.verify" */ "../views/auth/Verify");

const Profile = () =>
    import(/* webpackChunkName: "profile" */ "../views/Profile");
const Pack = () => import(/* webpackChunkName: "pack" */ "../views/Pack");
const Packer = () => import(/* webpackChunkName: "packer" */ "../views/Packer");
const Package = () =>
    import(/* webpackChunkName: "package" */ "../views/Package");
const Matter = () => import(/* webpackChunkName: "matter" */ "../views/Matter");
const Material = () =>
    import(/* webpackChunkName: "material" */ "../views/Material");
const Formula = () =>
    import(/* webpackChunkName: "formula" */ "../views/Formula");
const Sale = () => import(/* webpackChunkName: "sale" */ "../views/Sale");
const User = () => import(/* webpackChunkName: "user" */ "../views/User");
// const Report = () => import(/* webpackChunkName: "report" */ "../views/Report");
// const Setting = () => import(/* webpackChunkName: "setting" */ "../views/Setting");

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
                        return { name: "sale" };
                    }
                    return { name: "material" };
                }
            },
            {
                path: "sale",
                name: "sale",
                component: Sale,
                meta: {
                    roles: ["admin", "manager"]
                }
            },
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
                component: Material,
                meta: {}
            },
            {
                path: "matter",
                name: "matter",
                component: Matter,
                meta: {
                    roles: ["admin", "manager"]
                }
            },
            {
                path: "package",
                name: "package",
                component: Package,
                meta: {}
            },
            {
                path: "packer",
                name: "packer",
                component: Packer,
                meta: {
                    roles: ["admin", "manager"]
                }
            },
            {
                path: "pack/:id?",
                name: "pack",
                component: Pack,
                props: true,
                meta: {
                    roles: ["admin", "manager"]
                }
            },
            // {
            //     path: "report",
            //     name: "report",
            //     component: Report
            // },
            // {
            //     path: "setting",
            //     name: "setting",
            //     component: Setting
            // },
            {
                path: "user",
                name: "user",
                component: User,
                meta: {
                    roles: ["admin"]
                }
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
