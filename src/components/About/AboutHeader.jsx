export default function AboutHeader() {
  return (
    <div
      className="flex flex-col md:flex-row md:items-end
                 justify-between border-b border-accent-primary/20
                 gap-2 md:gap-4 flex-shrink-0"
    >
      <div className="space-y-0.5 md:space-y-1">
        <h2 className="text-accent-primary text-3xl md:text-4xl xl:text-5xl font-bold">
          About
        </h2>

        <p className="text-fg-muted text-xs md:text-sm lg:text-md">
          A compact profile of how I think, build, and create leverage across
          software and ML work.
        </p>
      </div>
    </div>
  );
}
