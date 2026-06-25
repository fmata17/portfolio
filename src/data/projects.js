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
    id: "rl-guardian",
    name: "RL-Guardian",
    deepDescription:
      "A model-free reinforcement learning project that turns a custom 2D shooter game into a trainable environment for autonomous gameplay. The system exposes game-state observations, discrete actions, and reward feedback so an agent can learn through repeated play.",
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
    id: "ml-lab",
    name: "ML & Deep Learning Lab",
    deepDescription:
      "A machine learning and deep learning sandbox for experimenting with model architectures, training pipelines, and performance tradeoffs. The project includes scikit-learn baselines, PyTorch neural networks, GPU-accelerated training, and experiment tracking to compare model performance on tabular, image, and audio datasets.",
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
      "A browser-playable 2D arcade shooter built from scratch in Python with Pygame, focused on clean object-oriented game architecture and responsive gameplay systems. The project includes frame-rate independent movement, collision handling, enemy wave spawning, and player controls, then compiles to WebAssembly with Pygbag for web deployment.",
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
      "A data structures and algorithms archive for strengthening problem-solving patterns in Python and C++. The project focuses on optimized implementations, complexity analysis, and reusable strategies for approaching common technical interview problems.",
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
      "A responsive frontend portfolio built with React, Vite, Tailwind CSS, and Framer Motion, inspired by retro desktop interfaces and modern code-editor themes. It uses reusable components, custom Tailwind styling, smooth micro-interactions, and clean layouts that adapt across desktop and mobile screens.",
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
  // {
  //   id: "PCQAI",
  //   name: "PCQAI",
  //   deepDescription:
  //     "Designed a novel pseudo-random content generation algorithm leveraging transformer-based architectures. Aimed to produce high-quality, contextually relevant outputs for applications in creative writing and procedural content generation.",
  //   github: "https://github.com/fmata17/pcqai",
  //   tech: [
  //     {
  //       icon: SiPython,
  //       name: "Python",
  //     },
  //     {
  //       icon: SiPytorch,
  //       name: "PyTorch",
  //     },
  //   ],
  //   status: "In Progress",
  //   progress: 40,
  // },
];
