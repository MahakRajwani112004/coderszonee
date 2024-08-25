import React from "react";
import image from "../assets/course2.png";
import { stats } from "../constants/courseCardDetail";

const AboutUs = () => {

  return (
    <section className="w-full flex flex-col py-20 px-10 bg-gray-100 rounded-3xl max-sm:p-0">
      {/* Upper content */}
      <div className="flex justify-center items-center max-lg:flex-col">
        {/* Image */}
        <div className="">
          <img
            src={image}
            alt="image"
            width={700}
            height={700}
            className="object-cover rounded-2xl relative z-0"
          />
        </div>
        {/* Content */}
        <div className=" w-[80%] m-10 max-sm:m-4 sm:w-[80%]">
          <h1 className="font-extrabold text-center text-6xl m-10 max-sm:text-4xl max-sm:m-0">
            About <span className="text-orange-600">Us</span>
          </h1>
          <p className=" pt-4 text-center text-xl max-sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            alias recusandae facere, a iste eos doloribus, nam, unde ad
            reiciendis enim cupiditate hic! Eius, quibusdam molestias nisi
            beatae quasi harum, quia porro ab delectus ad vel nemo itaque
            voluptas alias.
          </p>
        </div>
      </div>
      {/* Lower content */}
      <div className="flex justify-center items-center max-lg:flex-wrap">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex justify-center items-center bg-white
            flex-col rounded-2xl mt-10 m-2 px-6 py-2 lg:px-8 lg:py-4
            "
          >
            <h1 className="font-extrabold text-4xl text-orange-600 max-sm:text-3xl">
              {stat.title}
            </h1>
            <h2 className="text-lg lg:text-xl">{stat.subtitle}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
