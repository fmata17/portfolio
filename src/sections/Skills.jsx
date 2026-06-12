import { useState, useEffect, useRef } from "react";

import { skillGroups } from "../data/skillGroups";
import { skillAccents } from "../config/skillAccents";

import SkillsHeader from "../components/Skills/SkillsHeader";
import SkillsGroupCard from "../components/Skills/SkillsGroupCard";
import SkillDetailCard from "../components/Skills/SkillDetailCard";

function getInitialSelection() {
  const group = skillGroups[0];

  return {
    ...group.skills[0],
    groupId: group.id,
    groupTitle: group.title,
    groupLabel: group.label,
    accent: group.accent,
  };
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(getInitialSelection);
  const [isLocked, setIsLocked] = useState(false);
  const [isHoveringArea, setIsHoveringArea] = useState(false);
  const lockTimeoutRef = useRef(null);

  const activeAccent = skillAccents[selectedSkill.accent];

  const updateSelectedSkill = (group, skill) => {
    setSelectedSkill({
      ...skill,
      groupId: group.id,
      groupTitle: group.title,
      groupLabel: group.label,
      accent: group.accent,
    });
  };

  // Click locks the selection for 5 seconds
  const handleSkillClick = (group, skill) => {
    updateSelectedSkill(group, skill);
    setIsLocked(true);

    // Clear any existing timeout so clicks reset the 5 second timer
    if (lockTimeoutRef.current) {
      clearTimeout(lockTimeoutRef.current);
    }

    // Set a timeout to unlock after 5 seconds
    lockTimeoutRef.current = setTimeout(() => {
      setIsLocked(false);
    }, 5000);
  };

  // Hover only updates selection if not locked
  const handleSkillHover = (group, skill) => {
    if (!isLocked) {
      updateSelectedSkill(group, skill);
    }
  };

  // Random cycling effect every 2.5 seconds
  useEffect(() => {
    let interval;

    if (!isHoveringArea && !isLocked) {
      interval = setInterval(() => {
        const randomGroupIndex = Math.floor(Math.random() * skillGroups.length);
        const group = skillGroups[randomGroupIndex];
        const randomSkillIndex = Math.floor(
          Math.random() * group.skills.length,
        );
        const skill = group.skills[randomSkillIndex];

        updateSelectedSkill(group, skill);
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHoveringArea, isLocked]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    };
  }, []);

  // Scroll to project section
  // TODO go to specific project if possible instead of just top of section
  const handleScrollToProject = (projectId) => {
    // 1. Dispatch custom event to notify Projects section to reset filters and open modal
    window.dispatchEvent(new CustomEvent("openProject", { detail: projectId }));

    // 2. Allow 50ms for React to update the DOM (in case the project was hidden by a filter)
    setTimeout(() => {
      const projectElement = document.getElementById(`project-${projectId}`);
      const projectsSection = document.getElementById("projects");

      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        projectsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <section
      id="skills"
      className="h-screen max-h-screen
                overflow-hidden bg-bg-dark
                text-fg flex items-start justify-center
                pt-12 md:pt-16
                px-4 md:px-8
                relative
                snap-start
                hide-scrollbar"
    >
      <div className="w-full max-w-8xl h-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] flex flex-col min-h-0 gap-2 sm:gap-4 md:gap-6">
        {/* Header */}
        <SkillsHeader />

        <div className="min-h-0 grid 
                        grid-rows-[minmax(0,1fr)_76px]
                        sm:grid-rows-[minmax(0,1fr)_110px]
                        md:grid-rows-[minmax(0,1fr)_140px]
                        lg:grid-rows-1
                        lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.32fr)]
                        gap-2 lg:gap-4">
          {/* Skill Groups */}
          <div
            className="min-h-0 grid
                      grid-cols-2 grid-rows-2
                      xl:grid-cols-4 xl:grid-rows-1
                      gap-2 lg:gap-3"
            onMouseEnter={() => setIsHoveringArea(true)}
            onMouseLeave={() => setIsHoveringArea(false)}
          >
            {skillGroups.map((group) => (
              <SkillsGroupCard
                key={group.id}
                group={group}
                accent={skillAccents[group.accent]}
                selectedSkill={selectedSkill}
                onSkillClick={handleSkillClick}
                onSkillHover={handleSkillHover}
              />
            ))}
          </div>
          {/* Detailed Skill Card */}
          <SkillDetailCard
            selectedSkill={selectedSkill}
            activeAccent={activeAccent}
            onViewProject={handleScrollToProject}
          />
        </div>
      </div>
    </section>
  );
}
