import React from "react";
import { courseCardDetail } from "../constants/courseCardDetail";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

const PopularCourse = () => {
  return (
    <section className=" px-20 pt-6 pb-10 max-sm:p-2">
      <h1
        className="font-extrabold text-6xl text-center pt-20 max-sm:text-3xl max-sm:p-2 max-md:text-6xl"
      >
        Popular <span className="text-orange-600"> Courses </span>
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-2 max-lg:flex-col ">
        {courseCardDetail.map((detail) => (
          <CourseCard
            id={detail.id}
            key={detail.key}
            courseBanner={detail.courseBanner}
            courseTitle={detail.courseTitle}
            author={detail.author}
          />
        ))}
      </div>
      <div className="p-10 flex justify-center items-center max-sm:p-6">
        <Link
          to="/courses"
          className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2"
        >
          Browse More Courses
        </Link>
        
      </div>
    </section>
  );
};

export default PopularCourse;
