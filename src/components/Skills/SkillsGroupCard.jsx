import SkillCard from "./SkillCard";

export default function SkillsGroupCard({
  group,
  accent,
  selectedSkill,
  onSkillClick,
  onSkillHover,
}) {
  const GroupIcon = group.icon;

  return (
    <div
      className="min-h-0 overflow-hidden
                    rounded-xl border
                    border-accent-primary/15 bg-[#0d1324]
                    shadow-md shadow-slate-950/30
                    flex flex-col"
    >
      <div className="flex-shrink-0 border-b border-fg-muted/10 px-2 pt-1.5 lg:p-3">
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1.5 min-w-0 ${accent.text}`}>
            <span className="text-sm sm:text-lg md:text-xl shrink-0">
              <GroupIcon />
            </span>

            <h3 className="text-2xs md:text-sm lg:text-lg font-bold truncate text-fg">
              {group.title}
            </h3>
          </div>

          <span className="text-2xs md:text-xs lg:text-sm flex-1 text-center hidden md:block text-fg-muted">
            {group.label}
          </span>

          <span
            className={`text-2xs md:text-xs lg:text-sm shrink-0 ${accent.text}`}
          >
            {group.skills.length}
          </span>
        </div>

        <p className="hidden sm:block mt-1 text-[10px] md:text-xs text-fg-muted leading-snug">
          {group.summary}
        </p>
      </div>

      <div
        className="flex-1 min-h-0 grid gap-0.5 sm:gap-1.5 p-1 md:p-2 lg:gap-y-3"
        style={{
          gridTemplateRows: `repeat(${group.skills.length}, minmax(0, 1fr))`,
        }}
      >
        {group.skills.map((skill) => {
          const isSelected =
            selectedSkill.groupId === group.id &&
            selectedSkill.name === skill.name;

          return (
            <SkillCard
              key={skill.name}
              skill={skill}
              accent={accent}
              isSelected={isSelected}
              onClick={() => onSkillClick(group, skill)}
              onHover={() => onSkillHover(group, skill)}
            />
          );
        })}
      </div>
    </div>
  );
}
