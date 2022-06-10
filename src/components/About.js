import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Fade left duration={1500} distance="100px">
      <div
        name="about"
        className="w-full h-full bg-[#1d375f] text-gray-300 pt-12 pb-6"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
                About Me
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Rased, nice to meet you. Please take a look around.</p>
            </div>
            <div className="font-semibold">
              <p>
                ⚡ I am passionate about building excellent website that
                improves the lives of those around me.
              </p>
              <p>
                ⚡ I will develop highly interactive Front end / User Interfaces
                for your web applications.
              </p>
              <p>
                ⚡ I can build Progressive Web Applications in SPA Stacks &
                Integrate third party services such as Firebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
