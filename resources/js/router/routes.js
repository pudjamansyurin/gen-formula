const Home = () => import(/* webpackChunkName: "home" */ "../layouts/Home");
const Login = () =>
    import(/* webpackChunkName: "auth-login" */ "../views/auth/Login");
const Forget = () =>
    import(/* webpackChunkName: "auth-forget" */ "../views/auth/Forget");
const Reset = () =>
    import(/* webpackChunkName: "auth-reset" */ "../views/auth/Reset");
const Verify = () =>
    import(/* webpackChunkName: "auth-verify" */ "../views/auth/Verify");
const Dashboard = () =>
    import(/* webpackChunkName: "dashboard" */ "../layouts/Dashboard");
const Setting = () =>
    import(/* webpackChunkName: "setting" */ "../views/Setting");
const User = () => import(/* webpackChunkName: "user" */ "../views/User");
const Profile = () =>
    import(/* webpackChunkName: "profile" */ "../views/Profile");
const Report = () => import(/* webpackChunkName: "report" */ "../views/Report");
const Product = () =>
    import(/* webpackChunkName: "product" */ "../views/Product");
const Price = () => import(/* webpackChunkName: "price" */ "../views/Price");
const Formula = () =>
    import(/* webpackChunkName: "formula" */ "../views/Formula");
const Error = () => import(/* webpackChunkName: "error" */ "../views/Error");

export default [
    {
        path: "/",
        component: Home,
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
                redirect: {
                    name: "report"
                }
            },
            {
                path: "report",
                name: "report",
                component: Report
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
                path: "product",
                name: "product",
                component: Product
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
            // {
            //     path: "setting",
            //     name: "setting",
            //     component: Setting
            // },
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
