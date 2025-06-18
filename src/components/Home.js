import React from "react";
import "./Home.css";
import emoji from "react-easy-emoji";
import code from "../assets/code.png";
import { Fade } from "react-reveal";
import { HiDocumentDownload } from "react-icons/hi";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const Home = () => {
  return (
    <Fade top duration={1500} distance="100px">
      <div
        name="home"
        className="w-full h-screen bg-[#1d375f] text-gray-300 pt-28"
      >
        <div className="sm:flex sm:flex-row-reverse justify-center items-center w-full h-full">
          <div className="pr-4">
            <Fade right duration={2000} distance="40px">
              <img style={{ width: "400px" }} src={code} alt="coder" />
            </Fade>
          </div>
          <div className="sm:text-left text-4xl font-bold mt-9 ml-9">
            <div className=" mx-auto px-8 flex flex-col justify-center h-full">
              <p className="text-yellow-400 py-2 font-bold text-xl">
                Hi,{" "}
                <span className="text-5xl wave-emoji">{emoji("👋")}</span> my
                name is
              </p>
              <Bounce>
                <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6]">
                  Rashed Uz Zaman
                </h1>
              </Bounce>
              <Slide left>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
                  A Software Engineer🚀.
                </h2>
              </Slide>

              <p className="text-lg font-bold text-[#8892b0] py-4 max-w-[700px]">
                A Backend Engineer, passionate about building scalable
                backends with Golang / Nodejs and some other
                cool libraries and frameworks.
                {/* I'm a full-stack developer specializing in building exceptional
                websites. Currently, I'm focused on building responsive
                mern-stack web applications. */}
              </p>
              <div>
                <a
                  target={`_blank`}
                  href="https://drive.google.com/file/d/1HklYkoBAxKFonmkrbULd3xZT86cFQcJM/view?usp=sharing"
                >
                  <button className="text-lg text-white font-semibold group border-2 px-6 py-2 my-8 flex items-center rounded hover:bg-yellow-600 hover:border-yellow-600">
                    My Resume
                    <span className="group-hover:rotate-0 duration-100">
                      <HiDocumentDownload className="ml-3 " />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Home;
