import React from "react";

const About = () => {
  return (
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
          <div>
            <p className="font-semibold">
              I am passionate about building excellent website that improves the
              lives of those around me. I specialize in creating website for
              clients ranging from individuals and small-businesses all the way
              to large enterprise corporations. What would you do if you had a
              reliable web developer available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
