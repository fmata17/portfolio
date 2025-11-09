import { useState } from "react";
import SocialBar from "./sections/SocialBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import BackToTopButton from "./sections/BackToTopButton";

function App() {
  return (
    <div
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
                 scroll-smooth bg-bg-dark custom-scrollbar font-mono"
    >
      <SocialBar />
      <BackToTopButton />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
