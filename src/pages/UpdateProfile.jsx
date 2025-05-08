import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Components/Navbar";


const UpdateProfile = () => {
    return (
       <HelmetProvider>
         <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2>This is update profile</h2>
        </div>
       </HelmetProvider>
    );
};

export default UpdateProfile;