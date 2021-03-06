import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <Fade bottom duration={1500} distance="100px">
      <div
        name="contact"
        className="w-full h-full bg-[#1d375f] flex justify-center items-center mt-9 p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/e10b563d-d3cc-4780-b147-c04e547238be"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300">
              Reach Out to Me!
            </p>
            <p className="py-4 text-gray-300 font-semibold">
              <span className="text-pink-600">`// </span>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
              <span className="text-yellow-400">.//</span>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-4 rounded"
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <input
            className="my-4 p-4 bg-[#ccd6f6] rounded"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-4 rounded"
            name="message"
            rows="7"
            placeholder="Message"
          ></textarea>
          <button className="text-lg text-white border-2 font-semibold hover:bg-yellow-600 hover:border-yellow-600 px-6 py-2 my-8 mx-auto flex items-center rounded">
            Send Now
            <span className="group-hover:rotate-0 duration-100">
              <HiOutlineMail className="ml-3" />
            </span>
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;
