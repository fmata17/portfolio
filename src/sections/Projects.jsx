import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'Inventory Recommender',
    description:
      'An AI-powered tool for small businesses to compare and restock items from multiple vendors based on pricing, terms, and shipping.',
    github: 'https://github.com/fredymata/inventory-recommender',
  },
  {
    name: 'Portfolio V2',
    description:
      'This very portfolio, built with React, Vite, Tailwind CSS, and scroll snapping — focused on simplicity and dev aesthetics.',
    github: 'https://github.com/fredymata/portfolio-v2',
  },
  {
    name: 'Vet AI Companion',
    description:
      'A Flutter app that generates pet avatars and provides an AI-powered dashboard for veterinary clinics.',
    github: '',
  },
  {
    name: 'ML Lab',
    description:
      'A collection of classical and modern machine learning experiments: logistic regression, decision trees, and neural nets.',
    github: 'https://github.com/fredymata/ml_lab',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-screen snap-start bg-gray-950 text-white flex flex-col items-center justify-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-400 mb-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ name, description, github }) {
  return (
    <div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-green-300 mb-2">{name}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      {github && (
        <div className="mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-green-400 hover:underline"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}
