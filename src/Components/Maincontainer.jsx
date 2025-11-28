import React from "react";
import Services from "./Services";
import Resume from "./Resume";
import Contact from "./Contact";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
const Maincontainer = () => {
  return (
    <div className="ml-[15%] h-screen overflow-y-auto main-scroll">
      <Hero />
      <About />
      <Resume />
      <Contact />
      <Skills />
      <Services />
    </div>
  );
};

export default Maincontainer;
