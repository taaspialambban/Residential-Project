import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Root = () => {

    return (
        <div className="bg-amber-50 w-[1230px] mx-auto">
  
               <Navbar></Navbar> 
            <Outlet></Outlet>
            <div className=" text-black border border-l-blue-600">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;