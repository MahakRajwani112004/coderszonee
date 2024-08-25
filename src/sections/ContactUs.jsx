import React from "react";

const ContactUs = () => {
  return (
    <section className="relative py-28 bg-gray-900">
      <div className="relative max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <h3 className="text-cyan-400 font-semibold">Contact</h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white  sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="johndoe@example.com"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                placeholder="Your message here..."
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2">
              Learn More
            </button>
          </form>
        </div>
      </div>
      {/* <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div> */}
    </section>
  );
};

export default ContactUs;
