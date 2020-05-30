const Home = () => import("../layouts/Home");
const Login = () => import("../pages/Login");
const ForgetPassword = () => import("../pages/ForgetPassword");
const ResetPassword = () => import("../pages/ResetPassword");
const Dashboard = () => import("../layouts/Dashboard");
const Settings = () => import("../pages/Settings");
const User = () => import("../pages/User");
const Profile = () => import("../pages/Profile");
const Reports = () => import("../pages/Reports");
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
            { path: "", name: "dashboard", component: Reports },
            { path: "product", name: "product", component: Product },
            { path: "formula", name: "formula", component: Formula },
            { path: "user", name: "user", component: User },
            { path: "settings", name: "settings", component: Settings },
            { path: "profile", name: "profile", component: Profile }
        ]
    }
];
