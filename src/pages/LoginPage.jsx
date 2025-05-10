import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { SiFacebook } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

    const {Login , SingInWithGoogle , singInWithFacebook} = useContext(AuthContext)
    const [showPassword , setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

   

    const handleLogin = e =>{
        e.preventDefault() ;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        // if (error.code === 'auth/wrong-password') {
        //   toast.error('পাসওয়ার্ড মিলছে না! আবার চেষ্টা করুন।');
        // } else if (error.code === 'auth/user-not-found') {
        //   toast.error('এই ইমেইল দিয়ে কোনো একাউন্ট নেই।');
        // } else {
        //   toast.error(error.message);
        // }

        Login (email , password)
        .then (result =>{
            console.log(result.user)
            navigate(location?.state ? location.state :'/')
        })
        .catch(error =>{
          console.error(error)
          
        if (error.code === 'wrong-password') {
          toast.error('wrong password');
        } else if (error.code === 'auth/user-not-found') {
          toast.error('এই ইমেইল দিয়ে কোনো একাউন্ট নেই।');
        } else {
          toast.error(error.message);
        }
      })
    }

    const LoginWithGoogle = () =>{
      SingInWithGoogle()
      .then(result=>{
        console.log(result.user)
        navigate(location?.state ? location.state :'/')
      })
      .catch(error=>{
        console.error(error.massage)
        toast.error(error.massage)
      })
    }

    const LoginWithFacebook = () =>{
      singInWithFacebook()
      .then(result=>{
        console.log(result.user)
        navigate(location?.state ? location.state :'/')
      })
      .catch(error =>{
        console.error(error)
        toast.error(error.massage)
      })
    }

    return (
        <div className="bg-[#E5E5E5] w-[400px] lg:w-full mt-10 mb-10">
  <div className="hero-content ">
    
    <div className="card border border-amber-50 w-full max-w-sm shrink-0 shadow-2xl">
     <form onSubmit={handleLogin}>
     <div className="card-body">
        <fieldset className="fieldset">
            <h2 className='text-3xl font-bold text-black text-center'>Login page</h2>
          <label className="label text-black">Email</label>
          <input type="email" name="email" required className="input" placeholder="Email" />
          <label className="label text-black">Password</label>
         
          <p className="flex items-center ">
                  <input type={showPassword ? 'text' : 'password'} name="password" required className="input" placeholder="Password" />
                  <span onClick={()=> setShowPassword(!showPassword)}><FaRegEye className="text-black text-3xl "></FaRegEye></span>
                  </p>

          <div><a className="link link-hover text-black">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <h2 className="text-black text-center text-2xl font-bold">or</h2>
        <div className="flex justify-center gap-7 items-center">
        <button onClick={LoginWithGoogle} className="text-orange-400 border-none text-lg p-3 btn bg-blue-200">Google</button>
         <button onClick={LoginWithFacebook}>
         <SiFacebook className="text-blue-500 text-3xl"></SiFacebook>
         </button>
        </div>
      </div>
     </form>
     <ToastContainer></ToastContainer>
     <p className="text-black p-5"> Have Account? <Link className="text-red-600" to='/register'>please Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default LoginPage;