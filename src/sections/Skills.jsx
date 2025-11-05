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
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "Intermediate",
      percentage: 70,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: "Intermediate",
      percentage: 60,
    },
    { name: "Flutter", icon: <SiFlutter />, level: "Amateur", percentage: 45 },
  ],
  backend: [
    { name: "Python", icon: <SiPython />, level: "Advanced", percentage: 90 },
    { name: "C++", icon: <SiCplusplus />, level: "Advanced", percentage: 85 },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      level: "Intermediate",
      percentage: 70,
    },
    {
      name: "Django",
      icon: <SiDjango />,
      level: "Intermediate",
      percentage: 65,
    },
  ],
  ml: [
    {
      name: "scikit-learn",
      icon: <SiScikitlearn />,
      level: "Advanced",
      percentage: 80,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />,
      level: "Intermediate",
      percentage: 75,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
      level: "Amateur",
      percentage: 50,
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface />,
      level: "Amateur",
      percentage: 35,
    },
  ],
  cloud: [
    { name: "AWS", icon: <SiAmazon />, level: "Amateur", percentage: 55 },
    {
      name: "Google Cloud",
      icon: <SiGoogle />,
      level: "Amateur",
      percentage: 50,
    },
    { name: "Docker", icon: <SiDocker />, level: "Amateur", percentage: 40 },
    { name: "Git", icon: <SiGit />, level: "Advanced", percentage: 80 },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen snap-start bg-bg-darker font-mono text-fg flex flex-col items-center justify-center px-4 py-10"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-accent-primary mb-16 font-mono">
        showcase(<span className="text-fg">self.skills</span>)
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-6 max-w-screen-lg w-full px-10">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="flex flex-col items-center">
            <h3 className="text-accent-primary font-semibold font-mono text-sm sm:text-base uppercase mb-4">
              {category.replace(/\b\w/g, (l) => l.toUpperCase())}
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-12">
              {list.map((skill, idx) => (
                <SkillCircle key={idx} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCircle({ icon, name, level, percentage }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="aspect-square w-[14vw] max-w-[100px] min-w-[48px] rounded-full bg-bg-darker hover:bg-bg border border-fg-muted shadow-md flex items-center justify-center transition-all duration-200 ease-in-out transform hover:scale-110 relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="text-center text-[0.5rem] sm:text-xxs text-accent-primary font-mono">
          {level}
          <br />
          <span className="text-fg">{percentage}%</span>
        </div>
      ) : (
        <div className="text-2xl sm:text-3xl text-accent-primary hover:text-accent-secondary">
          {icon}
        </div>
      )}
      <p className="absolute text-[0.65rem] sm:text-xs text-fg top-full mt-2 text-center w-full">
        {name}
      </p>
    </div>
  );
}
