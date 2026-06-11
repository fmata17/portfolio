export default function ProjectsHeader({
  filter,
  setFilter,
  onFilterChange,
}) {
  const filters = ["All", "Complete", "In Progress"];

  return (
    <div
      className="flex flex-col md:flex-row md:items-end
                 justify-between border-b border-accent-primary/20
                 gap-4 flex-shrink-0"
    >
      <div className="space-y-0.5 md:space-y-1">
        <h2 className="text-accent-primary text-3xl md:text-4xl lg:text-5xl font-bold">
          Projects
        </h2>

        <p className="text-fg-muted text-xs md:text-sm lg:text-md">
          A curated catalog of my engineering, ML, and systems
          implementations.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 text-2xs md:text-xs lg:text-sm">
        {filters.map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilter(type);
              onFilterChange?.();
            }}
            className={`px-3 py-1 border rounded-md transition-all duration-200 ${
              filter === type
                ? "bg-accent-primary/10 border-accent-primary text-accent-primary font-bold"
                : "border-fg-muted/10 text-fg-muted hover:border-fg-muted/30 hover:text-fg"
            }`}
          >
            [ {type} ]
          </button>
        ))}
      </div>
    </div>
  );
}