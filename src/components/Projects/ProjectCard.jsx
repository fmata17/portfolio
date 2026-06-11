import { motion } from "framer-motion";

import ProjectCardHeader from "./ProjectCardHeader";
import ProjectCardContent from "./ProjectCardContent";

import { cardVariants } from "../../config/projectAnimations";

export default function ProjectCard({ project, onExpand, getFirstSentence }) {
  return (
    <motion.div
      id={`project-${project.id}`} // <-- Added this ID so the scroll function can find it
      layout="position"
      variants={cardVariants}
      animate="show"
      transition={{
        layout: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className="bg-[#0d1324] backdrop-blur-sm border rounded-xl 
                overflow-hidden shadow-md shadow-slate-950/30 border-accent-primary/70 
                hover:border-accent-secondary/50 hover:bg-[#10172a] lg:min-h-[220px]"
    >
      <div className="px-3 py-2 flex flex-col">
        {/* Header */}
        <ProjectCardHeader project={project} />

        {/* Name + Description */}
        <ProjectCardContent
          project={project}
          onExpand={onExpand}
          getFirstSentence={getFirstSentence}
        />

        {/* Desktop Read More */}
        <div className="hidden sm:flex justify-end w-full mt-2">
          <button
            onClick={() => onExpand(project.id)}
            className="px-2.5 py-1 text-2xs md:text-xs lg:text-sm text-accent-secondary border border-accent-secondary/15 rounded hover:text-accent-success hover:border-accent-success/50 transition-colors"
          >
            [ read more ]
          </button>
        </div>
      </div>
    </motion.div>
  );
}
