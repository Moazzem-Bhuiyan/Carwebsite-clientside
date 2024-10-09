import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const navlink = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/populer">
        <li>Populer</li>
      </NavLink>
      <NavLink to="/featured">
        <li>Feature</li>
      </NavLink>
      <NavLink to="/contact">
        <li>Contact Us</li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu></IoMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/*  */}
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">ElECAR</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            {/*  */}
            {navlink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/xGJ72QD/slrkjgblergb.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;