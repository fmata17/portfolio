import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen snap-start flex items-center justify-center bg-bg-darker text-fg px-8 sm:px-10 md:px-12 xl:px-20"
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-4 lg:gap-10">
        {/* Left: Text block */}
        <motion.div
          className="w-full font-mono mt-10 md:mt-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* File tab bar */}
          <div
            className="bg-bg rounded-t-md border border-accent-primary border-b-0 px-4 py-2 flex items-center gap-2
                       text-[2.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.6vw] xl:text-[1.4vw] text-fg-muted"
          >
            <span className="w-[1.5vw] h-[1.5vw] md:w-[1.2vw] md:h-[1.2vw] lg:w-[1vw] lg:h-[1vw] xl:w-[0.8vw] xl:h-[0.8vw] bg-accent-error rounded-full" />
            <span className="w-[1.5vw] h-[1.5vw] md:w-[1.2vw] md:h-[1.2vw] lg:w-[1vw] lg:h-[1vw] xl:w-[0.8vw] xl:h-[0.8vw] bg-accent-warning rounded-full" />
            <span className="w-[1.5vw] h-[1.5vw] md:w-[1.2vw] md:h-[1.2vw] lg:w-[1vw] lg:h-[1vw] xl:w-[0.8vw] xl:h-[0.8vw] bg-accent-success rounded-full" />
            <span className="ml-4">bio.txt</span>
          </div>

          {/* Paragraph box */}
          <div className="bg-bg-dark rounded-b-md border border-accent-primary py-4 pl-4 pr-2 sm:p-6 shadow-lg">
            <h2 className="text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.6vw] text-accent-primary mb-2">
              A little about me...
            </h2>
            <p
              className="leading-loose text-fg-muted
                         text-[2.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1.2vw]"
            >
              I’m a Salvadoran computer science student based in Texas,
              currently wrapping up my Associate of Science and pursuing a
              Bachelor’s in CS. I’m especially drawn to software development and
              the infrastructure that powers machine learning.
            </p>
            <p
              className="leading-loose text-fg-muted mt-4
                          text-[2.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1.2vw]"
            >
              Outside of code, I enjoy music—especially playing drums in a band.
              I love soccer, even if I don’t get to play as often as I’d like.
              Fishing helps clear my mind, and most of my late-night coding
              sessions wouldn’t be the same without my cat, Leia Skywalker,
              curled up beside me.
            </p>
          </div>
        </motion.div>

        {/* Right: Image block */}
        <motion.div
          className="w-full md:w-1/2 flex flex-row md:flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Real image with cat */}
          <div
            className="relative rounded-xl overflow-hidden border-2 border-accent-primary shadow-lg hover:scale-105 transition-transform duration-300
                       w-[42.5vw] h-[24vw] sm:w-[42.5vw] sm:h-[24vw] md:w-[35.5vw] md:h-[20vw] lg:w-[35.5vw] lg:h-[20vw] xl:w-[32vw] xl:h-[18vw]"
          >
            <img
              src="/code_partners_1.webp"
              alt="Fredy and cat"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Developer illustration */}
          <div
            className="relative rounded-xl overflow-hidden border-2 border-accent-primary shadow-lg hover:scale-105 transition-transform duration-300
                       w-[42.5vw] h-[24vw] sm:w-[42.5vw] sm:h-[24vw] md:w-[35.5vw] md:h-[20vw] lg:w-[35.5vw] lg:h-[20vw] xl:w-[32vw] xl:h-[18vw]"
          >
            <img
              src="/code_partners_2.webp"
              alt="Developer Illustration"
              className="object-contain w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
