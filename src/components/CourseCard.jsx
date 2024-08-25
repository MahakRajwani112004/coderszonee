import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseBanner, courseTitle, author }) => {
  return (
    <div className="m-5">
      <div className="group mx-2 mt-10 grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
        {/* Image  */}
        <div className="col-span-2 text-left text-gray-600 hover:text-gray-700">
          <div className="group relative h-full w-full overflow-hidden">
            <img
              src={courseBanner}
              alt=""
              className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
            />
          </div>
        </div>

        {/* Course Details */}
        <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left">
          <p className="mt-3 overflow-hidden text-2xl font-semibold">
            {courseTitle}
          </p>
          <p className="overflow-hidden text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <p
            className="text-sm font-semibold text-gray-500 hover:text-gray-700"
          >
            {author}
          </p>

          {/* Additional Info and Enroll Button */}
          <div className="flex flex-col text-gray-700">
            <div className="flex h-fit space-x-2 text-sm font-medium">
              <div className="rounded-full bg-green-100 px-2 py-0.5 text-green-700">
                Advance level
              </div>
              <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                160 Enrolled
              </div>
            </div>
            <Link
              to="/product"
              className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-bold rounded-lg text-sm px-6 py-2.5 text-center m-4 max-lg:w-[70%] w-1/3"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
