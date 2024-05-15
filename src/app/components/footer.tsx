import {
  Facebook,
  FacebookIcon,
  Headset,
  Instagram,
  Mail,
  MapPinIcon,
  Phone,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
        <div className="xl:flex gap-32  md:justify-between">
          <div className="mb-16 xl:mb-0 basis-1/3">
            <a href="" className="flex items-center">
              <img
                src="/assets/logo.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Vi Housekeeping
              </h1>
            </a>
            <p className="mt-6  text-gray-500 dark:text-gray-400 font-medium ">
              The Most Affordable, High-End House and Exterior Cleaning Provider
              In Vancouver.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-4">
                <li>
                  <a href="#services" className="hover:underline">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Airbnb
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Commercial
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100093047397078"
                    target="_blank"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6   text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 flex flex-col gap-4 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:underline flex gap-2 items-center"
                  >
                    <Headset /> 604-764 6932
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline flex gap-2 items-center whitespace-nowrap"
                  >
                    <Mail className="shrink-0" />
                    vihousekeeping@email.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline flex gap-2 items-center"
                  >
                    <MapPinIcon /> Vancouver, BC, Canada
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 ViHousekeeping™. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=100093047397078"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
