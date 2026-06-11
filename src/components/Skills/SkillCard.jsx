export default function SkillCard({
  skill,
  isSelected,
  accent,
  onClick,
  onHover,
}) {
  const SkillIcon = skill.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      className={`group min-h-0 overflow-hidden
                rounded-md border text-left
                px-1 md:px-4
                py-1 
                leading-none transition-all
                duration-200 ${
        isSelected
          ? `${accent.bg} ${accent.border}`
          : `border-fg-muted/10 bg-[#090d1a]/80 ${accent.hover}`
      }`}
    >
      <div className="flex items-center gap-1.5 md:gap-2 min-w-0 mb-1 lg:mb-3">
        <span
          className={`shrink-0 leading-none
                      text-2xs md:text-lg lg:text-2xl
                      transition-colors ${
            isSelected
              ? accent.text
              : "text-fg-muted group-hover:text-fg"
          }`}
        >
          <SkillIcon />
        </span>

        <span className="min-w-0 whitespace-nowrap
                        text-2xs md:text-xs lg:text-sm
                        font-bold leading-none 
                        sm:leading-tight text-fg">
          {skill.name}
        </span>
      </div>

      <span className="block truncate
                      text-3xs md:text-2xs lg:text-xs
                      leading-none text-accent-secondary
                      tracking-wide ml-3.5">
        [ {skill.project} ]
      </span>
    </button>
  );
}