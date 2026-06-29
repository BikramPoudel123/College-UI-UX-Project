import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center h-14 theme-bg text-white border theme-border ">
      <ul className="flex justify-between w-full  items-center text-lg">
        <li>
          <img src={"logo.png"} alt="" className="w-50 " />
        </li>
        <li className="cursor-pointer font-semibold hover:text-orange-100">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Home</NavLink>
        </li>
        <li className="cursor-pointer font-semibold hover:text-orange-100">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Dashboard</NavLink>
        </li>
        <li className="cursor-pointer font-semibold hover:text-orange-100">
          <NavLink to="/chatsandbooking" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Chats and Booking</NavLink>
        </li>
        <li className="cursor-pointer font-semibold hover:text-orange-100">
          <NavLink to="/exploreskills" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>Explore Skills</NavLink>
        </li>
        <li className="cursor-pointer font-semibold hover:text-orange-100">
          <NavLink to="/dashboard">
            <div className="flex justify-center">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt=""
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
