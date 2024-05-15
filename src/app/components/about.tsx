import React from "react";
import Container from "./container";
import { Trophy } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div id="aboutus">
      <Container>
        <div className="my-40 lg:flex items-center gap-12">
          <div className="flex-1">
            <div>
              <h2 className="text-primary text-medium text-lg tracking-wider uppercase">
                About Us
              </h2>
              <h1 className="text-secondary text-3xl sm:text-4xl font-bold mt-4">
                QUICKLY AND EASY TO CLEAN <br className="hidden sm:block" />{" "}
                YOUR OFFICE AND HOUSE
              </h1>
              <p className="mt-4 sm:text-lg">
                The Most Affordable, HighEnd House and Car Cleaning Provider In
                Vancouver.
              </p>
            </div>
            <div className="mt-20">
              <div className="flex gap-4 items-center">
                <h3 className=" sm:text-lg text-black font-semibold">
                  AWARD WINNING COMPANY
                </h3>
                <Trophy className="text-primary" />
              </div>
              <p className="mt-4 sm:text-lg">
                Step into the realm of award-winning cleanliness. Our
                exceptional service and commitment to excellence ensure your
                space gleams with perfection
              </p>
              <a className="inline-block mt-8 cursor-pointer" href="#services">
                <div className=" bg-primary text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full flex gap-2">
                  <p className="text-sm sm:text-base">Our Services</p>
                </div>
              </a>
            </div>
          </div>
          <div className="relative flex-1 mt-12 lg:mt-0 h-[400px] bg-primary rounded-md">
            <Image
              alt="About"
              src="https://static.wixstatic.com/media/8863e0_841b44300a6f4db29135bff0e7b9c909~mv2.jpg/v1/fill/w_640,h_596,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8863e0_841b44300a6f4db29135bff0e7b9c909~mv2.jpg"
              fill
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
