import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import SocialBar from "./sections/SocialBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import BackToTopButton from "./sections/BackToTopButton";

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light",
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
      <button
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        className="fixed top-4 left-4 z-50 w-14 h-7 rounded-full border border-accent-primary bg-bg-dark
                   flex items-center px-1 cursor-pointer transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-dark"
      >
        <FaMoon
          aria-hidden="true"
          className="absolute left-1.5 w-3 h-3 text-accent-secondary opacity-70"
        />
        <FaSun
          aria-hidden="true"
          className="absolute right-1.5 w-3 h-3 text-accent-warning opacity-70"
        />
        <span
          className={`relative z-10 w-5 h-5 rounded-full bg-accent-primary shadow transition-transform duration-300
                      ${isDark ? "translate-x-0" : "translate-x-7"}`}
        />
      </button>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
