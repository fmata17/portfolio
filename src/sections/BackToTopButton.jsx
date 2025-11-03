import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-scrollbar");
    const hero = document.getElementById("hero");

    if (!scrollContainer || !hero) return;

    const checkVisibility = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const viewportHeight = scrollContainer.clientHeight;
      setIsVisible(heroBottom < viewportHeight * 0.5); // Once hero is scrolled up by 50%, show button
    };

    scrollContainer.addEventListener("scroll", checkVisibility);
    checkVisibility(); // run once on mount

    return () => {
      scrollContainer.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToHero}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition duration-300
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        bg-accent-primary text-bg hover:bg-accent-secondary hover:scale-110`}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}