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
        meta: {
            auth: true
        },
        children: [
            {
                path: "",
                name: "report",
                component: Report
            },
            {
                path: "product",
                name: "product",
                component: Product
            },
            {
                path: "product-price/:id?",
                name: "productPrice",
                component: ProductPrice,
                props: castRouteParamsId
            },
            {
                path: "formula",
                name: "formula",
                component: Formula
            },
            {
                path: "user",
                name: "user",
                component: User
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
