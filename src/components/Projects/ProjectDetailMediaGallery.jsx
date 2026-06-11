export default function ProjectDetailMediaGallery({
  media,
  projectId,
  scrollContainerRefs,
}) {
  if (!media?.length) return null;

  return (
    <div className="space-y-2">
      <h4 className="text-accent-secondary text-xs font-bold uppercase tracking-wider">
        Visual Artifacts & Evidence
      </h4>

      <div
        ref={(el) => (scrollContainerRefs.current[projectId] = el)}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-fg-muted/10"
      >
        {media.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 md:w-80 bg-bg-dark/60 border border-fg-muted/10 rounded-lg overflow-hidden flex flex-col justify-between"
          >
            {item.isPlaceholder ? (
              <div className="aspect-[4/3] bg-bg-dark flex flex-col items-center justify-center p-3 text-center">
                <div className="w-8 h-8 border-2 border-dashed border-accent-secondary/30 rounded-full animate-pulse flex items-center justify-center text-accent-secondary/30 font-bold mb-1.5 text-xs">
                  i
                </div>

                <span className="text-[10px] text-accent-secondary font-bold uppercase tracking-wider mb-0.5">
                  Asset Pending
                </span>

                <span className="text-[9px] text-fg-muted">
                  {item.type === "gif"
                    ? "[ Animated model progression ]"
                    : "[ Output validation metric ]"}
                </span>
              </div>
            ) : (
              <div className="aspect-[4/3] bg-bg-dark overflow-hidden relative border-b border-fg-muted/10 flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-2 bg-bg-darker/30">
              <p className="text-[10px] text-fg-muted text-center">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
