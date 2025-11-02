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
} from "react-icons/si";

const skillGroups = {
  Frontend: [
    { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate", percentage: 70 },
    { name: "React", icon: <SiReact />, level: "Intermediate", percentage: 70 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Intermediate", percentage: 65 },
    { name: "Flutter", icon: <SiFlutter />, level: "Amateur", percentage: 45 },
  ],
  Backend: [
    { name: "Python", icon: <SiPython />, level: "Advanced", percentage: 90 },
    { name: "C++", icon: <SiCplusplus />, level: "Amateur", percentage: 50 },
    { name: "Django", icon: <SiDjango />, level: "Intermediate", percentage: 60 },
    { name: "FastAPI", icon: <SiFastapi />, level: "Intermediate", percentage: 65 },
  ],
  "ML & AI": [
    { name: "PyTorch", icon: <SiPytorch />, level: "Intermediate", percentage: 70 },
    { name: "TensorFlow", icon: <SiTensorflow />, level: "Amateur", percentage: 50 },
    { name: "scikit-learn", icon: <SiScikitlearn />, level: "Intermediate", percentage: 65 },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: <SiDocker />, level: "Amateur", percentage: 45 },
    { name: "Git", icon: <SiGit />, level: "Intermediate", percentage: 75 },
    { name: "AWS", icon: <SiAmazon />, level: "Amateur", percentage: 50 },
    { name: "Google Cloud", icon: <SiGoogle />, level: "Amateur", percentage: 50 },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen snap-start bg-[#0d1117] text-white flex flex-col items-center justify-center px-4 py-24"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-400 mb-16 font-mono">
        self.skills =
      </h2>

      <div className="flex flex-col gap-20">
        {Object.entries(skillGroups).map(([groupName, skills]) => (
          <SkillCluster key={groupName} title={groupName} skills={skills} />
        ))}
      </div>
    </section>
  );
}

function SkillCluster({ title, skills }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-green-400 mb-6 font-mono">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {skills.map((skill, idx) => (
          <SkillCircle key={idx} {...skill} />
        ))}
      </div>
    </div>
  );
}

function SkillCircle({ icon, name, level, percentage }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1e1e2e] hover:bg-[#2a2a3d] border border-gray-700 shadow-md flex items-center justify-center transition-all duration-200 ease-in-out transform hover:scale-105 relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="text-center text-xs text-green-400 font-semibold">
          {level}
          <br />
          <span className="text-gray-300">{percentage}%</span>
        </div>
      ) : (
        <div className="text-3xl text-green-300">{icon}</div>
      )}

      {/* Skill label */}
      <p className="absolute text-[10px] text-gray-400 top-full mt-1 text-center w-full">
        {name}
      </p>
    </div>
  );
}
