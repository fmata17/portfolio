import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "Fredy.",
    "a programmer.",
    "a developer.",
    "a problem solver.",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Speed configs
  const typingSpeed = isDeleting ? 60 : 120;
  const pauseAfterTyping = 1500;
  const pauseAfterDeleting = 600;

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
      className="h-screen snap-start bg-bg-dark text-fg font-mono flex flex-col justify-center items-center text-center px-4"
    >
      {/* Avatar */}
      <img
        src="https://avatars.githubusercontent.com/u/157691349?s=400&u=45ed6b2fda8f36353ee2549b203f882ec30ed1bb&v=4"
        alt="Fredy's avatar"
        className="w-40 h-40 rounded-full border-2 border-accent-primary shadow-lg mb-4"
      />

      {/* Professional Title */}
      <p className="text-sm sm:text-base text-fg-muted mb-1 tracking-wide">
        Aspiring AI Engineer
      </p>

      {/* Typing Animation */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">
        Hi, I am <span className="text-accent-primary">{displayedText}</span>
        <span className="border-r-2 border-accent-primary ml-1 animate-pulse" />
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-fg-muted mb-6">
        Welcome to my portfolio.
      </p>

      {/* Navigation Buttons */}
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
      </div>
    </section>
  );
}
