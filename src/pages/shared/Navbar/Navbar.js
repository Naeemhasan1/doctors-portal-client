import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/about'>About </Link></li>
        <li><Link to ='/appointment'>Appointment</Link></li>
        <li><Link to ='/reviews'>Reviews </Link></li>
        <li><Link to ='/contact'>Contact Us</Link></li>
        <li><Link to ='/login'>Login</Link></li>
    </React.Fragment>

  return (
    <div class="navbar bg-base-100 flex justify-between sm:mb-16">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to ='/' class="btn btn-ghost normal-case text-xl">Doctors portal</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
       {menuItems} 
    </ul>
  </div>
  
</div>
  );
};

export default Navbar;