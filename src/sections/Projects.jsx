import { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";

const projects = [
  {
    name: "ML Lab",
    description:
      "A hands‑on machine learning sandbox for exploring and comparing classical and modern models across diverse datasets. Built to strengthen my theoretical understanding through experimentation—testing performance, interpretability, and practicality of each approach. Implemented with PyTorch, TensorFlow, and scikit‑learn, using Jupyter for visualization and CUDA acceleration where available.",
    github: "https://github.com/fmata17/ml_lab",
    image: "/project_images/ml_lab.jpeg",
    tech: [
      <SiPython key="py" />,
      <SiPytorch key="torch" />,
      <SiTensorflow key="tf" />,
      <SiScikitlearn key="sk" />,
    ],
    status: "In Progress",
    progress: 30,
  },
  {
    name: "Galactic Guardian",
    description:
      "A fast‑paced 2D space shooter built with Python and Pygame, where players dodge asteroids and defend against waves of enemies. Deployed to the web using Pygbag (WebAssembly) for interactive browser play, showcasing real‑time graphics, collision systems, and game loop logic implemented from scratch.",
    github: "https://github.com/fmata17/galactic_guardian",
    image: "/project_images/galactic_guardian.jpeg",
    tech: [<SiPython key="py" />],
    status: "Complete",
    progress: 100,
  },
  {
    name: "CS Foundations",
    description:
      "A focused CS learning repo covering data structures, algorithms, and time complexity—designed for interview prep and long-term mastery. Built with Python and C++, using Git for version control and LeetCode as the main problem source.",
    github: "https://github.com/fmata17/cs_foundations",
    image: "/project_images/cs_foundations.jpeg",
    tech: [
      <SiPython key="py" />,
      <SiCplusplus key="cpp" />,
      <FaGithub key="git" />,
    ],
    status: "In Progress",
    progress: 70,
  },
  {
    name: "Personal Portfolio",
    description:
      "This portfolio site showcases clean design, scroll-snapping transitions, and developer-focused aesthetics. Built with React, TypeScript, Vite, and Tailwind CSS, and powered by a lightweight backend via Render for contact form handling. Designed with a retro-tiling window manager feel, inspired by the LazyVim Catppuccin Macchiato theme and Sway-like minimalist desktops.",
    github: "https://github.com/fmata17/portfolio",
    image: "/project_images/portfolio_v2.jpeg",
    tech: [
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiVite key="vite" />,
    ],
    status: "Complete",
    progress: 100,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen snap-start bg-bg-dark text-fg flex flex-row items-center justify-center"
    >
      <div className="w-full h-full flex px-8 sm:px-10 md:px-12 xl:px-20">
        {/* TODO add a projects heading when the left sidebar is hidden, anything under md tailwind size */}
        <div className="hidden md:flex flex-col items-start pr-6 py-10 w-1/4 border-r border-accent-primary">
          <h2
            className="text-[3.5vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]
                       font-mono font-bold mb-6 text-accent-primary"
          >
            Projects
          </h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  href={`#project-${index}`}
                  className={`text-[2.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.3vw]
                              font-mono transition-colors ${
                                index === activeIndex
                                  ? "text-accent-secondary font-semibold"
                                  : "text-fg-muted hover:text-accent-secondary"
                              }`}
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-8 px-2 custom-scrollbar">
          {projects.map((project, index) => (
            <div
              key={index}
              id={`project-${index}`}
              data-index={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="min-w-full snap-center flex flex-col items-center justify-center"
            >
              <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="text-left space-y-4 max-w-md">
                  <h3
                    className="text-[5.5vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]
                               font-mono font-semibold text-accent-primary"
                  >
                    {project.name}
                  </h3>

                  {/* Status Tag */}
                  <span
                    className={`text-[2.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw]
                                inline-block px-2 py-1 rounded-full font-mono font-semibold ${
                                  project.progress === 100
                                    ? "bg-accent-success text-bg-darker"
                                    : project.progress >= 70
                                    ? "bg-accent-warning text-bg-darker"
                                    : project.progress >= 30
                                    ? "bg-accent-peach text-bg-darker"
                                    : "bg-accent-error text-bg-darker"
                                }`}
                  >
                    {project.status}
                  </span>

                  {/* Optional Progress Bar */}
                  {project.progress < 100 && (
                    <div className="w-full h-2 bg-bg-darker rounded-md overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          project.progress >= 70
                            ? "bg-accent-warning"
                            : project.progress >= 30
                            ? "bg-accent-peach"
                            : "bg-accent-error"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  )}

                  <p
                    className="text-[2.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.3vw]
                                text-fg-muted font-mono"
                  >
                    {project.description}
                  </p>

                  <div
                    className="text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw]
                               flex items-center gap-3 text-accent-secondary"
                  >
                    {project.tech.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1vw]
                               inline-flex items-center font-mono text-accent-secondary hover:underline hover:text-accent-success"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
