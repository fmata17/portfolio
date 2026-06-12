import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { containerVariants } from "../config/projectAnimations";

import truncateDescription from "../utils/truncateDescription";
import useEscapeKey from "../hooks/useEscapeKey";
import useSectionReset from "../hooks/useSectionReset";

import { projects } from "../data/projects";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import ProjectCard from "../components/Projects/ProjectCard";
import ProjectDetail from "../components/Projects/ProjectDetail";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const [expandedCardId, setExpandedCardId] = useState(null);
  const sectionRef = useRef(null);
  const scrollContainerRefs = useRef({});
  const openAfterResetRef = useRef(false);
  const pendingProjectIdRef = useRef(null);

  // Escape key handler to close expanded project cards
  useEscapeKey(() => setExpandedCardId(null));

  // Section Reset to ensure consistent state when re-entering the section
  const resetProjects = useCallback(() => {
    setFilter("All");

    if (openAfterResetRef.current) {
      const projectId = pendingProjectIdRef.current;
      openAfterResetRef.current = false;
      pendingProjectIdRef.current = null;
      setExpandedCardId(projectId ?? null);
      return;
    }

    setExpandedCardId(null);
  }, []);
  useSectionReset(sectionRef, resetProjects);

  // Case-insensitive filtering to guard against data discrepancies
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.status.toLowerCase() === filter.toLowerCase();
  });

  // Toggle function to expand/collapse project cards
  const toggleExpand = (projectId) => {
    setExpandedCardId(expandedCardId === projectId ? null : projectId);
  };

  // Currently active project for the detailed project view
  const activeProject = projects.find((p) => p.id === expandedCardId);

  // Listen for 'openProject' events fired from external components (like Skills)
  useEffect(() => {
    const handleOpenProject = (e) => {
      const projectId = e.detail;

      pendingProjectIdRef.current = projectId;
      openAfterResetRef.current = true;

      setFilter("All"); // Reset filter to ensure the project isn't hidden
      setExpandedCardId(projectId); // Open the modal
    };

    window.addEventListener("openProject", handleOpenProject);
    return () => window.removeEventListener("openProject", handleOpenProject);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="h-screen max-h-screen 
                overflow-hidden bg-bg-darker 
                text-fg flex items-start justify-center
                pt-12 xl:pt-16
                px-4 md:px-8
                relative
                snap-start
                "
    >
      <div className="w-full max-w-8xl max-h-[90vh] flex flex-col min-h-0 space-y-6">
        {/* Header and Filters Section */}
        <ProjectsHeader
          filter={filter}
          setFilter={setFilter}
          onFilterChange={() => setExpandedCardId(null)}
        />

        {/* Dynamic Scrollable Grid - Bound strictly inside screen limits */}
        <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 items-start w-full"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onExpand={toggleExpand}
                getFirstSentence={truncateDescription}
              />
            ))}
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
      <ProjectDetail
        project={activeProject}
        isOpen={!!expandedCardId}
        onClose={() => setExpandedCardId(null)}
        scrollContainerRefs={scrollContainerRefs}
      />
    </section>
  );
}
