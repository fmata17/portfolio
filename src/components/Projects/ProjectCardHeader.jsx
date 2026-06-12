import { motion } from "framer-motion";

import ProjectTag from "./ProjectTag";
import ProjectProgressBar from "./ProjectProgressBar";
import ProjectCardTech from "./ProjectCardTech";

export default function ProjectCardHeader({ project }) {
  return (
    <div className="flex items-center justify-between w-full gap-4 mb-1 xl:mb-3">
      {/* Status */}
      <ProjectTag status={project.status} progress={project.progress} />

      {/* Progress */}
      <ProjectProgressBar
        progress={project.progress}
        className="flex-1 max-w-sm space-y-1"
      />

      {/* Tech Stack */}
      <ProjectCardTech tech={project.tech} />
    </div>
  );
}
