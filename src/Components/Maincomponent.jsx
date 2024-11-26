import React from "react";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Footer from "./Footer";
const Maincomponent = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Herosection />
      </section>
      <section>
        <About />
      </section>
      <Projects />

      <Footer />
    </div>
  );
};

export default Maincomponent;
