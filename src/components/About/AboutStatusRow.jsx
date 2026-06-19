export default function AboutStatusRow() {
  return (
    <div className="shrink-0 rounded-md border border-accent-success/20 bg-accent-success/5
                    px-3 py-1 md:px-4 
                    flex flex-row items-center justify-between
                    text-3xs md:text-2xs">
      <span className="text-fg-muted">status</span>
      <span className="text-accent-success font-bold">
        open_to_impactful_work
      </span>
    </div>
  );
}
