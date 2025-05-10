import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPages = () => {

    const {createLogin} = useContext(AuthContext);
    const [showPassword , setShowPassword] = useState(false);
    
    
    const handleRegister = e =>{
        e.preventDefault() ;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password , name);


        if(password.length <6){
            toast.error('required 6 degit')
            return
        }

        if(!/[A-Z]/.test(password)){
            toast.error('Password must contain at least one uppercase letter.')
            return
        }

        if(!/[a-z]/.test(password)){
            toast.error('Password must contain at least one lowercase letter.')
            return
        }

        createLogin (email , password)
        .then(result =>{
            console.log(result.user)
 
    })
        toast.success('Successfully registered!')


        .catch (error =>{
            toast.error(error.massage)
        })

    }

    return (
        <div className="bg-[#E5E5E5] w-[400px] lg:w-full mt-10 mb-10">
          <div className="hero-content ">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl">

             <form onSubmit={handleRegister}>
             <div className="card-body">
                <fieldset className="fieldset">
                    <h2 className='text-3xl font-bold text-black text-center'>Register page</h2>
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
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
             </form>
             <ToastContainer></ToastContainer>
             <p className="text-black p-5">Already have an account? <Link className="text-red-500" to='/login'>Login</Link> </p>
            </div>
          </div>
        </div>
    );
};

export default RegisterPages;