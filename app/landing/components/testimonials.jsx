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
      <div className="flex flex-col items-center w-screen">
        <h1 className="text-secondary underline mx-auto text-3xl md:text-6xl font-molli my-2 mt-10">
          Testimonials
        </h1>
        <h1 className=" mx-auto text-2xl md:text-3xl text-center font-molli">
          What our clients say about us!
        </h1>

        <div className="w-full flex flex-col justify-around items-center my-20 gap-20 md:gap-0 ">
          <div className="flex flex-col md:flex-row overflow-x-auto gap-10  scrollbar-hide h-max w-full ">
            {testimonials_color.map((e, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex h-[80%] min-w-[400px] md:min-w-[500px] mx-auto -z-10 gap-10 items-center justify-between bg-${e} p-10 border  ${
                  index === activeIndex
                    ? "border-4 border-orange-400  bg-white h-[90%] "
                    : "bg-green-100"
                }`}
              >
                <div className="">
                  <img
                    src="images/landing_images/man.webp"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="flex-1 flex-col gap-5 flex ">
                  <h1 className="text-sm">
                    What I love the most about Jujora is their quality and
                    consistency. I've ordered multiple times and they've never
                    disappointed. Their customer service is friendly and helpful
                    too. I'm definitely sticking with them.
                  </h1>

                  <div className="flex gap-5">
                    <h1 className="text-primary text-2xl">Chinazam</h1>

                    <span className="flex justify-end items-end text-xs  ">
                      Lagos
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-20 bg-transparent">
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
