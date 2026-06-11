import { motion } from "framer-motion";

export default function ProjectProgressBar({
  progress,
  className = "",
  label = "Progress",
}) {
  const progressColor =
    progress === 100
      ? "bg-accent-success"
      : progress >= 70
        ? "bg-accent-warning"
        : progress >= 30
          ? "bg-accent-peach"
          : "bg-accent-error";

  return (
    <div className={className}>
      <div className="text-2xs md:text-xs lg:text-sm flex justify-between text-fg-muted">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>

      <div className="w-full h-1.5 bg-bg-darker rounded-md overflow-hidden relative">
        <motion.div
          className={`h-full transition-all duration-300 relative ${progressColor}`}
          style={{
            width: `${progress}%`,
          }}
        >
          <div className="absolute inset-0 bg-white/20 mix-blend-overlay animate-lava-core" />

          <div
            className="absolute inset-0 animate-lava-flow opacity-40 mix-blend-screen"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />

          <div className="absolute inset-0 -z-10 animate-lava-glow blur-[3px] bg-inherit scale-y-150" />
        </motion.div>
      </div>
    </div>
  );
}
