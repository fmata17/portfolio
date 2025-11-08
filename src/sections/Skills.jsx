import { useState } from "react";
import {
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiCplusplus,
  SiDocker,
  SiFlutter,
  SiDjango,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
  SiGoogle,
  SiAmazon,
  SiHuggingface,
} from "react-icons/si";

const skills = {
  frontend: [
    { name: "React", icon: <SiReact />, level: "Intermediate", percentage: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Intermediate", percentage: 70 },
    { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate", percentage: 60 },
    { name: "Flutter", icon: <SiFlutter />, level: "Amateur", percentage: 45 },
  ],
  backend: [
    { name: "Python", icon: <SiPython />, level: "Advanced", percentage: 90 },
    { name: "C++", icon: <SiCplusplus />, level: "Advanced", percentage: 85 },
    { name: "FastAPI", icon: <SiFastapi />, level: "Intermediate", percentage: 70 },
    { name: "Django", icon: <SiDjango />, level: "Intermediate", percentage: 65 },
  ],
  ml: [
    { name: "scikit-learn", icon: <SiScikitlearn />, level: "Advanced", percentage: 80 },
    { name: "PyTorch", icon: <SiPytorch />, level: "Intermediate", percentage: 75 },
    { name: "TensorFlow", icon: <SiTensorflow />, level: "Amateur", percentage: 50 },
    { name: "Hugging Face", icon: <SiHuggingface />, level: "Amateur", percentage: 35 },
  ],
  cloud: [
    { name: "AWS", icon: <SiAmazon />, level: "Amateur", percentage: 55 },
    { name: "Google Cloud", icon: <SiGoogle />, level: "Amateur", percentage: 50 },
    { name: "Docker", icon: <SiDocker />, level: "Amateur", percentage: 40 },
    { name: "Git", icon: <SiGit />, level: "Advanced", percentage: 80 },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen snap-start bg-bg-darker font-mono text-fg flex flex-col items-center justify-center px-[4vw] py-[4vw] overflow-hidden"
    >
      <h2 className="text-[6vw] sm:text-[5vw] md:text-[3vw] font-semibold text-accent-primary mb-[4vw]">
        showcase(<span className="text-fg">self.skills</span>)
      </h2>

      <div className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-[4vw] justify-items-center items-center">
        {Object.entries(skills).map(([category, list], catIdx) => (
          <div
            key={category}
            className="w-full bg-bg rounded-2xl p-[3vw] border border-accent-primary shadow-xl hover:shadow-accent-primary transition-shadow duration-300 flex flex-col items-center"
          >
            <h3 className="text-accent-primary text-[4vw] sm:text-[3vw] md:text-[2vw] font-semibold mb-[2vw] uppercase tracking-wider">
              {category.replace(/\b\w/g, (l) => l.toUpperCase())}
            </h3>
            <ul className="flex flex-col gap-[2vw] w-full">
              {list.map((skill, idx) => (
                <SkillRow
                  key={idx}
                  {...skill}
                  delay={idx * 0.1 + catIdx * 0.3}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillRow({ icon, name, level, percentage, delay = 0 }) {
  return (
    <li
      className="flex items-center gap-[2vw] w-full animate-fadeInUp"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-[6vw] sm:text-[4vw] md:text-[2.5vw] text-accent-primary">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between text-[3vw] sm:text-[2.5vw] md:text-[1.5vw] text-fg-muted">
          <span className="font-semibold">{name}</span>
          <span>{level}</span>
        </div>
        <div className="w-full h-[1vw] bg-bg-darker rounded-full overflow-hidden mt-[1vw]">
          <div
            className="h-full bg-accent-primary rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </li>
  );
}