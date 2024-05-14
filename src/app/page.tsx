import About from "./components/about";
import Hero from "./components/hero";
import Services from "./components/services";

import Container from "./components/container";
import Image from "next/image";
import Portfolio from "./components/portfolio";
import Booking from "./components/book";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full h-32 bg-primary"></div>
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Booking />
      <Footer />
    </>
  );
}
