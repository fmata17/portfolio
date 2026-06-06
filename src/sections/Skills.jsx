import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  VscFileCode,
  VscFolderOpened,
  VscPlay,
  VscTerminal,
  VscClose,
} from "react-icons/vsc";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiCplusplus,
  SiNodedotjs,
  SiMongodb,
  SiSqlite,
  SiPostgresql,
  SiWebassembly,
  SiOpenai,
  SiLangchain,
  SiDocker,
  SiGit,
} from "react-icons/si";

const fileBuffers = {
  "01_ml_theoretical_ai.py": {
    language: "python",
    comment: "# Deep Learning & Applied ML Architectures",
    importLine: "import theoretical_ai as ai",
    skills: [
      {
        name: "PyTorch",
        icon: <SiPytorch />,
        level: "Advanced",
        detail:
          "Optimizing latent space autoencoders and CNN feature pipelines",
        project: "ml-lab",
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow />,
        level: "Intermediate",
        detail: "Structuring static graphs & multi-run regression models",
        project: "ml-lab",
      },
      {
        name: "Gymnasium",
        icon: <SiPython />,
        level: "Advanced",
        detail:
          "Formulating custom state-action-reward agent training environments",
        project: "rl-guardian",
      },
      {
        name: "Stable-Baselines3",
        icon: <SiPython />,
        level: "Advanced",
        detail: "Deploying off-the-shelf policy networks and DQN checkpoints",
        project: "rl-guardian",
      },
      {
        name: "scikit-learn",
        icon: <SiScikitlearn />,
        level: "Advanced",
        detail: "Feature engineering, scaling, and classical baseline models",
        project: "ml-lab",
      },
      {
        name: "Hugging Face",
        icon: <SiHuggingface />,
        level: "Intermediate",
        detail: "Tokenizer pipelines and sequence classification models",
        project: "ml-lab",
      },
    ],
  },
  "02_agentic_ai_systems.js": {
    language: "javascript",
    comment: "// Stateful Agent Orchestration & Observability",
    importLine: "import { Agent, Tool } from 'openai-agents';",
    skills: [
      {
        name: "OpenAI Agents SDK",
        icon: <SiOpenai />,
        level: "Advanced",
        detail:
          "Managing concurrent agent handoffs, tools, and shared memories",
        project: "rl-guardian",
      },
      {
        name: "crewAI",
        icon: <SiPython />,
        level: "Advanced",
        detail:
          "Constructing hierarchical task structures for collaborative agents",
        project: "ml-lab",
      },
      {
        name: "LangChain",
        icon: <SiLangchain />,
        level: "Intermediate",
        detail: "Chaining prompt logic and semantic vector retrieval networks",
        project: "ml-lab",
      },
      {
        name: "Model Context Protocol",
        icon: <SiReact />,
        level: "Advanced",
        detail:
          "Designing secure, unified MCP server gateways for tool schemas",
        project: "portfolio",
      },
      {
        name: "Opik",
        icon: <SiPython />,
        level: "Advanced",
        detail:
          "Tracing agent decisions, monitoring latencies, and tracking runs",
        project: "ml-lab",
      },
      {
        name: "Long-Term Memory",
        icon: <SiPython />,
        level: "Intermediate",
        detail: "Implementing dynamic state vectors & persistence layers",
        project: "rl-guardian",
      },
    ],
  },
  "03_backend_systems.cpp": {
    language: "cpp",
    comment: "// High-Performance Environments & Storage",
    importLine: "#include <backend_telemetry.hpp>",
    skills: [
      {
        name: "C++ (STL)",
        icon: <SiCplusplus />,
        level: "Advanced",
        detail: "Custom data structures, algorithms, and manual memory bounds",
        project: "cs-foundations",
      },
      {
        name: "Python / FastAPI",
        icon: <SiPython />,
        level: "Advanced",
        detail:
          "Routing concurrent requests & high-frequency WebSocket streams",
        project: "galactic-guardian",
      },
      {
        name: "Node.js (Express)",
        icon: <SiNodedotjs />,
        level: "Intermediate",
        detail: "Developing event-driven APIs and microservices",
        project: "portfolio",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: "Intermediate",
        detail: "Optimizing relational storage databases, schemas, and queries",
        project: "ml-lab",
      },
      {
        name: "SQLite",
        icon: <SiSqlite />,
        level: "Intermediate",
        detail: "Structuring local, lightweight file storage arrays",
        project: "cs-foundations",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: "Intermediate",
        detail: "Structuring NoSQL schemas for unstructured document tracking",
        project: "portfolio",
      },
    ],
  },
  "04_frontend_architecture.tsx": {
    language: "tsx",
    comment: "// Interactive User Interfaces & Compilations",
    importLine: "import { InteractiveWorkspace } from 'lazyvim-ui';",
    skills: [
      {
        name: "React / Vite",
        icon: <SiReact />,
        level: "Advanced",
        detail: "Custom states, render scopes, and highly modular layouts",
        project: "portfolio",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: "Intermediate",
        detail: "Setting explicit type interfaces across complex components",
        project: "portfolio",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: "Advanced",
        detail:
          "Tiled layout systems, absolute positioning, and viewport clamping",
        project: "portfolio",
      },
      {
        name: "Framer Motion",
        icon: <SiReact />,
        level: "Advanced",
        detail: "Designing spring physics, exit states, and layout transitions",
        project: "portfolio",
      },
      {
        name: "WebAssembly (WASM)",
        icon: <SiWebassembly />,
        level: "Advanced",
        detail: "Cross-compiling CPython engine loops for browser sandboxes",
        project: "galactic-guardian",
      },
    ],
  },
};

