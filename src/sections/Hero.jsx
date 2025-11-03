import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "Fredy.",
    "a full-stack developer.",
    "a ML enthusiast.",
    "a builder.",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation configuration
  const typingSpeed = isDeleting ? 60 : 100;
  const pauseAfterTyping = 1250;
  const pauseAfterDeleting = 500;

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }, pauseAfterDeleting);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.slice(0, displayedText.length - 1)
          : currentWord.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="h-screen snap-start bg-bg-dark text-fg font-mono flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Background about.py window (left half) */}
      <motion.div
        className="absolute left-[1rem] top-[14rem] w-full max-w-3/4 text-xs sm:text-sm text-left font-mono text-white opacity-20 hover:opacity-30 transition duration-300 z-0 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* File tab bar */}
        <div className="bg-bg rounded-t-md border border-accent-primary border-b-0 px-4 py-2 flex items-center gap-2 text-fg-muted text-xs sm:text-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          <span className="w-2 h-2 bg-yellow-500 rounded-full" />
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="ml-4">about.py</span>
        </div>

        {/* Code block */}
        <div className="bg-bg-dark rounded-b-md border border-accent-primary p-4 sm:p-6 shadow-lg">
          <pre className="whitespace-pre-wrap leading-[1.8]">
            <code>
              <span className="text-accent-secondary">class</span>{" "}
              <span className="text-accent-primary">Fredy</span>
              <span className="text-accent-secondary">:</span>
              {"\n  "}
              <span className="text-accent-peach">def</span>{" "}
              <span className="text-accent-info">__init__</span>
              <span className="text-fg">(self):</span>
              {"\n    "}
              <span className="text-accent-info">self.degree_progress</span>
              {" = "}
              <span className="text-accent-peach">
                "Associate’s → Bachelor’s in Computer Science"
              </span>
              {"\n    "}
              <span className="text-accent-info">self.goal</span>
              {" = "}
              <span className="text-accent-peach">
                "Pursue a Master’s in Machine Learning or AI"
              </span>
              {"\n    "}
              <span className="text-accent-info">self.hobbies</span>
              {" = "}
              <span className="text-accent-peach">
                ["Drums", "Fishing", "Studying ML"]
              </span>
              {"\n    "}
              <span className="text-accent-info">self.motto</span>
              {" = "}
              <span className="text-accent-success">
                "Mindset + Ambition = Success"
              </span>
            </code>
          </pre>
        </div>
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/157691349?s=400&u=45ed6b2fda8f36353ee2549b203f882ec30ed1bb&v=4"
          alt="Fredy's avatar"
          className="w-40 h-40 rounded-full border-2 border-accent-primary shadow-lg mb-4"
        />

        {/* Title */}
        <p className="text-sm sm:text-base text-fg-muted mb-1 tracking-wide">
          Future AI Engineer
        </p>

        {/* Typing animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 pt-2">
          Hi, I am{" "}
        </h1>
        <p className="text-4xl sm:text-5xl md:text-6xl text-accent-primary flex items-center gap-1 h-[2.5rem] ">
          {displayedText}
          <span className="border-r-2 border-accent-primary ml-1 animate-pulse" />
        </p>

        {/* white space for visual alignment*/}
        <div className="h-6 sm:h-6 md:h-6" />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-fg-muted mb-6 pt-14">
          Welcome to my portfolio.
        </p>

        {/* Navigation buttons */}
        <div className="mt-4 flex gap-4 flex-wrap justify-center">
          <a
            href="#about"
            className="px-4 py-2 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg transition rounded"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="px-4 py-2 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg transition rounded"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-4 py-2 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg transition rounded"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-accent-secondary text-accent-secondary hover:bg-accent-secondary hover:text-bg transition rounded"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}