import { useContext } from "react";
import { NavLink , Link} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const {user , LogOut} = useContext(AuthContext);

  const handleSingUp = () =>{
    LogOut()
    .then (result =>{
      console.log('user logOut successfully', result)
    })
    .catch (error =>{
      console.error(error)
    })
  }

    const navLink = <>
    <li><NavLink className={({isActive}) => isActive ? 'text-lime-500 font-bold' :'font-bold text-purple-500' } to='/'>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-lime-500 font-bold' :'font-bold text-purple-500'} to='/updateProfile'>UpdateProfile</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-lime-500 font-bold' :'font-bold text-purple-500'} to='/userProfile'>UserDerails</NavLink></li>
    </>


    return (
        <div className= "navbar w-[400px] md:w-[800px] font-Poppins lg:w-full bg-white shadow-md text-black ">


  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-extrabold">Residency Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
     <div className="dropdown h-9 w-10 dropdown-end">
      <label tabIndex={0}>
        <div className="w-10 rounded-full">
          <img className="w-full" src={user?.photoURL || 'https://pbs.twimg.com/profile_images/1560391692410228737/n0WDuOu6_400x400.jpg' } />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-100 rounded-box w-52">
        <li>
          <button className="btn btn-sm btn-ghost">{user?.displayName || 'Not found user name'}</button>
        </li>
        <li>
      <a onClick={handleSingUp} className="btn bg-violet-500 border-none">sing up</a>
        </li>
      </ul>
     </div>
      </>
      :
    <Link to='/login'> <button className="btn bg-green-900 border border-none mx-4">Login</button>
     </Link>
    }
  </div>
</div>
    );
};



export default Navbar;