const compileLogs = [
  "[SYS] Initializing dynamic parser interface...",
  "[LSP] Constructing semantic abstract syntax trees (AST)...",
  "[MLOPS] Compiling linked execution telemetry on Opik pipeline...",
  "[BUILD] Binding WASM cross-compilers and layout threads...",
  "[SUCCESS] Compilation successful. Rendering spatial canvas.",
];

export default function Skills() {
  const [isCodeView, setIsCodeView] = useState(true);
  const [activeFile, setActiveFile] = useState("01_ml_theoretical_ai.py");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isTreeOpen, setIsTreeOpen] = useState(true);
  const [vimMode, setVimMode] = useState("NORMAL");
  const [cursorLineIdx, setCursorLineIdx] = useState(0);

  // Compiler/Runner simulation states
  const [isCompiling, setIsCompiling] = useState(false);
  const [currentLogIdx, setCurrentLogIdx] = useState(0);
  const sectionRef = useRef(null);

  // Set default view based on device screen size on mount
  useEffect(() => {
    const checkIsMobile = window.innerWidth < 768;
    setIsCodeView(!checkIsMobile);
  }, []);

  const fileData = fileBuffers[activeFile];

  // Intercept Keyboard in INSERT Mode: Lock arrow keys to virtual code lines
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "i" && vimMode === "NORMAL" && isCodeView) {
        setVimMode("INSERT");
        setCursorLineIdx(0);
      } else if (e.key === "Escape" && vimMode === "INSERT") {
        setVimMode("NORMAL");
        setHoveredSkill(null);
      }

      // Handle custom inner-IDE arrow line movement in INSERT Mode
      if (vimMode === "INSERT" && isCodeView) {
        const skillsLength = fileData.skills.length;
        if (e.key === "ArrowDown") {
          e.preventDefault(); // Stop standard browser page scroll
          setCursorLineIdx((prev) => {
            const next = Math.min(skillsLength - 1, prev + 1);
            setHoveredSkill(fileData.skills[next]);
            return next;
          });
        } else if (e.key === "ArrowUp") {
          e.preventDefault(); // Stop standard browser page scroll
          setCursorLineIdx((prev) => {
            const next = Math.max(0, prev - 1);
            setHoveredSkill(fileData.skills[next]);
            return next;
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [vimMode, isCodeView, fileData]);

  // Reset filtering and close overlays on page reload / transition
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const isMobile = window.innerWidth < 768;
          setIsCodeView(!isMobile);
          setActiveFile("01_ml_theoretical_ai.py");
          setHoveredSkill(null);
          setVimMode("NORMAL");
          setIsCompiling(false);
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

  // Simulates Compiler Build logs then swaps the view
  const runCompilation = () => {
    setIsCompiling(true);
    setCurrentLogIdx(0);
    setVimMode("NORMAL");

    // Interval to cycle through the custom telemetry build outputs
    const interval = setInterval(() => {
      setCurrentLogIdx((prev) => {
        if (prev >= compileLogs.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsCompiling(false);
            setIsCodeView(!isCodeView); // Toggle display view
          }, 350);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
  };

  const handleScrollToProject = (projectId) => {
    const el = document.getElementById(`project-${projectId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-screen max-h-screen snap-start overflow-hidden bg-bg-dark text-fg flex flex-col items-center justify-start py-8 px-4 sm:px-8 md:px-12 xl:px-20 relative"
    >
      <div className="w-full max-w-7xl h-full flex flex-col min-h-0 space-y-6 mt-8">
        {/* Header bar */}
        <div className="flex items-end justify-between border-b border-accent-primary/20 pb-4 flex-shrink-0">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-accent-primary">
              showcase(<span className="text-fg">self.skills</span>)
            </h2>
            <p className="text-fg-muted font-mono text-xs md:text-sm">
              {isCodeView
                ? "Code Buffer: Direct terminal editing environment (press [ i ] to navigate)"
                : "Active Diagnostic Output: Compiled spatial competencies matrix"}
            </p>
          </div>

          {/* Controls Segment */}
          <div className="flex items-center gap-3">
            {/* Collapse Explorer - Only for CodeView on Desktop */}
            {isCodeView && (
              <button
                onClick={() => setIsTreeOpen(!isTreeOpen)}
                className="hidden md:flex items-center gap-2 font-mono text-xs px-3 py-1.5 border border-fg-muted/10 rounded hover:border-accent-secondary hover:text-accent-secondary transition-colors"
              >
                {isTreeOpen ? "[ collapse_tree ]" : "[ expand_tree ]"}
              </button>
            )}

            {/* THE IDE RUN BUTTON (Always visible) */}
            <button
              onClick={runCompilation}
              className={`flex items-center gap-2 font-mono text-xs px-4 py-1.5 rounded border shadow-lg transition-all duration-300 ${
                isCodeView
                  ? "bg-accent-success/15 border-accent-success text-accent-success hover:bg-accent-success/35 hover:scale-105"
                  : "bg-accent-primary/15 border-accent-primary text-accent-primary hover:bg-accent-primary/35 hover:scale-105"
              }`}
            >
              {isCodeView ? (
                <>
                  <VscPlay className="text-sm animate-pulse" /> RUN_COMPILER.sh
                </>
              ) : (
                <>
                  <VscTerminal className="text-sm" /> RETURN_TO_IDE.cmd
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Display Canvas */}
        <div className="flex-1 border border-fg-muted/10 rounded-xl overflow-hidden bg-bg-darker/60 backdrop-blur-md flex flex-row min-h-0 shadow-2xl relative">
          {/* COMPILING TERMINAL OVERLAY */}
          <AnimatePresence>
            {isCompiling && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-[#09090d]/95 flex flex-col p-6 font-mono text-xs md:text-sm space-y-3"
              >
                <div className="flex items-center justify-between border-b border-fg-muted/10 pb-3 mb-2 shrink-0">
                  <span className="text-accent-warning flex items-center gap-2 font-bold animate-pulse">
                    ⚡ RUNNING PIPELINE DIAGNOSTICS...
                  </span>
                  <button
                    onClick={() => setIsCompiling(false)}
                    className="text-fg-muted hover:text-accent-error transition-colors"
                  >
                    <VscClose className="text-lg" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar text-[#a6e3a1]">
                  {compileLogs.slice(0, currentLogIdx + 1).map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    >
                      {log}
                    </motion.div>
                  ))}
                  {currentLogIdx < compileLogs.length - 1 && (
                    <div className="w-2.5 h-4 bg-accent-warning animate-pulse inline-block" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isCodeView ? (
              /* ========================================================================= */
              /* ==================== SCREEN A: THE NEOVIM EDITOR VIEW =================== */
              /* ========================================================================= */
              <motion.div
                key="code-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-row min-h-0 w-full"
              >
                {/* 1. NvimTree sidebar */}
                <AnimatePresence initial={false}>
                  {isTreeOpen && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "260px", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="hidden md:flex flex-col border-r border-fg-muted/10 bg-bg-darker/80 h-full flex-shrink-0 font-mono text-xs select-none"
                    >
                      <div className="px-4 py-3 border-b border-fg-muted/10 text-fg-muted uppercase text-[10px] tracking-wider font-bold">
                        // nvimtree_explorer
                      </div>

                      <div className="p-4 space-y-4 overflow-y-auto custom-scrollbar flex-1">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-accent-primary">
                            <VscFolderOpened className="text-sm" />
                            <span>workspace/</span>
                          </div>
                          <div className="pl-4 space-y-1">
                            <div className="flex items-center gap-1.5 text-accent-secondary">
                              <VscFolderOpened className="text-sm" />
                              <span>skills/</span>
                            </div>
                            <div className="pl-4 space-y-2 pt-1">
                              {Object.keys(fileBuffers).map((fileName) => {
                                const isSelected = activeFile === fileName;
                                return (
                                  <button
                                    key={fileName}
                                    onClick={() => {
                                      setActiveFile(fileName);
                                      setHoveredSkill(null);
                                      setCursorLineIdx(0);
                                    }}
                                    className={`flex items-center gap-2 w-full text-left transition-colors ${
                                      isSelected
                                        ? "text-accent-primary font-bold border-l-2 border-accent-primary pl-1 -ml-1.5"
                                        : "text-fg-muted hover:text-fg pl-0.5"
                                    }`}
                                  >
                                    <VscFileCode className="text-sm shrink-0" />
                                    <span className="truncate">{fileName}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 2. Text Editor Area */}
                <div className="flex-1 flex flex-col min-h-0 bg-bg-darker/35 w-full overflow-hidden">
                  {/* Editor Tabline */}
                  <div className="flex items-center bg-bg-darker/90 border-b border-fg-muted/10 overflow-x-auto select-none flex-shrink-0 h-10 divide-x divide-fg-muted/5 scrollbar-none">
                    {Object.keys(fileBuffers).map((fileName) => {
                      const isSelected = activeFile === fileName;
                      return (
                        <button
                          key={fileName}
                          onClick={() => {
                            setActiveFile(fileName);
                            setHoveredSkill(null);
                            setCursorLineIdx(0);
                          }}
                          className={`flex items-center gap-2 px-4 h-full text-xs font-mono transition-colors whitespace-nowrap ${
                            isSelected
                              ? "bg-[#1e1e2e]/40 text-accent-secondary border-t-2 border-accent-secondary font-semibold"
                              : "text-fg-muted hover:bg-bg-dark/20 hover:text-fg"
                          }`}
                        >
                          <VscFileCode className="text-sm" />
                          <span>{fileName}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Code Gutter & Canvas */}
                  <div className="flex-1 flex overflow-hidden min-h-0 relative">
                    <div className="w-12 bg-bg-darker/20 text-right pr-3 select-none py-6 border-r border-fg-muted/5 font-mono text-xs text-[#585b70] space-y-1 shrink-0">
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 font-mono text-xs md:text-sm custom-scrollbar min-h-0">
                      <div className="text-[#6c7086] italic mb-1">
                        {fileData.comment}
                      </div>
                      <div className="mb-4 text-[#cad3f5]">
                        <span className="text-[#c6a0f6]">import</span>{" "}
                        {fileData.language === "python" ? (
                          <>
                            theoretical_ai{" "}
                            <span className="text-[#c6a0f6]">as</span> ai
                          </>
                        ) : fileData.language === "cpp" ? (
                          <span className="text-[#a6e3a1]">
                            &lt;backend_telemetry.hpp&gt;
                          </span>
                        ) : (
                          <>
                            {"{ InteractiveWorkspace }"}{" "}
                            <span className="text-[#c6a0f6]">from</span>{" "}
                            <span className="text-[#a6e3a1]">'lazyvim-ui'</span>
                          </>
                        )}
                      </div>

                      <div className="mb-3 text-[#cad3f5]">
                        {fileData.language === "python" ? (
                          <>
                            <span className="text-[#c6a0f6]">competencies</span>{" "}
                            = <span className="text-[#89dceb]">{"{"}</span>
                          </>
                        ) : fileData.language === "cpp" ? (
                          <>
                            std::map&lt;std::string, Skill&gt;{" "}
                            <span className="text-[#c6a0f6]">backend</span> ={" "}
                            <span className="text-[#89dceb]">{"{"}</span>
                          </>
                        ) : fileData.language === "tsx" ? (
                          <>
                            <span className="text-[#c6a0f6]">const</span>{" "}
                            <span className="text-[#89b4fa]">Frontend</span> =
                            () =&gt;{" "}
                            <span className="text-[#c6a0f6]">{"{"}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[#c6a0f6]">const</span>{" "}
                            <span className="text-[#89b4fa]">
                              agenticSystems
                            </span>{" "}
                            = <span className="text-[#89dceb]">{"{"}</span>
                          </>
                        )}
                      </div>

                      {fileData.language === "tsx" && (
                        <div className="pl-4 text-[#cad3f5] mb-1">
                          <span className="text-[#c6a0f6]">return</span> (
                          <div className="pl-4 text-[#89dceb]">
                            &lt;
                            <span className="text-[#89b4fa]">Architecture</span>
                            &gt;
                          </div>
                        </div>
                      )}

                      {/* Code lines loop mapping */}
                      <div
                        className={`${fileData.language === "tsx" ? "pl-12" : "pl-6"} space-y-4`}
                      >
                        {fileData.skills.map((skill, index) => {
                          const isCursorActive =
                            vimMode === "INSERT" && cursorLineIdx === index;
                          const isHovered =
                            hoveredSkill?.name === skill.name || isCursorActive;

                          return (
                            <div
                              key={index}
                              onMouseEnter={() => {
                                if (vimMode === "NORMAL")
                                  setHoveredSkill(skill);
                              }}
                              onMouseLeave={() => {
                                if (vimMode === "NORMAL") setHoveredSkill(null);
                              }}
                              className={`transition-all duration-150 border-l-2 pl-3 -ml-3 cursor-pointer py-1 relative group ${
                                isHovered
                                  ? "border-accent-secondary bg-accent-secondary/5"
                                  : "border-transparent hover:border-accent-primary hover:bg-bg-dark/20"
                              }`}
                            >
                              {fileData.language === "tsx" ? (
                                <div className="text-[#cad3f5]">
                                  &lt;
                                  <span className="text-[#eed49f] font-bold">
                                    {skill.name}
                                  </span>{" "}
                                  <span className="text-[#89dceb]">level</span>=
                                  <span className="text-[#a6e3a1]">
                                    "{skill.level}"
                                  </span>{" "}
                                  {skill.project && (
                                    <>
                                      <span className="text-[#89dceb]">
                                        evidence
                                      </span>
                                      =
                                      <span className="text-[#a6e3a1]">
                                        "{skill.project}"
                                      </span>
                                    </>
                                  )}
                                  &nbsp;/&gt;
                                </div>
                              ) : fileData.language === "cpp" ? (
                                <div className="text-[#cad3f5]">
                                  <span className="text-[#89dceb]">{"{"}</span>
                                  <span className="text-[#eed49f] font-bold">
                                    "{skill.name}"
                                  </span>
                                  ,{" "}
                                  <span className="text-[#89dceb]">{"{"}</span>
                                  <span className="text-[#a6e3a1]">
                                    "{skill.level}"
                                  </span>
                                  ,{" "}
                                  <span className="text-[#a6e3a1]">
                                    "{skill.detail}"
                                  </span>
                                  {skill.project && (
                                    <>
                                      ,{" "}
                                      <span className="text-[#89b4fa]">
                                        "{skill.project}"
                                      </span>
                                    </>
                                  )}
                                  <span className="text-[#89dceb]">{"}"}</span>
                                  <span className="text-[#89dceb]">{"}"}</span>,
                                </div>
                              ) : (
                                <div className="text-[#cad3f5]">
                                  <span className="text-[#eed49f] font-bold">
                                    "{skill.name}"
                                  </span>
                                  :{" "}
                                  <span className="text-[#89dceb]">{"{"}</span>
                                  <div className="pl-6 space-y-0.5 text-[#cad3f5]/85">
                                    <div>
                                      <span className="text-[#89b4fa]">
                                        "level"
                                      </span>
                                      :{" "}
                                      <span className="text-[#a6e3a1]">
                                        "{skill.level}"
                                      </span>
                                      ,
                                    </div>
                                    <div>
                                      <span className="text-[#89b4fa]">
                                        "details"
                                      </span>
                                      :{" "}
                                      <span className="text-[#a6e3a1]">
                                        "{skill.detail}"
                                      </span>
                                      {skill.project && ","}
                                    </div>
                                    {skill.project && (
                                      <div>
                                        <span className="text-[#89b4fa]">
                                          "evidence"
                                        </span>
                                        :{" "}
                                        <span className="text-[#a6e3a1]">
                                          "{skill.project}"
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  <span className="text-[#89dceb]">{"}"}</span>,
                                </div>
                              )}

                              {isHovered && skill.project && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1.5 font-mono text-[10px] bg-bg-darker border border-accent-secondary/30 text-accent-secondary px-2 py-0.5 rounded shadow">
                                  <span className="animate-pulse font-bold text-accent-success">
                                    ●
                                  </span>{" "}
                                  <span>Verify by: {skill.project}</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {fileData.language === "tsx" && (
                        <div className="pl-4 text-[#cad3f5] mt-1">
                          <div className="pl-4 text-[#89dceb]">
                            &lt;/
                            <span className="text-[#89b4fa]">Architecture</span>
                            &gt;
                          </div>
                          );
                        </div>
                      )}

                      <div className="text-[#89dceb] mt-3">
                        {fileData.language === "tsx" ? (
                          <span className="text-[#c6a0f6]">{"};"}</span>
                        ) : (
                          <span>{"};"}</span>
                        )}
                      </div>

                      <div className="mt-4 flex items-center gap-1">
                        <span className="text-accent-secondary">~</span>
                        <span className="w-1.5 h-4 bg-accent-secondary animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Statusline */}
                  <div className="bg-[#1e1e2e]/90 text-fg text-xs select-none border-t border-fg-muted/10 h-8 flex items-center justify-between font-mono font-semibold relative flex-shrink-0">
                    <div className="flex items-center h-full gap-2">
                      <span
                        className={`px-3 h-full flex items-center font-bold text-bg-darker transition-colors ${
                          vimMode === "INSERT"
                            ? "bg-accent-warning"
                            : "bg-accent-primary"
                        }`}
                      >
                        {vimMode}
                      </span>
                      <span className="text-fg-muted text-[11px] hidden sm:inline">
                        {activeFile}
                      </span>
                    </div>

                    <div className="text-[11px] text-fg-muted animate-pulse hidden md:block">
                      {vimMode === "NORMAL"
                        ? "Press [ i ] to enter INSERT mode (Enables Arrow navigation)"
                        : "Use [ ↑ / ↓ ] keys to travel buffer. Press [ ESC ] to exit"}
                    </div>

                    <div className="flex items-center h-full divide-x divide-fg-muted/10 text-[11px] text-fg-muted">
                      <span className="px-3 h-full flex items-center">
                        {fileData.language}
                      </span>
                      <span className="px-3 h-full flex items-center hidden sm:flex">
                        utf-8
                      </span>
                      <span className="px-3 h-full flex items-center bg-bg-darker px-4">
                        {hoveredSkill ? "LSP Connected" : "LSP Idle"}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Status Diagnostic panel */}
                  <div className="bg-[#181825]/90 border-t border-fg-muted/10 px-5 py-3 h-12 flex items-center justify-between flex-shrink-0 font-mono text-[11px]">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-accent-secondary font-bold shrink-0">
                        {hoveredSkill ? "[LSP] Diagnostics:" : ":echo"}
                      </span>
                      {hoveredSkill ? (
                        <span className="text-fg-muted animate-fadeIn flex items-center gap-1.5 truncate">
                          <span className="text-accent-success shrink-0">
                            [1 Info]
                          </span>
                          <span className="truncate">
                            {hoveredSkill.name} is configured: "
                            {hoveredSkill.detail}."
                          </span>
                        </span>
                      ) : (
                        <span className="text-[#6c7086] truncate">
                          Hover over any skill block or enter INSERT mode to
                          travel file definitions.
                        </span>
                      )}
                    </div>

                    {hoveredSkill?.project && (
                      <button
                        onClick={() =>
                          handleScrollToProject(hoveredSkill.project)
                        }
                        className="px-2 py-0.5 text-[10px] shrink-0 font-bold border border-accent-success/20 bg-accent-success/5 text-accent-success rounded hover:bg-accent-success/15 hover:border-accent-success transition-all duration-200"
                      >
                        view_evidence_repo ({hoveredSkill.project})
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ========================================================================= */
              /* ============= SCREEN B: THE RECRUITER DIAGNOSTIC OUTPUT ================= */
              /* ========================================================================= */
              <motion.div
                key="spatial-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar h-full w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
                  {Object.entries(fileBuffers).map(([fileName, data]) => (
                    <div
                      key={fileName}
                      className="bg-bg-darker/70 border border-fg-muted/5 rounded-xl p-5 shadow-lg hover:border-accent-secondary/30 transition-all duration-300"
                    >
                      {/* Domain Header */}
                      <div className="flex items-center justify-between border-b border-fg-muted/10 pb-3 mb-4">
                        <h3 className="text-lg font-mono font-bold text-accent-primary flex items-center gap-2">
                          <VscFileCode className="text-sm text-accent-secondary" />
                          {fileName
                            .substring(3)
                            .replace(".py", "")
                            .replace(".js", "")
                            .replace(".cpp", "")
                            .replace(".tsx", "")
                            .toUpperCase()
                            .replace(/_/g, " ")}
                        </h3>
                        <span className="text-[10px] font-mono text-fg-muted border border-fg-muted/10 rounded px-2 py-0.5 uppercase">
                          {data.language}
                        </span>
                      </div>

                      {/* Spatial grid of competencies with high-quality icons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {data.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="bg-bg-dark/40 border border-fg-muted/5 rounded-lg p-3 flex flex-col justify-between hover:bg-bg-dark/80 hover:border-accent-primary/20 transition-all duration-200 relative group"
                          >
                            <div className="flex items-start gap-2.5">
                              {/* Big prominent icon */}
                              <div className="text-2xl text-accent-secondary pt-0.5 shrink-0">
                                {skill.icon}
                              </div>
                              <div className="space-y-0.5 truncate">
                                <span className="font-mono font-bold text-xs md:text-sm text-fg group-hover:text-accent-secondary transition-colors truncate block">
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono text-accent-success uppercase font-semibold">
                                  [{skill.level}]
                                </span>
                              </div>
                            </div>

                            {/* Brief Description */}
                            <p className="text-[11px] font-mono text-fg-muted leading-normal mt-2">
                              {skill.detail}
                            </p>

                            {/* Hover evidence pointer */}
                            {skill.project && (
                              <div className="mt-3 pt-2 border-t border-fg-muted/5 flex items-center justify-between">
                                <span className="text-[9px] font-mono text-fg-muted shrink-0">
                                  // verified_evidence
                                </span>
                                <button
                                  onClick={() =>
                                    handleScrollToProject(skill.project)
                                  }
                                  className="text-[9px] font-mono text-accent-secondary hover:text-accent-success transition-colors"
                                >
                                  [ {skill.project} ]
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
