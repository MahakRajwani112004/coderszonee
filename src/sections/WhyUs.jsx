import React from "react";

const WhyUs = () => {
  return (
    <div className="w-screen bg-white sm:px-4 xl:px-10">
      <div className="z-10 mx-auto w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-16">
        <div className="mb-12">
          <div className="lg:flex-no-wrap -mx-3 flex flex-row flex-wrap items-end">
            <div className="mr-auto w-full flex-grow px-3">
              <h3 className="text-3xl font-bold text-black sm:text-6xl">
                Why <span className="text-orange-600">Choose Us</span>...
              </h3>
            </div>
          </div>
        </div>

        <div className="-mx-2 flex flex-wrap font-bold">
          <div className="mb-4 w-full px-2 lg:w-3/5">
            <div className="h-full w-full bg-blue-900 p-6">
              <div className="z-10 flex flex-col justify-between">
                <h1 className="text-4xl text-white sm:text-8xl">#1</h1>
                <h6 className="mt-12 text-xl text-white sm:text-3xl">
                  Edtech Platform in Greater Delhi Area.
                </h6>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 lg:w-2/5">
            <div className="h-full w-full bg-yellow-400 p-6">
              <div className="z-10 flex flex-col justify-between">
                <h1 className="text-4xl text-blue-900 sm:text-8xl">ISO</h1>
                <h6 className="mt-12 text-xl text-blue-900 sm:text-3xl">
                  Approved by ISO and 5 other organizations.
                </h6>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 lg:w-1/3">
            <div className="h-full w-full bg-indigo-600 p-6">
              <div
                className="absolute z-0 opacity-0 hover:opacity-50"
                style={{ mixBlendMode: "multiply" }}
              ></div>
              <div className="z-10 flex flex-col justify-between">
                <h1 className="text-4xl text-white sm:text-8xl">20+</h1>
                <h6 className="mt-12 text-xl text-white sm:text-3xl">Awards & honours</h6>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 lg:w-1/3">
            <div className="h-full w-full bg-blue-400 p-6">
              <div className="z-10 flex flex-col justify-between">
                <h1 className="text-4xl text-white sm:text-8xl">2k</h1>
                <h6 className="mt-12 text-xl text-white sm:text-3xl">
                  New Users Every Month
                </h6>
              </div>
            </div>
          </div>

          <div className="mb-4 w-full px-2 lg:w-1/3">
            <div className="h-full w-full bg-red-200 p-6">
              <div className="z-10 flex flex-col justify-between">
                <h1 className="text-4xl text-blue-900 sm:text-8xl">24hr</h1>
                <h6 className="mt-12 text-xl text-blue-900 sm:text-3xl">
                  Live Classes
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
