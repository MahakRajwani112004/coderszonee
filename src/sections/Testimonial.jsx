import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import { responsive } from "../constants/courseCardDetail";
import { reviews }  from "../constants/courseCardDetail";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Testimonial = () => {
  
  return (
    <section className="px-20 py-10 max-sm:p-2">
      <div className="font-extrabold text-6xl text-center p-10 max-sm:text-4xl">What Our <span className="text-orange-600"> Students </span> Say?</div>
      <div className="text-center text-xl pb-10">Hear success stories from our Students about their exceptional experiences with us.</div>
      <div className="w-full">
        <Carousel className=" rounded-3xl"  responsive={responsive} infinite={true}>
          {reviews.map((review) => (
            <TestimonialCard
              key={review.key}
              imgUrl={review.imgUrl}
              customerName={review.customerName}
              feedback={review.feedback}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
