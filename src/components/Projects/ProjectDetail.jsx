import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import {
  backdropVariants,
  modalVariants,
} from "../../config/projectAnimations";

import ProjectTag from "./ProjectTag";
import ProjectProgressBar from "./ProjectProgressBar";
import ProjectDetailMediaGallery from "./ProjectDetailMediaGallery";

export default function ProjectDetail({
  project,
  isOpen,
  onClose,
  scrollContainerRefs,
}) {
  if (!project) return null;

  const progressStyles =
    project.progress === 100
      ? {
          badge:
            "bg-accent-success/10 border border-accent-success/20 text-accent-success",
          bar: "bg-accent-success",
        }
      : project.progress >= 70
        ? {
            badge:
              "bg-accent-warning/10 border border-accent-warning/20 text-accent-warning",
            bar: "bg-accent-warning",
          }
        : project.progress >= 30
          ? {
              badge:
                "bg-accent-peach/10 border border-accent-peach/20 text-accent-peach",
              bar: "bg-accent-peach",
            }
          : {
              badge:
                "bg-accent-error/10 border border-accent-error/20 text-accent-error",
              bar: "bg-accent-error",
            };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose} // Close modal when clicking on backdrop
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-bg-darker border border-accent-secondary rounded-xl overflow-hidden max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-5 py-4 bg-bg-darker/80 backdrop-blur flex-shrink-0">
              <span className="text-xs text-accent-secondary uppercase tracking-widest font-bold">
                // project_diagnostics
              </span>

              <button
                onClick={onClose}
                className="text-xs text-accent-secondary hover:text-accent-error px-2 py-0.5 border border-accent-secondary/15 rounded transition-colors"
              >
                [ close_x ]
              </button>
            </div>

            {/* Project Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {/* Meta Row */}
              <div className="flex items-center justify-between w-full">
                {/* Status Tag */}
                <ProjectTag
                  status={project.status}
                  progress={project.progress}
                />
                <div className="flex items-center gap-2.5 text-base md:text-lg text-accent-secondary">
                  {project.tech.map(({ icon: Icon, name }) => (
                    <span key={name}>{Icon}</span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-bold text-fg">
                  {project.name}
                </h3>

                {/* Progress Bar */}
                <ProjectProgressBar
                  progress={project.progress}
                  label="Progress Tracker"
                  className="space-y-1"
                />
              </div>

              {/* Deep Description */}
              <div className="space-y-2">
                <h4 className="text-accent-secondary text-xs font-bold uppercase tracking-wider">
                  Implementation & Technical Context
                </h4>

                <p className="text-fg-muted text-xs md:text-sm leading-relaxed whitespace-pre-line">
                  {project.deepDescription}
                </p>
              </div>

              {/* Media Gallery Track (Only renders if Media is Available) */}
              <ProjectDetailMediaGallery
                media={project.media}
                projectId={project.id}
                scrollContainerRefs={scrollContainerRefs}
              />

              {/* Footer Controls (Github Direct Access) */}
              <div className="pt-2 border-t border-fg-muted/5 flex items-center justify-between">
                <a
                  href={project.github}
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
  );
}
