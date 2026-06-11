import HeroIDE from "../components/Hero/HeroIDE";
import HeroAvatar from "../components/Hero/HeroAvatar";
import HeroActions from "../components/Hero/HeroActions";

import useTypewriter from "../hooks/useTypewriter";

import { heroLinks } from "../data/heroLinks";

export default function Hero() {
  const displayedText = useTypewriter([
    "Fredy.",
    "a full-stack developer.",
    "a builder.",
    "an optimizer.",
  ]);

  return (
    <section
      id="hero"
      className="
        min-h-screen
        bg-bg-dark
        font-mono
        flex
        flex-col
        justify-center
        items-center
        text-center
        overflow-hidden
        snap-start
      "
    >
      {/* Background */}
      <HeroIDE />

      {/* Foreground */}
      <div className="relative z-10 flex flex-col items-center max-w-screen-lg w-full">
        <HeroAvatar />

        <p
          className="
            text-md
            md:text-lg
            lg:text-xl
            text-fg-muted
            tracking-wide
          "
        >
          AI & Machine Learning Engineer
        </p>

        <h1
          className="
            text-2xl
            md:text-3xl
            lg:text-4xl
            text-fg
            mt-4
            mb-2
            font-bold
          "
        >
          Hi, I am
        </h1>

        <p
          className="
            text-2xl
            md:text-3xl
            lg:text-4xl
            text-fg
            flex
            items-center
            min-h-[2rem]
            md:min-h-[3rem]
            lg:min-h-[4rem]
            xl:min-h-[5rem]
            font-bold
          "
        >
          {displayedText}
          <span
            className="
            inline-block
            w-[2px]
            h-[1em]
            bg-accent-primary
            ml-2
            animate-cursor-blink
            align-middle"
          />
        </p>

        <p
          className="
            text-md
            md:text-lg
            lg:text-xl
            text-fg-muted
            mt-2
            mb-4
          "
        >
          Welcome to my portfolio.
        </p>

        <HeroActions links={heroLinks} />
      </div>
    </section>
  );
}
