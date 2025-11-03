import { useState } from "react";
import SocialBar from "./sections/SocialBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gray-900">
      <SocialBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
