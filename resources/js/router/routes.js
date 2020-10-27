const Landing = () =>
    import(/* webpackChunkName: "landing" */ "@/layouts/Landing");
const Dashboard = () =>
    import(/* webpackChunkName: "dashboard" */ "@/layouts/Dashboard");

const Error = () =>
    import(/* webpackChunkName: "error" */ "@/pages/landing/Error");
const Policy = () =>
    import(/* webpackChunkName: "policy" */ "@/pages/landing/Policy");

const Login = () =>
    import(/* webpackChunkName: "auth.login" */ "@/pages/auth/Login");
const Forget = () =>
    import(/* webpackChunkName: "auth.forget" */ "@/pages/auth/Forget");
const Reset = () =>
    import(/* webpackChunkName: "auth.reset" */ "@/pages/auth/Reset");
const Verify = () =>
    import(/* webpackChunkName: "auth.verify" */ "@/pages/auth/Verify");

const Profile = () =>
    import(/* webpackChunkName: "profile" */ "@/pages/Profile");
const Pack = () => import(/* webpackChunkName: "pack" */ "@/pages/Pack");
const Packer = () => import(/* webpackChunkName: "packer" */ "@/pages/Packer");
const Package = () =>
    import(/* webpackChunkName: "package" */ "@/pages/Package");
const Matter = () => import(/* webpackChunkName: "matter" */ "@/pages/Matter");
const Material = () =>
    import(/* webpackChunkName: "material" */ "@/pages/Material");
const Formula = () =>
    import(/* webpackChunkName: "formula" */ "@/pages/Formula");
const Sale = () => import(/* webpackChunkName: "sale" */ "@/pages/Sale");
const User = () => import(/* webpackChunkName: "user" */ "@/pages/User");
// const Report = () => import(/* webpackChunkName: "report" */ "@/pages/Report");
// const Setting = () => import(/* webpackChunkName: "setting" */ "@/pages/Setting");

import store from "@/store";

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
                meta: {}
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
                meta: {}
            },
            {
                path: "pack/:id?",
                name: "pack",
                component: Pack,
                props: true,
                meta: {}
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
