import React from "react";
import { obj } from "../assets/assets";
function NavBar() {
  return (
    <>
      <div className="flex justify-between items-end w-[90vw] mx-auto">
        <img className="h-6 mt-4" src={obj.logo} alt="" />
        <div>
          <ul className="hidden md:flex gap-12 items-end md:text-sm">
            <li className={`cursor-pointer`}>Home</li>
            <li className={`cursor-pointer`}>About</li>
            <li className={`cursor-pointer`}>Services</li>
            <li className={`cursor-pointer`}>Pricing</li>
          </ul>
        </div>
        <div>
          <button className="px-4 py-2 bg-primary text-white text-sm shadow-sm hidden sm:block ">
            Get Started
          </button>
        </div>
      </div>
      {/* icon */}
      <img
        className="sm:hidden absolute top-4.5 right-5 text-sm "
        src={obj.menu}
        alt=""
      />
    </>
  );
}

export default NavBar;
