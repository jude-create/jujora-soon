"use client";

import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

export default function Testimonials() {
  const testimonials_color = [
    "pink",
    "#DAFFA7",
    "#B7F2FF",
    "pink",
    "#DAFFA7",
    "#B7F2FF",
  ];

  const testimonials = [
    {
      title:
        "As a bachelor with a busy schedule, Jujora is a life saver. The ordering process is simple and the delivery is always on time. I've never had a bad experience with them. Highly recommend.",
      name: "Peter",
      location: "Lagos",
    },
    {
      title:
        "What I love the most about Jujora is their quality and consistency. I've ordered multiple times and they've never disappointed. Their customer service is friendly and helpful too. I'm definitely sticking with them.",
      name: "Chinazam",
      location: "Lagos",
      color: "pink",
    },
    {
      title:
        "Jujora has completely changed the way I shop for groceries. The meat is always fresh, the produce is clean and I love how fast he delivery is. I don't stress over market runs anymore, everything comes straight to my doorstep.",
      name: "Ada",
      location: "Lagos",
      color: "#DAFFA7",
    },
    {
      title:
        "Jujora has completely changed the way I shop for groceries. The meat is always fresh, the produce is clean and I love how fast he delivery is. I don't stress over market runs anymore, everything comes straight to my doorstep.",
      name: "Tola",
      location: "Lagos",
      color: "#DAFFA7",
    },
  ];
  const itemRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <section>
      <div className="flex flex-col justify-center items-center md:w-screen">
        <h1 className="text-secondary underline mx-auto text-xl md:text-4xl font-molli my-2 mt-10">
          Testimonials
        </h1>
        <h1 className=" mx-auto text-sm md:text-2xl text-center font-molli">
          What our clients say about us!
        </h1>

        <div className=" w-[90%] md:w-full flex flex-col justify-around items-center my-20 gap-20 md:gap-0 ">
          <div className="flex flex-col md:flex-row overflow-x-auto gap-10  scrollbar-hide h-max w-full ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex h-[80%] p-3 md:p-5 md:min-w-[290px] mx-auto -z-10 gap-5 md:gap-10 items-center justify-between bg-${testimonial.color}  border  ${
                  index === activeIndex
                    ? "md:border-4 md:border-orange-400  bg-white h-[90%] "
                    : "bg-green-100"
                }`}
              >
                <div className={` flex md:${index !== activeIndex ? "hidden" : "flex"}`}>
                  <img
                    src="images/landing_images/man.webp"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="flex-1 flex-col gap-5 flex ">
                  <h1 className="text-sm md:text-md">{testimonial.title}</h1>

                  <div className="flex gap-5">
                    <h1 className="text-primary text-2xl">
                      {testimonial.name}
                    </h1>

                    <span className="flex justify-end items-end text-xs  ">
                      {testimonial.location}{" "}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" gap-6 mt-20 bg-transparent hidden md:flex">
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
              className="text-white  bg-secondary rounded-full p-2 flex justify-center items-center"
            >
              <FaLessThan />
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev < testimonials_color.length - 1 ? prev + 1 : prev
                )
              }
              className="text-white bg-secondary rounded-full p-2 flex justify-center items-center"
            >
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
