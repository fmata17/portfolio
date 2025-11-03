import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen snap-start flex flex-col items-center justify-center bg-bg-darker text-white px-6"
    >
      {/* File tab bar */}
      <div className="w-full max-w-3xl bg-bg rounded-t-md border border-accent-primary border-b-0 px-4 py-2 flex items-center gap-2 text-sm font-mono text-fg-muted">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="ml-4">about.py</span>
      </div>

      {/* Code block container */}
      <motion.div
        className="w-full max-w-3xl bg-bg-dark rounded-b-md border border-accent-primary p-6 font-mono text-sm sm:text-base shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <pre className="whitespace-pre-wrap leading-[2.5]">
          <code>
            <span className="text-accent-error">
              # software & machine learning enthusiast continuing the journey
            </span>
            {"\n"}
            <span className="text-accent-secondary">class</span>{" "}
            <span className="text-accent-primary">Fredy</span>
            <span className="text-accent-secondary">:</span>
            {"\n  "}
            <span className="text-accent-peach">def</span>{" "}
            <span className="text-accent-info">__init__</span>
            <span className="text-fg"> (self):</span>
            {"\n    "}
            <span className="text-accent-info">self.degree_progress</span>{" "}
            <span className="text-accent-secondary">=</span>{" "}
            <span className="text-accent-peach">
              "Associate’s → Bachelor’s in Computer Science"
            </span>
            {"\n    "}
            <span className="text-accent-info">self.goal</span>{" "}
            <span className="text-accent-secondary">=</span>{" "}
            <span className="text-accent-peach">
              "Pursue a Master’s in Machine Learning or AI"
            </span>
            {"\n    "}

            {/* took out interests block */}
            {/* <span className="text-accent-info">self.interests</span>{" "}
            <span className="text-accent-secondary">=</span>{" "}
            <span className="text-accent-peach">
              ["Machine Learning",
              <br />
              <span className="pl-53 inline-block">"AI Engineering",</span>
              <br />
              <span className="pl-53 inline-block">"Software Engineering"</span>
              ]{" "}
            </span>
            {"\n    "} */}


            <span className="text-accent-info">self.hobbies</span>{" "}
            <span className="text-accent-secondary">=</span>{" "}
            <span className="text-accent-peach">
              ["Drums", "Fishing", "Studying ML"]
            </span>
            {"\n    "}
            <span className="text-accent-info">self.motto</span>{" "}
            <span className="text-accent-secondary">=</span>{" "}
            <span className="text-accent-success">
              "Mindset + Ambition = Success"
            </span>
          </code>
        </pre>
      </motion.div>
    </section>
  );
}
