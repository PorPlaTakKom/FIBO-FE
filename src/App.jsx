import Login from "./screens/login.jsx";
import {BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes,} from "react-router-dom";
import Register from "./screens/register.jsx";
import ChangePassword from "./screens/change_password.jsx";
import Confirm_otp from "./screens/confirm_otp.jsx";
import Home from "./screens/home.jsx";
import History from "./screens/history.jsx";
import React from "react";
import Print from "./screens/print.jsx";
import Profile from "./screens/profile.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/changepassword",
            element: <ChangePassword/>
        },
        {
            path: "/confirmOTP",
            element: <Confirm_otp/>
        },
        {
            path: "/home",
            element: <Home/>
        },
        {
            path: "/history",
            element: <History/>
        },
        {
            path: "/print",
            element: <Print/>
        },
        {
            path: "/profile",
            element: <Profile/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};
export default App;