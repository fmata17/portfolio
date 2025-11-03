import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen snap-start flex items-center justify-center bg-bg-darker text-fg px-6 overflow-hidden"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text block with heading and animated paragraph */}
        <motion.div
          className="w-full md:w-1/2 font-mono"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* File tab bar */}
          <div className="w-full bg-bg rounded-t-md border border-accent-primary border-b-0 px-4 py-2 flex items-center gap-2 text-sm font-mono text-fg-muted">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="ml-4">bio.txt</span>
          </div>

          {/* Paragraph content */}
          <div className="bg-bg-dark rounded-b-md border border-accent-primary p-6 shadow-lg">
            <h2 className="text-2xl sm:text-3xl text-accent-primary mb-4">
              A little about me...
            </h2>
            <p className="leading-loose text-sm sm:text-base text-fg-muted py-5">
              I’m a Salvadoran computer science student based in Texas,
              currently wrapping up my Associate of Science and pursuing a
              Bachelor’s in CS. I’m especially drawn to software development and
              the infrastructure that powers machine learning. Outside of code,
              I play the drums, kick around a soccer ball when I can, and debug
              most of my bugs with the help of my cat, Leia Skywalker.
            </p>
          </div>
        </motion.div>

        {/* Right: Two profile images */}
        <motion.div
          className="w-1/2 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Real image with cat */}
          <div className="relative w-48 h-48 md:w-100 md:h-56 rounded-xl overflow-hidden border-2 border-accent-primary shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/code_partners.jpeg"
              alt="Fredy and cat"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Animated developer image */}
          <div className="relative w-48 h-48 md:w-100 md:h-56 rounded-xl overflow-hidden border-2 border-accent-primary shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="https://img.itch.zone/aW1nLzE1NzU1OTc2LnBuZw==/original/oVOTQk.png"
              alt="Developer Illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
