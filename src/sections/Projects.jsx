import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

const projects = [
  {
    id: "ml-lab",
    name: "Applied ML & Deep Learning Sandbox",
    deepDescription:
      "Engineered and trained diverse models ranging from baseline scikit-learn classifiers (SVMs, Random Forests) to complex PyTorch neural networks (CNNs, VAEs, and Transformers). Preprocessed and analyzed tabular (Titanic, Iris), image (MNIST, CelebA), and audio (Musical) datasets. Leveraged CUDA for GPU-accelerated training, tracked architectural experiments with CometML/Opik, and performed rigorous comparative analysis of model interpretability versus predictive performance.",
    github: "https://github.com/fmata17/ml_lab",
    tech: [
      <SiPython key="py" />,
      <SiPytorch key="torch" />,
      <SiScikitlearn key="sk" />,
    ],
    status: "In Progress",
    progress: 50,
    media: [
      {
        type: "gif",
        url: "/ml_lab/vae_learning_progression.gif",
        caption:
          "VAE Latent Space Learning Progression (Faces Generation Loop)",
        isPlaceholder: false,
      },
      {
        type: "image",
        url: "/ml_lab/comet_ml_last_run_square.png",
        caption: "CometML Dashboard: Tracking Epoch Metrics & Gradient Health",
        isPlaceholder: false,
      },
      {
        type: "image",
        url: "/ml_lab/vae_vs_dbvae_res.png",
        caption:
          "Evaluation Comparison: Standard VAE vs. Debiasing VAE (DB-VAE)",
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "galactic-guardian",
    name: "Galactic Guardian",
    deepDescription:
      "Built from scratch in Python using Pygame to master clean object-oriented systems design and high-performance game loops. Programmed frame-rate independent physics, granular hitboxes, enemy wave spawners, and player control schemes. Successfully compiled and deployed to the web using Pygbag (WebAssembly) to demonstrate modern cross-compilation workflows for interactive web environments.",
    github: "https://github.com/fmata17/galactic_guardian",
    tech: [<SiPython key="py" />],
    status: "Complete",
    progress: 100,
    media: [
      {
        type: "image",
        url: "/galactic_guardian/initial_screen.png",
        caption: "Galactic Guardian WebAssembly Main Gameplay UI",
        isPlaceholder: false,
      },
      {
        type: "gif",
        url: "/galactic_guardian/gameplay.gif",
        caption: "Demonstration of real-time collision loops & wave generation",
        isPlaceholder: false,
      },
    ],
  },
  {
    id: "cs-foundations",
    name: "CS Foundations",
    deepDescription:
      "Developed a comprehensive training ground for algorithmic problem-solving in Python and C++. Features highly optimized solutions for core structures (including BSTs, Tries, Graphs, and Hash Maps) and advanced algorithmic paradigms (Dynamic Programming, Backtracking, and Greedy choices). Serves as a persistent study archive mapped closely to Big-O time and space complexity evaluations.",
    github: "https://github.com/fmata17/cs_foundations",
    tech: [<SiPython key="py" />, <SiCplusplus key="cpp" />],
    status: "In Progress",
    progress: 70,
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    deepDescription:
      "Engineered with React, Vite, Tailwind CSS, and Framer Motion to deliver an ultra-responsive frontend. Modeled after retro-tiling desktop environments and modern code editor themes (like LazyVim). Features direct integration with modular components, custom Tailwind configurations, and micro-interactions optimized across ultra-wide monitors down to standard mobile viewports.",
    github: "https://github.com/fmata17/portfolio",
    tech: [
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <SiVite key="vite" />,
    ],
    status: "Complete",
    progress: 100,
  },
];

// Motion animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Card-level animation variants for entry
const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 17,
    },
  },
};

// Backdrop animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Modal spring scaling variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 15,
    transition: { duration: 0.15 },
  },
};

