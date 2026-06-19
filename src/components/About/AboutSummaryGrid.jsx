export default function AboutSummaryGrid({ rows }) {
  return (
    <div className="shrink-0 border border-accent-primary/20
                    rounded-md bg-bg-darker/45 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between
                      gap-1.5 border-b border-fg-muted/10
                      p-2
                      bg-bg-darker/70">
        <div className="text-3xs md:text-xs xl:text-sm uppercase text-accent-info font-bold">
          fastfetch.summary
        </div>
        <div className="text-3xs xl:text-xs text-fg-muted">
          range_with_depth=true
        </div>
      </div>

      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 xl:grid-cols-4">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="min-h-[66px] border-b border-fg-muted/5
                      p-2
                      min-[360px]:border-r xl:border-b-0"
          >
            <div className="text-3xs md:text-xs xl:text-sm text-accent-info font-bold">
              {label}
            </div>
            <div className="mt-1 text-3xs md:text-2xs xl:text-xs text-fg-muted leading-relaxed">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
