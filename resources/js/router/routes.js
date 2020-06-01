const Home = () => import("@/layouts/Home");
const Login = () => import("@/pages/auth/Login");
const Forget = () => import("@/pages/auth/Forget");
const Reset = () => import("@/pages/auth/Reset");
const Dashboard = () => import("@/layouts/Dashboard");
const Setting = () => import("@/pages/Setting");
const User = () => import("@/pages/User");
const Profile = () => import("@/pages/Profile");
const Report = () => import("@/pages/Report");
const Product = () => import("@/pages/Product");
const Formula = () => import("@/pages/Formula");
const Error = () => import("@/pages/Error");

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
                path: "reset",
                name: "reset",
                component: Reset
            }
        ]
    },
    {
        path: "/app",
        component: Dashboard,
        children: [
            {
                path: "",
                name: "report",
                component: Report,
                meta: {
                    auth: true
                }
            },
            {
                path: "product",
                name: "product",
                component: Product,
                meta: {
                    auth: true
                }
            },
            {
                path: "formula",
                name: "formula",
                component: Formula,
                meta: {
                    auth: true
                }
            },
            {
                path: "user",
                name: "user",
                component: User,
                meta: {
                    auth: true
                }
            },
            {
                path: "setting",
                name: "setting",
                component: Setting,
                meta: {
                    auth: true
                }
            },
            {
                path: "profile",
                name: "profile",
                component: Profile,
                meta: {
                    auth: true
                }
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
