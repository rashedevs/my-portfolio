import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center pt-8 p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/e10b563d-d3cc-4780-b147-c04e547238be"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300">
            Wanna Reach Me?
          </p>
          <p className="py-4 text-gray-300 font-semibold">
            <span className="text-pink-600">`// </span> Shoot the send button
            now
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
        <button className="text-white border-2 font-semibold hover:bg-yellow-600 hover:border-yellow-600 px-4 py-2 my-8 mx-auto flex items-center">
          Send Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
