import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h3 className="text-2xl font-bold text-pink-500">Rased Uz Zaman</h3>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* mobile */}
      <ul
        className={
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Projects</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>
      {/* social */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
