import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root'
import Home from "../Pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import ResidentialDetails from "../pages/ResidentialDetails";
import ErrorPages from "../pages/ErrorPages";

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
                path:'/residentialPages/:id',
                element:<ResidentialDetails></ResidentialDetails>,
                loader: async ({params}) => {
                    const res = await fetch('../../public/residential.json');
                    const residential = await res.json();
                    const residency = residential.find(r => r.id === params.id);
                    return residency || null;
                },
            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
        ]
    }
]);

export default routes