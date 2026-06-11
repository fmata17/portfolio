import { useState } from "react";
import ToogleThemeButton from "./components/ToogleThemeButton";
import useTheme from "./hooks/useTheme";

import SocialBar from "./components/SocialBar";
import BackToTopButton from "./components/BackToTopButton";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
                 scroll-smooth bg-bg-dark hide-scrollbar font-mono custom-scrollbar"
    >
      <SocialBar />
      <BackToTopButton />
      <ToogleThemeButton isDark={isDark} onToggle={toggleTheme} />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
