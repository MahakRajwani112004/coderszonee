import React from "react";

export const TestimonialCard = ({ imgUrl, customerName, feedback }) => {
  return (
    <div
      className="flex justify-center items-center flex-col w-full bg-white p-10"
    >
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full object-cover w-[100px] h-[100px]"
      />
      <h2 className="font-bold text-2xl">{customerName}</h2>
      <p className="mt-4 w-64 font-medium text-base text-center">{feedback}</p>
    </div>
  );
};

// export default TestimonialCard;
