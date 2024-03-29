import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import code from "../assets/code.png";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#1d375f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400 py-2 font-bold text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Rased Uz Zaman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          A Javascript Developer.
        </h2>
        <p className="font-semibold text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building exceptional
          websites. Currently, I'm focused on building responsive mern-stack web
          applications.
        </p>
        <div>
          <a
            target={`_blank`}
            href="https://drive.google.com/file/d/1HklYkoBAxKFonmkrbULd3xZT86cFQcJM/view?usp=sharing"
          >
            <button className="text-white font-semibold group border-2 px-6 py-3 my-8 flex items-center rounded hover:bg-yellow-600 hover:border-yellow-600">
              My Resume
              <span className="group-hover:rotate-45 duration-100">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
