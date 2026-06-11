import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-scrollbar");
    const hero = document.getElementById("hero");

    if (!scrollContainer || !hero) return;

    const checkVisibility = () => {
      const scrollContainer = document.querySelector(".custom-scrollbar");
      const scrollTop = scrollContainer.scrollTop;

      setIsVisible(scrollTop > 200);
    };

    scrollContainer.addEventListener("scroll", checkVisibility);
    checkVisibility(); // run once on mount

    return () => {
      scrollContainer.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const scrollToTopAndCleanURL = () => {
    const scrollContainer = document.querySelector(".custom-scrollbar");
    scrollContainer?.scrollTo({ top: 0, behavior: "smooth" });

    // Fully reset pathname and hash
    const cleanURL = window.location.origin + "/";
    window.history.pushState({}, "", cleanURL);
  };

  return (
    <button
      onClick={scrollToTopAndCleanURL}
      className={`fixed bottom-2 right-2 z-50 p-3 rounded-full transition duration-300
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        bg-accent-primary text-bg hover:bg-accent-secondary hover:scale-110`}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-[0.8rem] md:text-[1.5rem]" />
    </button>
  );
}
