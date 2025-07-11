import { NavLink } from "react-router-dom";
import './Navber.css'

const Navber = () => {

    const links = <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
      <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
    </>

  return (
    <div className="navbar container mx-auto pt-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">GadgetNest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="flex gap-10 navbar-end">
        <div className="bg-gray-300 p-3 rounded-full"><i className="fa-solid fa-cart-shopping text-2xl cursor-pointer hover:text-[#9538E2]"></i> <span id="cart-count" className="hidden bg-[#9538E2] text-white p-1 absolute top-4 font-semibold rounded-full">0</span></div>
        <div className="bg-gray-300 p-3 rounded-full"><i className="fa-regular fa-heart text-2xl cursor-pointer hover:text-[#9538E2]"></i><span id="wishlist-count" className="hidden bg-[#9538E2] text-white p-1 absolute top-4 font-semibold rounded-full">0</span></div>
      </div>
    </div>
  );
};

export default Navber;
