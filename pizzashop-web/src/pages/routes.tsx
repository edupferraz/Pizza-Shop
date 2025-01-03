import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./app/dashboard";
import { SignIn } from "./auth/sign-in";
import { SignUp } from "./auth/sign-up";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {path: '/', element: <Dashboard/>},
        ]
    },

    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {path: '/sign-in', element: <SignIn/>},
            {path: '/sign-up', element: <SignUp/>},
        ]
    }
    
    // {path: '/', element: <Dashboard/>},
    // {path: '/sign-in', element: <SignIn/>},
])