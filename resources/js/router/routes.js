import Home from "../layouts/Home";
import Login from "../pages/home/Login";
import Forget from "../pages/home/Forget";
import Reset from "../pages/home/Reset";
import Dashboard from "../layouts/Dashboard";
import Reports from "../pages/dashboard/Reports";
import Product from "../pages/dashboard/Product";
import Formula from "../pages/dashboard/Formula";
import User from "../pages/dashboard/User";
import Settings from "../pages/dashboard/Settings";

export default [
    {
        path: "/",
        component: Home,
        children: [
            { path: "", name: "login", component: Login },
            { path: "forget", name: "forget", component: Forget },
            { path: "reset", name: "reset", component: Reset }
        ]
    },
    {
        path: "/app",
        component: Dashboard,
        children: [
            { path: "", name: "reports", component: Reports },
            { path: "product", name: "product", component: Product },
            { path: "formula", name: "formula", component: Formula },
            { path: "user", name: "user", component: User },
            { path: "settings", name: "settings", component: Settings }
        ]
    }
];
