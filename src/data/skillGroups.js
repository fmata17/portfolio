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
    summary: "Modeling, experiments, and applied ML pipelines.",
    skills: [
      {
        name: "PyTorch",
        icon: SiPytorch,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Optimizing latent-space autoencoders and CNN feature pipelines.",
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        level: "Intermediate",
        project: "ml-lab",
        detail: "Structuring static graphs and multi-run regression models.",
      },
      {
        name: "Gymnasium",
        icon: SiPython,
        level: "Advanced",
        project: "rl-guardian",
        detail: "Formulating custom state-action-reward training environments.",
      },
      {
        name: "Stable-Baselines3",
        icon: SiPython,
        level: "Advanced",
        project: "rl-guardian",
        detail:
          "Deploying policy networks, DQN checkpoints, and evaluation loops.",
      },
      {
        name: "scikit-learn",
        icon: SiScikitlearn,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Feature engineering, scaling, and classical baseline modeling.",
      },
      {
        name: "Hugging Face",
        icon: SiHuggingface,
        level: "Intermediate",
        project: "ml-lab",
        detail: "Tokenizer pipelines and sequence classification workflows.",
      },
    ],
  },
  {
    id: "agent-runtime",
    title: "Agentic Systems",
    label: "agents.runtime",
    icon: VscCircuitBoard,
    accent: "success",
    summary: "Tool use, orchestration, memory, and observability.",
    skills: [
      {
        name: "OpenAI Agents SDK",
        icon: SiOpenai,
        level: "Advanced",
        project: "rl-guardian",
        detail:
          "Managing handoffs, tools, shared context, and multi-agent flows.",
      },
      {
        name: "crewAI",
        icon: SiPython,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Constructing hierarchical task structures for collaborative agents.",
      },
      {
        name: "LangChain",
        icon: SiLangchain,
        level: "Intermediate",
        project: "ml-lab",
        detail: "Chaining prompt logic and semantic retrieval workflows.",
      },
      {
        name: "Model Context Protocol",
        icon: SiReact,
        level: "Advanced",
        project: "portfolio",
        detail: "Designing secure MCP gateways for unified tool schemas.",
      },
      {
        name: "Opik",
        icon: SiPython,
        level: "Advanced",
        project: "ml-lab",
        detail:
          "Tracing agent decisions, monitoring latency, and tracking runs.",
      },
      {
        name: "Long-Term Memory",
        icon: SiPython,
        level: "Intermediate",
        project: "rl-guardian",
        detail:
          "Implementing persistent state vectors and memory retrieval layers.",
      },
    ],
  },
  {
    id: "backend-services",
    title: "Backend Systems",
    label: "backend.services",
    icon: VscServerProcess,
    accent: "warning",
    summary: "APIs, storage engines, realtime loops, and low-level logic.",
    skills: [
      {
        name: "C++ (STL)",
        icon: SiCplusplus,
        level: "Advanced",
        project: "cs-foundations",
        detail:
          "Building custom data structures, algorithms, and memory-aware code.",
      },
      {
        name: "Python / FastAPI",
        icon: SiPython,
        level: "Advanced",
        project: "galactic-guardian",
        detail:
          "Routing concurrent requests and high-frequency WebSocket streams.",
      },
      {
        name: "Node.js (Express)",
        icon: SiNodedotjs,
        level: "Intermediate",
        project: "portfolio",
        detail: "Developing event-driven APIs and service boundaries.",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Intermediate",
        project: "ml-lab",
        detail: "Designing relational schemas, indexes, and query paths.",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        level: "Intermediate",
        project: "cs-foundations",
        detail: "Structuring local lightweight storage for durable app state.",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
        project: "portfolio",
        detail: "Modeling flexible document schemas for unstructured tracking.",
      },
    ],
  },
  {
    id: "frontend-ui",
    title: "Interface Layer",
    label: "frontend.ui",
    icon: VscLayers,
    accent: "secondary",
    summary: "Composable UI systems, motion, and browser architecture.",
    skills: [
      {
        name: "React / Vite",
        icon: SiReact,
        level: "Advanced",
        project: "portfolio",
        detail:
          "Composing modular layouts, render scopes, and stateful interfaces.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: "Intermediate",
        project: "portfolio",
        detail:
          "Setting explicit interfaces across component and data contracts.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Advanced",
        project: "portfolio",
        detail:
          "Building tiled responsive layouts with viewport-aware constraints.",
      },
      {
        name: "Framer Motion",
        icon: SiReact,
        level: "Advanced",
        project: "portfolio",
        detail: "Designing spring motion, exit states, and layout transitions.",
      },
      {
        name: "WebAssembly (WASM)",
        icon: SiWebassembly,
        level: "Advanced",
        project: "galactic-guardian",
        detail: "Cross-compiling engine loops for browser-based sandboxes.",
      },
    ],
  },
];
