import hero from "../assets/heroo.svg";

export default () => {
  return (
    <div className="relative">
      {/* gradient background */}
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-4xl text-gray-800 font-bold sm:text-6xl">
                Master <span className="text-orange-600"> Digital Skills </span>{" "}
                With Ease!
              </h1>
              <p>
                Empower your learning journey with expert-led and personalized
                content. Lorem ipsum dolor sit amet.
              </p>
              {/* buttons */}
              <div className="flex items-center gap-x-3 sm:text-sm max-sm:flex-col">
              <button
                  className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
                >
                  Get Started
                </button>
                <button
                  className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 hidden lg:block">
              <img src={hero} className="max-w-xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
