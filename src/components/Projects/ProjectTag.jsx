export default function ProjectTag({ status, progress }) {
  const statusClasses =
    progress === 100
      ? "bg-accent-success/10 border border-accent-success/20 text-accent-success"
      : progress >= 70
        ? "bg-accent-warning/10 border border-accent-warning/20 text-accent-warning"
        : progress >= 30
          ? "bg-accent-peach/10 border border-accent-peach/20 text-accent-peach"
          : "bg-accent-error/10 border border-accent-error/20 text-accent-error";

  return (
    <span
      className={`text-2xs md:text-xs xl:text-sm
                  px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${statusClasses}`}
    >
      {status}
    </span>
  );
}
