import React from "react";

import Container from "./container";
import Image from "next/image";

const Booking = () => {
  return (
    <Container className="bg-[#F4F6FB] py-24 relative">
      <div className="relative z-[1]">
        <h1 className="text-[#334047] text-4xl sm:leading-[64px] sm:text-[54px] font-bold tracking-tight">
          Are You Ready To <br className="md:block hidden" /> Work With Us Now?
        </h1>
        <p className="mt-8 sm:text-lg">
          What do you think after seeing the good{" "}
          <br className="md:block hidden" /> response from our previous
          customers
        </p>
        <a className="inline-block mt-8 cursor-pointer">
          <div className="items-center bg-[#FFBA18]  text-[#404040] py-5 px-12 rounded-3xl flex gap-2">
            <p className="text-sm sm:text-base font-semibold">Message Now!</p>
          </div>
        </a>
      </div>
      <div className="absolute  aspect-video z-[0] h-[100%] right-0 top-0">
        <Image
          src="/assets/Flow.svg"
          alt="Water Flowing"
          fill
          objectFit="cover"
        />
      </div>
    </Container>
  );
};

export default Booking;
