import {Navigate, createBrowserRouter} from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";
import GuestLayout from "./components/GuestLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout />,
        children:[
            {
                path:'/',
                element:<Navigate to='/dashboard'/>
            },
            {
                path:'/users',
                element:<Users />
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            },

        ]

    },

    {
        path:'/',
        element:<GuestLayout />,
        children:[

            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            },

        ]

    },
    {
        path:'*',
        element:<NotFound />,
    },
]);

export default router;
