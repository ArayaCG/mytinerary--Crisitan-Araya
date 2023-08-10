import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Layout } from "../layouts/Layout";
import { Cities } from "../pages/Cities";
import { Login } from "../pages/Login/index"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/cities",
                element: <Cities />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])