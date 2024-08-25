import React from "react";

import Testimonial from "../sections/Testimonial";
import PopularCourse from "../sections/PopularCourse";
import Newsletter from "../sections/Newsletter";
import WhyUs from "../sections/WhyUs";
import Faqs from "../sections/Faqs";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <main className="scroll-smooth ">
      <Hero />
      <WhyUs />
      <PopularCourse />
      <Testimonial />
      <Newsletter />
      <Faqs />
    </main>
  );
};

export default Home;
