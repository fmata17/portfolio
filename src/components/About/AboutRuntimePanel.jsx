import { motion } from "framer-motion";
import { useRef } from "react";
import { VscTerminal } from "react-icons/vsc";

import { aboutRuntimeScrollConfig } from "../../config/aboutRuntimeScroll";
import useAutoScrollCycle from "../../hooks/useAutoScrollCycle";
import AboutModeCard from "./AboutModeCard";
import AboutStatusRow from "./AboutStatusRow";
import AboutSummaryGrid from "./AboutSummaryGrid";

export default function AboutRuntimePanel({ modes, profileRows, sectionRef }) {
  const scrollContainerRef = useRef(null);

  useAutoScrollCycle({
    scrollContainerRef,
    sectionRef,
    config: aboutRuntimeScrollConfig,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="md:col-span-7 xl:col-span-8 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-dark/65 backdrop-blur-md flex flex-col min-h-0"
    >
      <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 md:px-5 py-3 bg-bg-darker/80 flex-shrink-0 select-none">
        <span className="text-3xs md:text-xs font-mono text-accent-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
          <VscTerminal className="shrink-0" /> profile.runtime
        </span>
        <span className="text-3xs md:text-xs font-mono text-fg-muted">
          ready_for: complex_work
        </span>
      </div>

      <div
        ref={scrollContainerRef}
        tabIndex={0}
        aria-label="Profile runtime details"
        className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-2 lg:p-3 flex flex-col gap-1 md:gap-2"
      >
        <div className="shrink-0 space-y-1.5 md:space-y-2">
          <p className="text-accent-primary text-2xs md:text-xs xl:text-sm font-bold leading-snug">
            I build where machine learning, product engineering, and systems
            thinking overlap.
          </p>
          <p className="text-fg-muted text-3xs md:text-xs xl:text-sm leading-relaxed max-w-4xl">
            My value is range with depth: I can investigate a model, build the
            interface around it, wire the backend path, and explain the
            tradeoffs without losing sight of the user or the team shipping it.
          </p>
        </div>

        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-2">
          {modes.map((mode) => (
            <AboutModeCard key={mode.label} mode={mode} />
          ))}
        </div>

        <AboutStatusRow />

        <AboutSummaryGrid rows={profileRows} />

        <div className="mt-auto shrink-0 border-t border-fg-muted/10
                        text-3xs md:text-xs xl:text-sm
                        text-fg-muted leading-relaxed">
          Personal note: I bring curiosity, discipline, and a builder's bias
          into every room I join.
        </div>
      </div>
    </motion.div>
  );
}
