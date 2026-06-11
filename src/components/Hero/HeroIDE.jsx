import { motion } from "framer-motion";

export default function HeroIDE() {
  return (
    <motion.div
      className="
        absolute
        top-[55vh]
        w-max
        max-w-[99vw]
        px-4

        text-3xs
        md:text-lg
        lg:text-xl
        xl:text-2xl
        2xl:text-3xl

        font-mono
        text-fg
        opacity-20
        hover:opacity-30
        transition
        duration-300
        z-0
      "
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 0.2, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top bar of IDE */}
      <div
        className="
          bg-bg-darker
          rounded-t-md
          border
          border-accent-primary
          border-t-2
          px-3
          py-2
          flex
          items-center
          gap-2
          text-fg-muted
          text-3xs
          md:text-lg
        "
      >
        <span className="w-[0.5rem] h-[0.5rem] bg-accent-error rounded-full" />
        <span className="w-[0.5rem] h-[0.5rem] bg-accent-warning rounded-full" />
        <span className="w-[0.5rem] h-[0.5rem] bg-accent-success rounded-full" />

        <span className="ml-4">about.py</span>
      </div>

      {/* Code content part of IDE */}
      <div
        className="bg-bg-darker rounded-b-md 
                  border border-accent-primary border-b-2 p-2 
                  sm:p-3 md:p-4 shadow-lg"
      >
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
            <span className="text-fg"> </span>
            <span className="text-accent-warning">=</span>
            <span className="text-fg"> </span>
            <span className="text-accent-peach">
              "Associate’s → Bachelor’s in Computer Science"
            </span>
            {"\n    "}
            <span className="text-accent-info">self.goal</span>
            <span className="text-fg"> </span>
            <span className="text-accent-warning">=</span>
            <span className="text-fg"> </span>
            <span className="text-accent-peach">
              "Pursue a Master’s in Machine Learning or AI"
            </span>
            {"\n    "}
            <span className="text-accent-info">self.hobbies</span>
            <span className="text-fg"> </span>
            <span className="text-accent-warning">=</span>
            <span className="text-fg"> </span>
            <span className="text-accent-peach">
              ["Drums", "Fishing", "Studying ML"]
            </span>
            {"\n    "}
            <span className="text-accent-info">self.motto</span>
            <span className="text-fg"> </span>
            <span className="text-accent-warning">=</span>
            <span className="text-fg"> </span>
            <span className="text-accent-success">
              "Mindset + Ambition = Success"
            </span>
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
