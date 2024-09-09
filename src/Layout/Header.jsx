import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const active = ({ isActive }) => {
   return isActive ? "text-green-500" : "text-gray-800";
  };
  return (
    <>
      <div className="nav">
        <div className="max-w-7xl mx-auto flex flex-col bg-gray-800 md:flex-row bg-gray-90NavLink p-4 items-center justify-between">
          <span className="text-white text-sm mb-2 md:mb-0">
            Get Panday Membership 30-day return or refund guarantee.
          </span>
          <div className="flex space-x-4">
            <button className="text-blue-500 text-sm hover:underline">
              SIGN IN
            </button>
            <button className="text-blue-500 text-sm px-4 py-1 rounded-md hover:bg-blue-700 hover:text-white">
              SIGN UP
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-lg  bg-white p-4 items-center justify-between">
          <span className="text-blue-800 text-sm mb-2 md:mb-0 flex gap-5">PandayFlix <small className="text-red-400 font-bold"> developed by @anmol panday</small></span>
          <span className="flex space-x-4 text-sm">
            <NavLink to="/" className={active}>
              Home
            </NavLink>
            <NavLink to="/about"  className={active}>About</NavLink>
            <NavLink to="/movie"  className={active}>Movies</NavLink>
            <NavLink to="/contact" className={active}>Contact</NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
