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
      className="min-h-screen snap-start bg-bg-dark text-fg font-mono flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 xl:px-32 overflow-hidden"
    >
      {/* Background IDE */}
      {/* should be responsive in both size and location */}
      <motion.div
        className="absolute top-[39vh] left-[5vw] sm:top-[39vh] sm:left-[5vw] md:top-[39vh] md:left-[5vw] lg:top-[32vh] lg:left-[5vw] xl:top-[34vh] xl:left-[6vw]
                   w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw]
                   text-[2vw] sm:text-[2vw] md:text-[2vw] xl:text-[1.6vw]
                   font-mono text-white opacity-20 hover:opacity-30 transition duration-300 z-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="bg-bg rounded-t-md border border-accent-primary border-t-2 px-3 py-2 flex items-center gap-2 text-fg-muted
                        text-[1.8vw] sm:text-[1.8vw] md:text-[1.8vw] xl:text-[1.6vw]"
        >
          <span className="w-[1vw] h-[1vw] bg-accent-error rounded-full" />
          <span className="w-[1vw] h-[1vw] bg-accent-warning rounded-full" />
          <span className="w-[1vw] h-[1vw] bg-accent-success rounded-full" />
          <span className="ml-4">about.py</span>
        </div>
        <div className="bg-bg-dark rounded-b-md border border-accent-primary border-b-2 p-2 sm:p-3 md:p-4 shadow-lg">
          <pre className="whitespace-pre-wrap leading-[1.6] text-left">
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
      <div className="relative z-10 flex flex-col items-center max-w-screen-lg w-full">
        <img
          src="https://avatars.githubusercontent.com/u/157691349?s=400&u=45ed6b2fda8f36353ee2549b203f882ec30ed1bb&v=4"
          alt="Fredy's avatar"
          className="w-[30vw] h-[30vw] sm:w-[30vw] sm:h-[30vw] md:w-[20vw] md:h-[20vw] lg:w-[16vw] lg:h-[16vw] xl:w-[16vw] xl:h-[16vw] rounded-full border-2 border-accent-primary shadow-lg mb-4"
        />

        <p
          className="text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.6vw]
                     text-fg-muted mb-1 tracking-wide"
        >
          Future AI Engineer
        </p>

        <h1 className="text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[4vw] xl:text-[3vw] mb-2 pt-2">
          Hi, I am
        </h1>

        <p
          className="text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[4vw] xl:text-[3vw]
                     text-accent-primary flex items-center 
                     min-h-[3rem] sm:min-h-[4rem] md:min-h-[4rem] lg:min-h-[5rem] xl:min-h-[5rem]"
        >
          {displayedText}
          <span className="border-r-2 border-accent-primary ml-1 animate-pulse" />
        </p>

        <p className="text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.6vw] text-fg-muted mb-10 pt-10">
          Welcome to my portfolio.
        </p>

        <div
          className="mt-4 lg:mb-4 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3
                     w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-full xl:max-w-full"
        >
          {[
            { href: "#about", label: "About Me" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact Me", accent: true },
          ].map(({ href, label, accent }) => (
            <a
              key={label}
              href={href}
              className={`px-4 py-2 text-center rounded border transition w-full shadow-sm
                          text-[2.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.6vw] ${
                            accent
                              ? "border-accent-secondary text-accent-secondary hover:bg-accent-secondary hover:text-bg"
                              : "border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg"
                          }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
