import { motion } from "framer-motion";
import { VscAccount, VscCheck, VscTerminal } from "react-icons/vsc";

const profileImages = [
  {
    src: "/code_partners_1.webp",
    label: "code_partners_1.webp",
    alt: "Fredy Mata with a coding partner",
  },
  {
    src: "/code_partners_2.webp",
    label: "code_partners_2.webp",
    alt: "Illustrated late-night engineering workspace",
  },
];

const operatingModes = [
  {
    label: "Model-aware builder",
    copy: "I can reason through ML behavior, data constraints, and product goals without treating any layer as somebody else's problem.",
    tags: ["PyTorch", "Agents", "Evaluation"],
  },
  {
    label: "Systems-minded engineer",
    copy: "I care about runtime behavior, interfaces, observability, and the small implementation choices that decide whether a prototype becomes useful.",
    tags: ["C++", "CUDA", "WASM"],
  },
  {
    label: "High-context teammate",
    copy: "I learn new domains quickly, communicate tradeoffs clearly, and keep momentum across research, backend, frontend, and automation work.",
    tags: ["Ownership", "Clarity", "Shipping"],
  },
];

const profileRows = [
  ["Current target", "SWE / ML engineering roles"],
  ["Best fit", "AI product, ML systems, automation, full-stack delivery"],
  ["Core edge", "Bridging model thinking with production execution"],
  ["Working style", "Curious, direct, independent, detail-oriented"],
];

const signals = [
  "Turns ambiguous ideas into working systems",
  "Learns through implementation, measurement, and iteration",
  "Comfortable moving between UI, APIs, data, and model logic",
  "Balances technical depth with product usefulness",
];

export default function About() {
  return (
    <section
      id="about"
      className="h-screen max-h-screen
                overflow-hidden bg-bg-darker
                text-fg flex items-start justify-center
                pt-12 md:pt-16
                px-4 md:px-8
                relative
                snap-start"
    >
      <div className="w-full max-w-8xl h-full max-h-[calc(100vh-2rem)] md:max-h-[90vh] flex flex-col min-h-0 gap-3 sm:gap-4 md:gap-6">
        <div
          className="flex flex-col md:flex-row md:items-end
                 justify-between border-b border-accent-primary/20
                 gap-2 md:gap-4 flex-shrink-0"
        >
          <div className="space-y-0.5 md:space-y-1">
            <h2 className="text-accent-primary text-3xl md:text-4xl lg:text-5xl font-bold">
              About
            </h2>

            <p className="text-fg-muted text-xs md:text-sm lg:text-md">
              A compact profile of how I think, build, and create leverage
              across software and ML work.
            </p>
          </div>
        </div>

        <div
          className="flex-1 min-h-0 grid
                    grid-rows-[154px_minmax(0,1fr)]
                    sm:grid-rows-[184px_minmax(0,1fr)]
                    md:grid-rows-1 md:grid-cols-12
                    gap-3 md:gap-4 lg:gap-6 pb-4 md:pb-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-5 xl:col-span-4 min-h-0 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-2 sm:gap-3"
          >
            {profileImages.map((image, index) => (
              <div
                key={image.src}
                className="min-h-0 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-dark/70 backdrop-blur-md flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-fg-muted/10 px-3 py-2 bg-bg-darker/80 select-none flex-shrink-0">
                  <span className="min-w-0 text-[9px] sm:text-[10px] font-mono text-accent-secondary flex items-center gap-1.5 font-bold">
                    <VscAccount className="shrink-0" />
                    <span className="truncate">{image.label}</span>
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      index === 0
                        ? "bg-accent-success/80"
                        : "bg-accent-info/80"
                    }`}
                  />
                </div>
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/55 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="md:col-span-7 xl:col-span-8 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-dark/65 backdrop-blur-md flex flex-col min-h-0"
          >
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 md:px-5 py-3 bg-bg-darker/80 flex-shrink-0 select-none">
              <span className="text-[10px] md:text-xs font-mono text-accent-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
                <VscTerminal className="shrink-0" /> profile.runtime
              </span>
              <span className="hidden sm:inline text-[10px] font-mono text-fg-muted">
                ready_for: complex_work
              </span>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5">
              <div className="space-y-2">
                <p className="text-accent-primary text-sm md:text-base lg:text-lg font-bold leading-snug">
                  I build where machine learning, product engineering, and
                  systems thinking overlap.
                </p>
                <p className="text-fg-muted text-xs md:text-sm leading-relaxed max-w-4xl">
                  My value is range with depth: I can investigate a model,
                  build the interface around it, wire the backend path, and
                  explain the tradeoffs without losing sight of the user or the
                  team shipping it.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-3">
                {operatingModes.map((mode) => (
                  <div
                    key={mode.label}
                    className="border border-fg-muted/10 rounded-md bg-bg-darker/45 p-3 md:p-4 min-h-[132px] flex flex-col gap-3"
                  >
                    <div>
                      <h3 className="text-accent-secondary text-xs md:text-sm font-bold">
                        {mode.label}
                      </h3>
                      <p className="mt-1.5 text-fg-muted text-[11px] md:text-xs leading-relaxed">
                        {mode.copy}
                      </p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {mode.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-accent-primary/20 bg-accent-primary/5 px-2 py-0.5 text-[10px] text-accent-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-3 md:gap-4">
                <div className="border border-fg-muted/10 rounded-md bg-bg-darker/35 p-3 md:p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#6c7086] font-bold mb-2">
                    fastfetch.summary
                  </div>
                  <div className="divide-y divide-fg-muted/5">
                    {profileRows.map(([label, value]) => (
                      <div
                        key={label}
                        className="grid grid-cols-[112px_minmax(0,1fr)] gap-3 py-2 text-[11px] md:text-xs"
                      >
                        <span className="text-accent-info font-bold">
                          {label}
                        </span>
                        <span className="text-fg-muted">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-fg-muted/10 rounded-md bg-bg-darker/35 p-3 md:p-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#6c7086] font-bold mb-2">
                    hiring_signals
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {signals.map((signal) => (
                      <div
                        key={signal}
                        className="flex items-start gap-2 text-[11px] md:text-xs text-fg-muted leading-relaxed"
                      >
                        <VscCheck className="mt-0.5 text-accent-success shrink-0" />
                        <span>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-fg-muted/10 pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] md:text-xs text-fg-muted">
                <span>
                  Personal note: I bring curiosity, discipline, and a builder's
                  bias into every room I join.
                </span>
                <span className="text-accent-success font-bold">
                  status: open_to_impactful_work
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
