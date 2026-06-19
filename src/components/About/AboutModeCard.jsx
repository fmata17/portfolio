export default function AboutModeCard({ mode }) {
  return (
    <div className="border border-fg-muted/10 rounded-md bg-bg-darker/45 px-2 pb-2 pt-1 md:px-3 md:pb-3 md:pt-2 flex flex-col gap-1">
      <div>
        <h3 className="text-accent-secondary text-3xs md:text-xs xl:text-sm font-bold">
          {mode.label}
        </h3>
        <p className="mt-1 text-fg-muted text-3xs md:text-xs xl:text-sm leading-relaxed">
          {mode.copy}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {mode.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-accent-primary/20 bg-accent-primary/5
                      px-2 py-0.5
                      text-3xs md:text-2xs xl:text-xs
                      text-accent-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
