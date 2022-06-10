import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import rashed from "../assets/rashed.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#062553] text-gray-300 shadow-md shadow-[#285081]">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img style={{ width: "250px" }} src={rashed} alt="logo" />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden font-bold md:flex">
        <li className="hover:text-yellow-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="hover:text-yellow-400">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center font-bold"
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#74787e]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              target={`_blank`}
              href="https://drive.google.com/file/d/1T9rIWWOBckTQ7HX-byltuRchTSjDNveg/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              target={`_blank`}
              href="https://www.linkedin.com/in/rashedevs/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              target={`_blank`}
              href="https://github.com/rashedevs"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="font-bold w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#30a189]">
            {/* <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href=""
            > */}
            <Link to="contact" smooth={true} duration={500}>
              Email
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <HiOutlineMail size={30} />
            </Link>
            {/* </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
