import { castRouteParamsId } from "@/helpers";

const Home = () => import("@/layouts/Home");
const Login = () => import("@/views/auth/Login");
const Forget = () => import("@/views/auth/Forget");
const Reset = () => import("@/views/auth/Reset");
const Verify = () => import("@/views/auth/Verify");
const Dashboard = () => import("@/layouts/Dashboard");
const Setting = () => import("@/views/Setting");
const User = () => import("@/views/User");
const Profile = () => import("@/views/Profile");
const Report = () => import("@/views/Report");
const Product = () => import("@/views/Product");
const Price = () => import("@/views/Price");
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
                component: Formula
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
                component: User
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
