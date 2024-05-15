import React from "react";
import Container from "./container";
import Navbar from "./navbar";
import { MessageSquareQuote } from "lucide-react";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute z-[-1] top-10 right-[-100px] h-[250px] w-[250px] rounded-full blur-[130px] bg-primary"></div>
      <div className="absolute z-[-1] bottom-10 left-[-100px] h-[250px] w-[250px] rounded-full blur-[150px] bg-primary"></div>
      <Container>
        <Navbar />
        <div className="h-[85vh]  flex flex-col lg:flex-row gap-12">
          <div className="lg:mt-36 mt-14 md:mt-24 lg:flex-1">
            <h2 className="sm:text-lg uppercase">High Professional Cleaning</h2>
            <h1 className="uppercase text-4xl sm:text-5xl font-bold leading-[110%] text-secondary">
              <span className="text-primary">Easy To Clean</span> <br /> Houses
            </h1>
            <p className="mt-6 sm:text-lg">
              The Most Affordable, High-End House and Exterior Cleaning
              <br className="xl:block hidden" /> Provider In Vancouver.
            </p>
            <a className="inline-block mt-6 cursor-pointer">
              <div className="items-center bg-primary text-white py-4 px-8 rounded-full flex gap-2">
                <MessageSquareQuote />
                <p className="text-sm sm:text-base">Get a Quote Now!</p>
              </div>
            </a>
          </div>
          <div className="relative flex-1 z-[-2]">
            <Image
              src="/assets/HeroCleaningLady.jpg"
              alt="Clean House"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
