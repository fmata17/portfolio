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
      <div className="flex-shrink-0 border-b border-fg-muted/10 px-2 py-1.5 md:px-3 md:py-2 lg:p-3">
        <div className="flex items-center justify-between gap-2">
          <div className={`flex items-center gap-1.5 min-w-0 ${accent.text}`}>
            <span className="text-sm sm:text-lg md:text-xl shrink-0">
              <GroupIcon />
            </span>

            <h3 className="text-2xs md:text-sm lg:text-md font-bold leading-tight text-fg">
              {group.title}
            </h3>
          </div>

          <span
            className={`text-2xs md:text-xs lg:text-sm shrink-0 ${accent.text}`}
          >
            {group.skills.length}
          </span>
        </div>

        <p className="mt-0.5 pl-5 sm:pl-6 text-3xs md:text-2xs lg:text-xs leading-tight text-fg-muted whitespace-nowrap">
          {group.label}
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col gap-0.5 sm:gap-1.5 p-1 md:p-2 lg:gap-y-3">
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
