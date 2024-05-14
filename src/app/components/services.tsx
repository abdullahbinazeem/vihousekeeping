import React from "react";
import Container from "./container";

import Image from "next/image";

const services = [
  {
    title: "Residential",
    description:
      "Elevating homes with immaculate cleanliness, our service brings joy to every doorstep.",
    icon: "Residential",
  },
  {
    title: "Airbnb",
    description:
      "From turnover to tidiness, our Airbnb cleaning service ensures each guest enjoys a pristine stay, every time.",
    icon: "Airbnb",
  },
  {
    title: "Commercial",
    description:
      "Streamlining productivity with spotless spaces, our commercial cleaning service sets the standard for professionalism and cleanliness in every workplace.",
    icon: "Commercial",
  },
];

const Services = () => {
  return (
    <div id="services">
      <Container className="mt-28 mb-40">
        <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
          OUR SERVICES
        </h2>
        <h1 className="text-center text-secondary text-3xl sm:text-4xl font-bold mt-4">
          WHAT WE ARE OFFERING
        </h1>
        <div className="mt-24 grid xl:mx-20 lg:grid-cols-3 sm:grid-cols-2 gap-6 gap-y-16 sm:gap-y-20">
          {services.map((item, index) => (
            <div
              className="border text-center px-6 pt-16 pb-6 rounded-md relative"
              key={index}
            >
              <h3 className="text-primary text-lg sm:text-xl font-medium mb-1 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-sm">{item.description}</p>
              <div className="absolute w-24 h-24 rounded-full bg-white border -top-14 left-0 right-0 m-auto">
                <Image
                  src={`/assets/icons/${item.icon}.svg`}
                  alt={item.icon}
                  fill
                  className="p-6"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
