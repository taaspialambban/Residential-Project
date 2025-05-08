import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [showPassword , setShowPassword] = useState(false);

    const handleLogin = e =>{
        e.preventDefault() ;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
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
      </div>
     </form>
     <p className="text-black p-5"> Have Account? <Link className="text-red-600" to='/register'>please Register</Link></p>
    </div>
  </div>
</div>
    );
};

export default LoginPage;