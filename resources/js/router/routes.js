const Home = () => import("../layouts/Home");
const Login = () => import("../pages/Login");
const ForgetPassword = () => import("../pages/ForgetPassword");
const ResetPassword = () => import("../pages/ResetPassword");
const Dashboard = () => import("../layouts/Dashboard");
const Setting = () => import("../pages/Setting");
const User = () => import("../pages/User");
const Profile = () => import("../pages/Profile");
const Report = () => import("../pages/Report");
const Product = () => import("../pages/Product");
const Formula = () => import("../pages/Formula");

export default [
    {
        path: "/",
        component: Home,
        children: [
            { path: "", name: "login", component: Login },
            { path: "forget", name: "forget", component: ForgetPassword },
            { path: "reset", name: "reset", component: ResetPassword }
        ]
    },
    {
        path: "/app",
        component: Dashboard,
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
    }
];
