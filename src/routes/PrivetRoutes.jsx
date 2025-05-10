import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner text-error mx-60 my-10"></span>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoutes;