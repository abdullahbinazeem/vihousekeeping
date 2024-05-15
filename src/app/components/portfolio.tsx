"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Medal, Rocket, Sparkles } from "lucide-react";

type Carousel = {
  url: string;
  pic: string;
};

const carouselItems: Carousel[] = [
  {
    url: "Bathroom",
    pic: "1",
  },
  {
    url: "Living Room",
    pic: "2",
  },
  {
    url: "Bedroom",
    pic: "3",
  },
  {
    url: "Floor",
    pic: "4",
  },
  {
    url: "Toilet",
    pic: "5",
  },
  {
    url: "Shower",
    pic: "6",
  },
  {
    url: "Balcony",
    pic: "7",
  },
  {
    url: "Dishwasher",
    pic: "8",
  },
  {
    url: "FLoor",
    pic: "9",
  },
];

const Portfolio = () => {
  return (
    <Container className="mt-28 mb-40">
      <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
        OUR PORTFOLIO
      </h2>
      <h1 className="text-center text-secondary text-3xl sm:text-4xl  font-bold mt-4">
        RECENT WORK SHOWCASE{" "}
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
          <SwiperSlide key={i}>
            <div className="relative aspect-[7/5] w-full bg-[#FFC48D] mb-12">
              <Image
                fill
                alt={item.url}
                src={`/assets/works/${item.pic}.jpg`}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="grid md:max-w-none max-w-[500px] md:px-0 px-12 sm:px-20 m-auto divide-y-2 md:divide-y-0 md:grid-cols-3  bg-primary text-white py-4 rounded-md mt-20 md:divide-x-2">
          <div className="flex gap-4 items-center justify-center py-8">
            <Sparkles className="lg:w-14 w-10 h-10 lg:h-14" strokeWidth={1.3} />
            <div>
              <h2 className="lg:text-3xl text-2xl font-bold">350+</h2>
              <p className="lg:text-lg font-medium">Happy Customers</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center py-8">
            <Medal className="lg:w-14 w-10 h-10 lg:h-14" strokeWidth={1.3} />
            <div>
              <h2 className="lg:text-3xl text-2xl font-bold">26</h2>
              <p className="lg:text-lg font-medium">Award Winning</p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center py-8">
            <Rocket className="lg:w-14 w-10 h-10 lg:h-14" strokeWidth={1.3} />
            <div>
              <h2 className="lg:text-3xl text-2xl font-bold">750+</h2>
              <p className="lg:text-lg font-medium">Houses Completed</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
