import { MessageCircle } from "lucide-react";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-10">
      <div className="flex gap-4 items-center">
        <Image src="/assets/logo.png" alt="" width={50} height={50} />
        <p className="lg:text-lg font-semibold">Vi Housekeeping</p>
      </div>
      <div className="flex lg:text-sm text-xs gap-6 lg:gap-14 items-center">
        <a className="md:block hidden cursor-pointer">
          <p className="text-black font-medium uppercase">Home</p>
        </a>
        <a className="md:block hidden cursor-pointer">
          <p className="text-gray-500 font-medium uppercase">About Us</p>
        </a>
        <a className="md:block hidden cursor-pointer" href="#services">
          <p className="text-gray-500 font-medium uppercase">Serivces</p>
        </a>
        <a className="md:block hidden cursor-pointer">
          <p className="text-gray-500 uppercase">Contact</p>
        </a>
        <a className="cursor-pointer bg-primary text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full flex gap-2 items-center">
          <MessageCircle />
          <p className="text-sm sm:text-base">Message Now</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
