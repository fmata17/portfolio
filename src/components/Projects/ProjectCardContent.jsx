export default function ProjectCardContent({
  project,
  onExpand,
  getFirstSentence,
}) {
  return (
    <div className="flex flex-col sm:space-y-0.5">
      <div className="flex items-center justify-between gap-2 min-w-0">
        <h3 className="text-md md:text-lg lg:text-2xl font-bold text-fg truncate whitespace-nowrap min-w-0">
          {project.name}
        </h3>

        {/* Mobile Read More */}
        <div className="sm:hidden shrink-0">
          <button
            onClick={() => onExpand(project.id)}
            className="text-2xs md:text-xs lg:text-sm px-2 py-0.5 text-accent-secondary border border-accent-secondary/15 rounded hover:text-accent-success hover:border-accent-success/50 transition-colors whitespace-nowrap"
          >
            [ read more ]
          </button>
        </div>
      </div>

      <p className="text-xs md:text-md lg:text-lg hidden sm:block text-fg-muted leading-relaxed">
        {getFirstSentence(project.deepDescription)}
      </p>
    </div>
  );
}