import {
  VscCircuitBoard,
  VscGraph,
  VscLayers,
  VscServerProcess,
} from "react-icons/vsc";

import {
  SiCplusplus,
  SiHuggingface,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiWebassembly,
} from "react-icons/si";

export const skillGroups = [
  {
    id: "ml-core",
    title: "Deep Learning",
    label: "ml.core",
    icon: VscGraph,
    accent: "primary",
    summary: "Model training, experimentation, and applied ML workflows.",
    skills: [
      {
        name: "PyTorch",
        icon: SiPytorch,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Training neural networks for image, tabular, and representation learning experiments.",
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        level: "Intermediate",
        project: "ml-lab",
        detail:
          "Structuring training workflows, testing baseline models, and comparing deep learning approaches.",
      },
      {
        name: "Gymnasium",
        icon: SiPython,
        level: "Advanced",
        project: "rl-guardian",
        detail:
          "Designing custom reinforcement learning environments with observations, actions, rewards, and episode control.",
      },
      {
        name: "Stable-Baselines3",
        icon: SiPython,
        level: "Advanced",
        project: "rl-guardian",
        detail:
          "Training and evaluating model-free reinforcement learning agents for autonomous gameplay.",
      },
      {
        name: "scikit-learn",
        icon: SiScikitlearn,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Building classical ML baselines with preprocessing, feature engineering, and model comparison.",
      },
      {
        name: "Hugging Face",
        icon: SiHuggingface,
        level: "Intermediate",
        project: "ml-lab",
        detail:
          "Using pretrained models, tokenizers, and transformer pipelines for applied NLP and ML experiments.",
      },
    ],
  },
  {
    id: "agent-runtime",
    title: "Agentic Systems",
    label: "agents.runtime",
    icon: VscCircuitBoard,
    accent: "success",
    summary:
      "LLM tools, orchestration patterns, tracing, and retrieval workflows.",
    skills: [
      {
        name: "OpenAI Agents SDK",
        icon: SiOpenai,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Prototyping tool-calling agents with structured outputs, handoffs, and multi-step execution flows.",
      },
      {
        name: "crewAI",
        icon: SiPython,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Building role-based agent workflows for task decomposition, coordination, and multi-agent execution.",
      },
      {
        name: "LangChain",
        icon: SiLangchain,
        level: "Intermediate",
        project: "ml-lab",
        detail:
          "Prototyping chains, retrieval workflows, and LLM-powered application patterns.",
      },
      {
        name: "Model Context Protocol",
        icon: SiReact,
        level: "Intermediate",
        project: "ml-lab",
        detail:
          "Connecting AI systems to external tools and context through standardized interface patterns.",
      },
      {
        name: "Opik",
        icon: SiPython,
        level: "Intermediate",
        project: "rl-guardian",
        detail:
          "Tracking agent runs, prompts, latency, and behavior during LLM workflow testing.",
      },
      {
        name: "Long-Term Memory",
        icon: SiPython,
        level: "Intermediate",
        project: "ml-lab",
        detail:
          "Experimenting with persistent context, retrieval patterns, and memory-aware agent workflows.",
      },
    ],
  },
  {
    id: "backend-services",
    title: "Backend Systems",
    label: "backend.services",
    icon: VscServerProcess,
    accent: "warning",
    summary: "APIs, databases, application logic, and performance-aware code.",
    skills: [
      {
        name: "C++ (STL)",
        icon: SiCplusplus,
        level: "Advanced",
        project: "algorithmic-foundations",
        detail:
          "Implementing data structures and algorithms with attention to runtime, memory usage, and correctness.",
      },
      {
        name: "Python / FastAPI",
        icon: SiPython,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Building Python services, model-facing APIs, and backend logic for applied ML workflows.",
      },
      {
        name: "Node.js (Express)",
        icon: SiNodedotjs,
        level: "Intermediate",
        project: "portfolio",
        detail:
          "Developing lightweight API routes, request handling, and service logic for full-stack JavaScript applications.",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Intermediate",
        project: "ml-lab",
        detail:
          "Designing relational data models, writing SQL queries, and organizing application data.",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        level: "Intermediate",
        project: "algorithmic-foundations",
        detail:
          "Using lightweight local databases for prototypes, scripts, and small application workflows.",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
        project: "portfolio",
        detail:
          "Modeling flexible document data for prototypes, application state, and rapid iteration.",
      },
    ],
  },
  {
    id: "frontend-ui",
    title: "Interface Layer",
    label: "frontend.ui",
    icon: VscLayers,
    accent: "secondary",
    summary:
      "Responsive interfaces, reusable components, motion, and browser deployment.",
    skills: [
      {
        name: "React / Vite",
        icon: SiReact,
        level: "Advanced",
        project: "portfolio",
        detail:
          "Building responsive interfaces with reusable components, stateful UI, and fast development tooling.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: "Intermediate",
        project: "portfolio",
        detail:
          "Defining component props, project data models, and safer frontend application contracts.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Advanced",
        project: "portfolio",
        detail:
          "Creating custom responsive layouts, reusable styling patterns, and polished UI systems.",
      },
      {
        name: "Framer Motion",
        icon: SiReact,
        level: "Advanced",
        project: "portfolio",
        detail:
          "Adding smooth micro-interactions, transitions, and motion states that improve interface feel.",
      },
      {
        name: "Responsive Design",
        icon: VscLayers,
        level: "Advanced",
        project: "portfolio",
        detail:
          "Adapting layouts across desktop, tablet, and mobile viewports with clean breakpoint behavior.",
      },
    ],
  },
];
