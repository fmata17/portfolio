import { AnimatePresence, motion } from "framer-motion";

export default function SkillDetailCard({
  selectedSkill,
  activeAccent,
  onViewProject,
}) {
  const SelectedIcon = selectedSkill.icon;

  return (
    <aside
      className="
        min-h-[6rem] md:min-h-[8rem]
        rounded-xl
        border border-accent-primary/20
        bg-[#0d1324]
        shadow-md shadow-slate-950/30
        px-3 py-2 sm:p-4 lg:p-5
        overflow-hidden
        flex flex-col
      "
    >
      {/* Reserved Content Area */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedSkill.groupId}-${selectedSkill.name}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="h-full flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`shrink-0 text-xl sm:text-2xl lg:text-3xl ${activeAccent.text}`}
                >
                  <SelectedIcon />
                </span>

                <div className="min-w-0">
                  <h3 className="text-xs sm:text-lg lg:text-2xl font-bold text-fg leading-tight break-words">
                    {selectedSkill.name}
                  </h3>

                  <p className="text-[9px] sm:text-2xs md:text-xs text-fg-muted">
                    {selectedSkill.groupLabel}
                  </p>
                </div>
              </div>

              <span
                className={`
                  shrink-0 rounded border
                  px-1.5 py-0.5
                  text-[8px] sm:text-2xs
                  ${activeAccent.bg}
                  ${activeAccent.border}
                  ${activeAccent.text}
                `}
              >
                {selectedSkill.level}
              </span>
            </div>

            {/* Summary */}
            <div>
              <p
                className="text-2xs md:text-sm lg:text-md
                            text-fg-muted leading-snug lg:leading-relaxed"
              >
                {selectedSkill.detail}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fixed Footer */}
      <div className="sm:pt-3 flex justify-end flex-shrink-0">
        <button
          type="button"
          onClick={() => onViewProject(selectedSkill.project)}
          className={`
            rounded border
            px-2 py-0.5
            sm:px-3 sm:py-1
            text-[8px] sm:text-xs md:text-sm
            transition-colors
            ${activeAccent.border}
            ${activeAccent.text}
            hover:bg-accent-primary
            hover:text-bg
          `}
        >
          [ view {selectedSkill.project} ]
        </button>
      </div>
    </aside>
  );
}
