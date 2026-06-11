import {
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

export const projects = [
  {
    id: "ml-lab",
    name: "Applied ML & Deep Learning Sandbox",
    deepDescription:
      "Engineered and trained diverse models ranging from baseline scikit-learn classifiers (SVMs, Random Forests) to complex PyTorch neural networks (CNNs, VAEs, and Transformers). Preprocessed and analyzed tabular (Titanic, Iris), image (MNIST, CelebA), and audio (Musical) datasets. Leveraged CUDA for GPU-accelerated training, tracked architectural experiments with CometML/Opik, and performed rigorous comparative analysis of model interpretability versus predictive performance.",
    github: "https://github.com/fmata17/ml_lab",
    tech: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiPytorch,
        name: "PyTorch",
      },
      {
        icon: SiScikitlearn,
        name: "Scikit Learn",
      },
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
    tech: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiVite,
        name: "Vite",
      },
    ],
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
    tech: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiCplusplus,
        name: "C++",
      },
    ],
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
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        icon: SiVite,
        name: "Vite",
      },
    ],
    status: "Complete",
    progress: 100,
  },
  {
    id: "rl-guardian",
    name: "RL-Guardian",
    deepDescription:
      "Developed a reinforcement learning framework for autonomous decision-making in complex environments. Implemented Q-learning and policy gradient methods to train agents in simulated scenarios.",
    github: "https://github.com/fmata17/rl-guardian",
    tech: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiPytorch,
        name: "PyTorch",
      },
    ],
    status: "In Progress",
    progress: 60,
  },
  {
    id: "PCQAI",
    name: "PCQAI",
    deepDescription:
      "Designed a novel pseudo-random content generation algorithm leveraging transformer-based architectures. Aimed to produce high-quality, contextually relevant outputs for applications in creative writing and procedural content generation.",
    github: "https://github.com/fmata17/pcqai",
    tech: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiPytorch,
        name: "PyTorch",
      },
    ],
    status: "In Progress",
    progress: 40,
  },
];