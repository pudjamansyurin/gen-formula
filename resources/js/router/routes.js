import { castRouteParamsId } from "@/helpers";

const Home = () => import("@/layouts/Home");
const Login = () => import("@/views/auth/Login");
const Forget = () => import("@/views/auth/Forget");
const Reset = () => import("@/views/auth/Reset");
const Dashboard = () => import("@/layouts/Dashboard");
const Setting = () => import("@/views/Setting");
const User = () => import("@/views/User");
const Profile = () => import("@/views/Profile");
const Report = () => import("@/views/Report");
const Product = () => import("@/views/Product");
const ProductPrice = () => import("@/views/ProductPrice");
const Formula = () => import("@/views/Formula");
const Error = () => import("@/views/Error");

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
                path: "product/:id",
                props: castRouteParamsId,
                name: "productPrice",
                component: ProductPrice,
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
