import React from "react";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo.png";

const Blogs = () => {
  return (
    <div name="blogs" className="w-full h-full text-gray-300 bg-[#1d375f] pt-5">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-9">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400 ">
            Blogs
          </p>
          <p className="py-4 font-semibold">
            <span className="text-pink-600">`// </span> Some blogs I have
            written
            <span className="text-yellow-400">.//</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${javascript})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coming Soon
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                Learn Javascript!
              </p>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Read
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${react})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coming Soon
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                Learn React!
              </p>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Read
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mongo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coming Soon
              </span>
              <p className=" font-semibold text-yellow-400 tracking-wider">
                Learn MongoDB!
              </p>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-pink-600 hover:text-white">
                    Read
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

export default Blogs;
