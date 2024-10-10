import React, { useContext } from "react";
import { FaUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navber = () => {
  const {user,logout}=useContext(AuthContext)
  const navigate =useNavigate()

  const handleLogout=()=>{

    logout()
    .then(()=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, i want to leave!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signin')
        }
      });
    })

    .catch (error=>{
      console.log('mama caught logout hoy nai ' , error)
    })


  }




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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
               <FaUser className=" mt-3 ml-2 text-2xl"></FaUser>
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
              
             
              {user ?<li>
               <a onClick={handleLogout}>Logout</a>
              </li>:

              <li>
                <Link to ='/signup'>Signup</Link>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;