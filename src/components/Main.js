import React from "react";
import Hero from "../components/main/Hero";
import Highlights from "../components/main/Highlights";
import Testimonial from "../components/main/Testimonial";
import About from "../components/main/About";

const Main = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonial />
      <About />
    </main>
  );
};

export default Main;
