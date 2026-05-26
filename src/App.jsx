import { useState } from "react";
import SocialBar from "./sections/SocialBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import BackToTopButton from "./sections/BackToTopButton";

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  const toggleTheme = () => {
    setIsDark((d) => {
      const next = !d;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
                 scroll-smooth bg-bg-dark custom-scrollbar font-mono"
    >
      <SocialBar />
      <BackToTopButton />
      <Hero isDark={isDark} toggleTheme={toggleTheme} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
