import React from "react";
import metalik from "../assets/metalik.png";
import carventory from "../assets/carventory.png";
import momenta from "../assets/momenta.png";
import bear from "../assets/bear.png";
import clock from "../assets/clock.png";
import convention from "../assets/convention.png";

const Project = () => {
  return (
    <div
      name="projects"
      className="w-full h-full text-gray-300 bg-[#1d375f] pt-5"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            Projects
          </p>
          <p className="py-4 font-semibold">
            <span className="text-pink-600">`// </span> Check out some of my
            recent works
            <span className="text-yellow-400">.//</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            style={{ backgroundImage: `url(${metalik})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Metalik
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                A full-stack website
              </p>
              <div className="pt-8 text-center">
                <a target={`_blank`} href="https://metalik-ab578.web.app/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/metalik-client"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Client
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/metalik-server"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${carventory})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Carventory
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                A full-stack website
              </p>
              <div className="pt-8 text-center">
                <a target={`_blank`} href="https://carventory-581a5.web.app/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/carventory-client"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Client
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/carventory-server"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${momenta})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Momenta Photography
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                A service provider website
              </p>
              <div className="pt-8 text-center">
                <a
                  target={`_blank`}
                  href="https://momenta-photography.web.app/"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/momenta-photography"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Github Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${clock})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Clock Zone
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                A react.js website
              </p>
              <div className="pt-8 text-center">
                <a
                  target={`_blank`}
                  href="https://clock-zone-by-rashed.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/clock-zone"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Github Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${bear})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bear World
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                A responsive website
              </p>
              <div className="pt-8 text-center">
                <a
                  target={`_blank`}
                  href="https://bear-world-by-rashed.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/bear-world"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Github Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${convention})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mirzapur Convention
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                A responsive website
              </p>
              <div className="pt-8 text-center">
                <a
                  target={`_blank`}
                  href="https://convention-center-rashed.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Live
                  </button>
                </a>
                <a
                  target={`_blank`}
                  href="https://github.com/rashedevs/convention-center"
                >
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Github Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
