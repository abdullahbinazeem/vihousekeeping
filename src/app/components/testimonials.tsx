"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

type Carousel = {
  url: string;
  name: string;
  description: string;
};

const carouselItems: Carousel[] = [
  {
    url: "Wall",
    name: "Lucas Jones",
    description:
      "The level of cleanliness achieved by this house cleaning company is unmatched. From the floors to the ceiling, every inch of my home in Victoria was thoroughly cleaned. Highly satisfied!",
  },
  {
    url: "Wall",
    name: "Adam Peterson",
    description:
      "A friend recommended this cleaning service, and I'm so glad I tried it. The results were outstanding – my house was cleaned to perfection, and the staff was courteous and friendly.",
  },
  {
    url: "Wall",
    name: "Sophia McCarter",
    description:
      "Impressed with the professionalism and efficiency of this house cleaning company. The team worked quickly without compromising on quality. My Victoria home has never been so clean and organized!",
  },
  {
    url: "Wall",
    name: "William Hernandez",
    description:
      "Outstanding cleaning service! The crew was friendly, and they paid attention to the areas I highlighted. My house has never been this clean, and I'm grateful for the meticulous work they did.",
  },
  {
    url: "Wall",
    name: "Michael Weaver",
    description:
      "Hiring this house cleaning company was a game-changer for me. They tackled even the toughest stains and left my house looking brand new. Couldn't be happier with the results!",
  },
  {
    url: "Wall",
    name: "Douglas Holmes",
    description:
      "Five-star service all the way! The cleaners were prompt, efficient, and left my house in Victoria smelling fresh and looking immaculate. I highly recommend their services.",
  },
];

const Testimonials = () => {
  return (
    <Container className="mt-28 mb-40">
      <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
        Happy Customers
      </h2>
      <h1 className="text-center text-secondary text-3xl sm:text-4xl  font-bold mt-4 uppercase">
        What our customers say{" "}
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {carouselItems.map((item, i) => (
          <SwiperSlide className="py-10" key={i}>
            <div className="border text-center px-7 pt-16 pb-6 rounded-md relative">
              <div className="absolute w-20 h-20 rounded-full bg-gray-300 border-2 -top-10 left-0 right-0 m-auto"></div>
              <h3 className="text-[#292929] text-lg sm:text-xl font-semibold mb-1 sm:mb-4">
                {item.name}
              </h3>
              <p className="text-sm text-pretty">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