// Helper function to dynamically extract only the first sentence
const getFirstSentence = (text) => {
  if (!text) return "";
  const CHAR_LIMIT = 150; // 💡 Modify this number to globally adjust the character limit!

  // If the entire text is already shorter than or equal to our limit, return it as-is
  if (text.length <= CHAR_LIMIT) {
    return text;
  }

  // Slice the text up to the character limit
  let truncated = text.substring(0, CHAR_LIMIT);

  // Find the last space within this substring to avoid cutting a word in half
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  if (lastSpaceIndex > 0) {
    truncated = truncated.substring(0, lastSpaceIndex);
  }

  return truncated + "...";
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  // Fix naming consistency here to avoid future mixups
  const [expandedCardId, setExpandedCardId] = useState(null);
  const sectionRef = useRef(null);
  const scrollContainerRefs = useRef({});

  // Keyboard Event Hook
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "x") {
        setExpandedCardId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Intersection Observer Reset
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilter((prev) => (prev !== "All" ? "All" : prev));
          setExpandedCardId((prev) => (prev !== null ? null : prev));
        }
      },
      { threshold: 0.1 },
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Case-insensitive filtering to guard against data discrepancies
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.status.toLowerCase() === filter.toLowerCase();
  });

  const toggleExpand = (projectId) => {
    setExpandedCardId(expandedCardId === projectId ? null : projectId);
  };

  const activeProject = projects.find((p) => p.id === expandedCardId);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen max-h-screen overflow-hidden bg-bg-darker text-fg flex items-center justify-center px-4 sm:px-8 md:px-12 xl:px-20 relative"
    >
      <div className="w-full max-w-7xl max-h-[85vh] flex flex-col min-h-0 space-y-6">
        {/* Header and Filters Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-accent-primary/20 gap-4 flex-shrink-0">
          <div className="space-y-1">
            <h2 className="text-accent-primary text-4xl md:text-4xl font-bold">
              Projects
            </h2>
            <p className="text-fg-muted text-sm md:text-base">
              A curated catalog of my engineering, ML, and systems
              implementations.
            </p>
          </div>
          {/* Terminal-Style Filter Buttons */}
          <div className="flex flex-wrap gap-2 text-xs">
            {["All", "Complete", "In Progress"].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type);
                  setExpandedCardId(null);
                }}
                className={`px-3 py-1 border rounded-md transition-all duration-200 ${
                  filter === type
                    ? "bg-accent-primary/10 border-accent-primary text-accent-primary font-bold"
                    : "border-fg-muted/10 text-fg-muted hover:border-fg-muted/30 hover:text-fg"
                }`}
              >
                [ {type} ]
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Scrollable Grid - Bound strictly inside screen limits */}
        <div className="flex-1 overflow-y-auto pr-1 min-h-0 custom-scrollbar">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout="position"
                  variants={cardVariants}
                  className="bg-bg-darker/50 backdrop-blur-sm border rounded-xl overflow-hidden shadow-md transition-all duration-300 border-fg-muted/5 hover:border-accent-primary/30"
                >
                  <div className="px-3 py-4 md:p-6 flex flex-col">
                    {/* Top Meta Row */}
                    <div className="flex items-center justify-between w-full gap-4 mb-3">
                      {/* Status Tag with Dynamic Coloring Based on Progress */}
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${
                          project.progress === 100
                            ? "bg-accent-success/10 border border-accent-success/20 text-accent-success"
                            : project.progress >= 70
                              ? "bg-accent-warning/10 border border-accent-warning/20 text-accent-warning"
                              : project.progress >= 30
                                ? "bg-accent-peach/10 border border-accent-peach/20 text-accent-peach"
                                : "bg-accent-error/10 border border-accent-error/20 text-accent-error"
                        }`}
                      >
                        {project.status}
                      </span>

                      {/* Progress Bar */}
                      <div className="flex-1 max-w-2xs space-y-1">
                        <div className="flex justify-between text-[10px] text-fg-muted">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        {/* Bar Container */}
                        <div className="w-full h-1.5 bg-bg-dark rounded-md overflow-hidden relative">
                          <motion.div
                            className={`h-full transition-all duration-300 relative ${
                              project.progress === 100
                                ? "bg-accent-success"
                                : project.progress >= 70
                                  ? "bg-accent-warning"
                                  : project.progress >= 30
                                    ? "bg-accent-peach"
                                    : "bg-accent-error"
                            }`}
                            style={{
                              width: `${project.progress}%`,
                            }}
                          >
                            {/* High-intensity internal glowing core */}
                            <div className="absolute inset-0 bg-white/20 mix-blend-overlay animate-lava-core" />

                            {/* Fluid Lava movement overlay (Uses a matching tint instead of harsh white lines) */}
                            <div
                              className="absolute inset-0 animate-lava-flow opacity-40 mix-blend-screen"
                              style={{
                                background:
                                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                                backgroundSize: "200% 100%",
                              }}
                            />

                            {/* Intense external color bleed / heat radiation */}
                            <div className="absolute inset-0 -z-10 animate-lava-glow blur-[3px] bg-inherit scale-y-150" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Tech Stack Icons Row */}
                      <div className="flex items-center gap-2.5 text-base md:text-lg text-accent-secondary shrink-0">
                        {project.tech.map((icon, i) => (
                          <span
                            key={i}
                            className="hover:scale-105 transition-transform duration-200"
                          >
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Identification & Description Splitting */}
                    <div className="space-y-0.5">
                      <h3 className="text-xl md:text-2xl font-bold text-fg">
                        {project.name}
                      </h3>

                      <p className="text-fg-muted text-xs md:text-sm leading-relaxed">
                        {getFirstSentence(project.deepDescription)}
                      </p>
                    </div>

                    {/* Small Bottom-Right Read More trigger */}
                    <div className="flex justify-end w-full">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="px-2.5 py-1 text-[11px] text-accent-secondary border border-accent-secondary/15 rounded hover:text-accent-success hover:border-accent-success/50 transition-colors"
                      >
                        [ read more ]
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Empty State warning */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-12 text-center border border-dashed border-fg-muted/10 rounded-xl bg-bg-darker/20 text-xs flex-shrink-0"
          >
            <p className="text-fg-muted">
              No projects found matching the selection category.
            </p>
          </motion.div>
        )}
      </div>

      {/* --- Overlay Modal Component --- */}
      <AnimatePresence>
        {expandedCardId && activeProject && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setExpandedCardId(null)} // Click outside to exit
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-bg-darker border border-accent-secondary rounded-xl overflow-hidden max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Stop bubbling up to backdrop click handler
            >
              {/* Header Close Trigger Bar */}
              <div className="flex items-center justify-between border-b border-fg-muted/10 px-5 py-4 bg-bg-darker/80 backdrop-blur flex-shrink-0">
                <span className="text-xs text-accent-secondary uppercase tracking-widest font-bold">
                  // project_diagnostics
                </span>
                <button
                  onClick={() => setExpandedCardId(null)}
                  className="text-xs text-accent-secondary hover:text-accent-error px-2 py-0.5 border border-accent-secondary/15 rounded transition-colors"
                >
                  [ close_x ]
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {/* Meta Row */}
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      activeProject.progress === 100
                        ? "bg-accent-success/10 border border-accent-success/20 text-accent-success"
                        : activeProject.progress >= 70
                          ? "bg-accent-warning/10 border border-accent-warning/20 text-accent-warning"
                          : activeProject.progress >= 30
                            ? "bg-accent-peach/10 border border-accent-peach/20 text-accent-peach"
                            : "bg-accent-error/10 border border-accent-error/20 text-accent-error"
                    }`}
                  >
                    {activeProject.status}
                  </span>

                  <div className="flex items-center gap-2.5 text-base md:text-lg text-accent-secondary">
                    {activeProject.tech.map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>

                {/* Project header */}
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-fg">
                    {activeProject.name}
                  </h3>
                  <div className="flex justify-between text-[10px] text-fg-muted pt-2">
                    <span>Progress Tracker</span>
                    <span>{activeProject.progress}%</span>
                  </div>
                  {/* Bar Container */}
                  <div className="w-full h-1.5 bg-bg-dark rounded-md overflow-hidden relative">
                    <div
                      className={`h-full transition-all duration-300 relative ${
                        activeProject.progress === 100
                          ? "bg-accent-success"
                          : activeProject.progress >= 70
                            ? "bg-accent-warning"
                            : activeProject.progress >= 30
                              ? "bg-accent-peach"
                              : "bg-accent-error"
                      }`}
                      style={{ width: `${activeProject.progress}%` }}
                    >
                      {/* High-intensity internal glowing core */}
                      <div className="absolute inset-0 bg-white/20 mix-blend-overlay animate-lava-core" />

                      {/* Fluid Lava movement overlay (Uses a matching tint instead of harsh white lines) */}
                      <div
                        className="absolute inset-0 animate-lava-flow opacity-40 mix-blend-screen"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
                          backgroundSize: "200% 100%",
                        }}
                      />

                      {/* Intense external color bleed / heat radiation */}
                      <div className="absolute inset-0 -z-10 animate-lava-glow blur-[3px] bg-inherit scale-y-150" />
                    </div>
                  </div>
                </div>

                {/* Deep Structural Description */}
                <div className="space-y-2">
                  <h4 className="text-accent-secondary text-xs font-bold uppercase tracking-wider">
                    Implementation & Technical Context
                  </h4>
                  <p className="text-fg-muted text-xs md:text-sm leading-relaxed whitespace-pre-line">
                    {activeProject.deepDescription}
                  </p>
                </div>

                {/* Media Gallery Track (Only renders if array exists) */}
                {activeProject.media && activeProject.media.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-accent-secondary text-xs font-bold uppercase tracking-wider">
                      Visual Artifacts & Evidence
                    </h4>

                    <div className="relative">
                      <div
                        ref={(el) =>
                          (scrollContainerRefs.current[activeProject.id] = el)
                        }
                        className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-fg-muted/10"
                      >
                        {activeProject.media.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex-shrink-0 w-64 md:w-80 bg-bg-dark/60 border border-fg-muted/10 rounded-lg overflow-hidden flex flex-col justify-between"
                          >
                            {item.isPlaceholder ? (
                              <div className="aspect-[4/3] bg-bg-dark flex flex-col items-center justify-center p-3 text-center">
                                <div className="w-8 h-8 border-2 border-dashed border-accent-secondary/30 rounded-full animate-pulse flex items-center justify-center text-accent-secondary/30 font-bold mb-1.5 text-xs">
                                  i
                                </div>
                                <span className="text-[10px] text-accent-secondary font-bold uppercase tracking-wider mb-0.5">
                                  Asset Pending
                                </span>
                                <span className="text-[9px] text-fg-muted">
                                  {item.type === "gif"
                                    ? "[ Animated model progression ]"
                                    : "[ Output validation metric ]"}
                                </span>
                              </div>
                            ) : (
                              <div className="aspect-[4/3] bg-bg-dark overflow-hidden relative border-b border-fg-muted/10 flex items-center justify-center">
                                <img
                                  src={item.url}
                                  alt={item.caption}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    const parent =
                                      e.currentTarget.parentElement;
                                    if (parent) {
                                      const fallbackDiv =
                                        document.createElement("div");
                                      fallbackDiv.className =
                                        "p-3 text-center text-[10px] text-fg-muted";
                                      fallbackDiv.innerText = `[ File: ${item.url.split("/").pop()} ]`;
                                      parent.appendChild(fallbackDiv);
                                    }
                                  }}
                                />
                              </div>
                            )}

                            <div className="p-2 bg-bg-darker/30">
                              <p className="text-[10px] text-fg-muted text-center">
                                {item.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Controls (GitHub Direct Access) */}
                <div className="pt-2 border-t border-fg-muted/5 flex items-center justify-between">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-xs text-accent-secondary border border-accent-secondary/20 rounded hover:bg-accent-secondary/10 hover:text-accent-success hover:border-accent-success transition-all duration-200"
                  >
                    <FaGithub className="mr-2 text-sm" />
                    inspect_source_code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
