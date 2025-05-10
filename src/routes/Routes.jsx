import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Home from "../Pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import ResidentialDetails from "../pages/ResidentialDetails";
import ErrorPages from "../pages/ErrorPages";
import LoginPage from "../pages/LoginPage";
import RegisterPages from "../pages/RegisterPages";
import PrivetRoutes from "./PrivetRoutes";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('residential.json')
            },
            {
                path:'/userProfile/:id',
                element:<PrivetRoutes><ResidentialDetails></ResidentialDetails></PrivetRoutes> ,
                loader: async ({params}) => {
                    const res = await fetch('../../public/residential.json');
                    const residential = await res.json();
                    const residency = residential.find(r => r.id === params.id);
                    return residency || null;
                },
            },
            {
                path:'/updateProfile',
                element:<PrivetRoutes><UpdateProfile></UpdateProfile></PrivetRoutes>
            },
            {
                path:'login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/register',
                element:<RegisterPages></RegisterPages>
            }
        ]
    }
]);

export default routes