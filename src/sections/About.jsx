import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen snap-start flex flex-col items-center justify-center bg-bg-darker text-white px-6"
    >
      {/* File tab bar */}
      <div className="w-full max-w-3xl bg-[#1e1e2e] rounded-t-md border border-gray-700 border-b-0 px-4 py-2 flex items-center gap-2 text-sm font-mono text-gray-400">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="ml-4">about.py</span>
      </div>

      {/* Code block container */}
      <motion.div
        className="w-full max-w-3xl bg-[#1e1e2e] rounded-b-md border border-gray-700 p-6 font-mono text-sm sm:text-base shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <pre className="whitespace-pre-wrap leading-relaxed">
          <code>
            <span className="text-green-400">
              # software & machine learning enthusiast continuing the journey
            </span>
            {"\n"}
            <span className="text-blue-400">class</span>{" "}
            <span className="text-purple-400">Fredy</span>
            <span className="text-blue-400">:</span>
            {"\n  "}
            <span className="text-yellow-300">def</span>{" "}
            <span className="text-teal-400">__init__</span>
            <span className="text-white"> (self):</span>
            {"\n    "}
            <span className="text-teal-300">self.degree_progress</span>{" "}
            <span className="text-pink-400">=</span>{" "}
            <span className="text-orange-300">
              "Associate’s → Bachelor’s in Computer Science"
            </span>
            {"\n    "}
            <span className="text-teal-300">self.goal</span>{" "}
            <span className="text-pink-400">=</span>{" "}
            <span className="text-orange-300">
              "Pursue a Master’s in Machine Learning or AI"
            </span>
            {"\n    "}
            <span className="text-teal-300">self.interests</span>{" "}
            <span className="text-pink-400">=</span>{" "}
            <span className="text-orange-300">
              ["Machine Learning", "AI Engineering", "Software Engineering"]
            </span>
            {"\n    "}
            <span className="text-teal-300">self.hobbies</span>{" "}
            <span className="text-pink-400">=</span>{" "}
            <span className="text-orange-300">
              ["Drums", "Fishing", "Studying ML"]
            </span>
            {"\n    "}
            <span className="text-teal-300">self.mindset</span>{" "}
            <span className="text-pink-400">=</span>{" "}
            <span className="text-lime-300">
              "Mindset + Ambition = Success"
            </span>
          </code>
        </pre>
      </motion.div>
    </section>
  );
}
