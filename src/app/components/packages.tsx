import React from "react";
import Container from "./container";

const Packages = () => {
  return (
    <Container className="mb-40">
      <h1 className="text-secondary text-3xl md:text-4xl lg:text-5xl font-semibold">
        Choose your best <br className="hidden md:block" /> serivce package
      </h1>
      <div className="bg-[#FAFAFA] flex flex-col gap-y-4 md:gap-y-6 p-7 rounded-2xl mt-12 max-w-[500px] m-auto">
        <div className="flex gap-2 items-end">
          <p className="text-primary text-3xl md:text-4xl lg:text-5xl font-semibold">
            $30
          </p>
          <p className="text-lg text-secondary">/hour</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-secondary lg:text-2xl">
            Basic
          </h1>
          <p className="text-lg font-light text-secondary   mt-2">
            Everything you need for your house, commercial building, or Airbnb
          </p>
        </div>
        <div>
          <ul className="lg:text-xl text-lg font-light flex flex-col gap-3 md:gap-4">
            <li className="relative after:content-['•'] after:text-5xl pl-8  after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-0 after:text-primary">
              Bedroom Cleaning
            </li>
            <li className="relative after:content-['•'] after:text-5xl pl-8  after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-0 after:text-primary">
              Kitchen Cleaning
            </li>
            <li className="relative after:content-['•'] after:text-5xl pl-8  after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-0 after:text-primary">
              Window Cleaning
            </li>
            <li className="relative after:content-['•'] after:text-5xl pl-8  after:absolute after:top-[50%] after:translate-y-[-50%]  after:left-0 after:text-primary">
              Livingroom Cleaning
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Packages;
