import { useContext, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";


const UpdateProfile = () => {

    const {userUpdateProfile} = useContext(AuthContext)
    const [showPassword , setShowPassword] = useState(false);
        

    const handleRegister = e =>{
        e.preventDefault() ;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.imageUrl.value;
        console.log(email, password , name);


        userUpdateProfile (name , image)
        .then(()=>{
            toast.success('Successfully update')
        })
    .catch(error =>{
        toast.error(error.massage)
    })
}



    return (
       <HelmetProvider>
         <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                    <div className="bg-[#E5E5E5] w-[400px] lg:w-full mt-10 mb-10">
                      <div className="hero-content ">
                        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            
                         <form onSubmit={handleRegister}>
                         <div className="card-body">
                            <fieldset className="fieldset">
                                <h2 className='text-3xl font-bold text-black text-center'>Update Profile</h2>
                              <label className="label text-black">Name</label>
                              <input type="text" name="name" required className="input" placeholder="Your Name" />
                              <label className="label text-black">Email</label>
                              <input type="email" name="email" required className="input" placeholder="Email" />
            
                              <label className="label text-black">Image URL</label>
                              <input type="text" name="imageUrl" className="input" placeholder="Image URL" />
            
                              <label className="label text-black">Password</label>
            
                              <p className="flex items-center ">
                              <input type={showPassword ? 'text' : 'password'} name="password" required className="input" placeholder="Password" />
                              <span onClick={()=> setShowPassword(!showPassword)}><FaRegEye className="text-black text-3xl "></FaRegEye></span>
                              </p>
            
                              <div><a className="link link-hover text-black">Forgot password?</a></div>
                              <input type="submit" className="btn bg-amber-200 border border-none text-black" value="Submit" />
                            </fieldset>
                          </div>
                         </form>
                         <ToastContainer></ToastContainer>
                        </div>
                      </div>
                    </div>

        </div>
       </HelmetProvider>
    );
};

export default UpdateProfile;