import { motion } from "framer-motion";
import { VscAccount, VscTerminal } from "react-icons/vsc";

const profileImages = [
  {
    src: "/code_partners_1.webp",
    label: "code_partners_1.webp",
    alt: "Fredy Mata with a coding partner",
    crop: "object-center",
  },
  {
    src: "/code_partners_2.webp",
    label: "code_partners_2.webp",
    alt: "Illustrated late-night engineering workspace",
    crop: "object-right",
  },
];

const operatingModes = [
  {
    label: "Model fluency",
    copy: "Reads model behavior through data, evaluation, and product constraints.",
    tags: ["PyTorch", "Agents", "Eval"],
  },
  {
    label: "Production instincts",
    copy: "Turns prototypes into interfaces, APIs, and runtime paths people can use.",
    tags: ["React", "APIs", "Systems"],
  },
  {
    label: "Clear ownership",
    copy: "Keeps tradeoffs, decisions, and next steps visible while the work moves.",
    tags: ["Ownership", "Clarity", "Shipping"],
  },
];

const profileRows = [
  ["target", "SWE / ML engineering roles"],
  ["best_fit", "AI products, ML systems, automation"],
  ["core_edge", "Model intuition + production execution"],
  ["working_style", "Curious, direct, independent, precise"],
];

export default function About() {
  return (
    <section
      id="about"
      className="h-screen max-h-screen
                overflow-hidden bg-bg-darker
                text-fg flex items-start justify-center
                pt-12 xl:pt-16
                px-4 xl:px-8
                relative
                snap-start"
    >
      <div className="w-full max-w-8xl h-full min-h-0 flex flex-col space-y-2 xl:space-y-6">
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
              A compact profile of how I think, build, and create leverage
              across software and ML work.
            </p>
          </div>
        </div>

        <div
          className="flex-1 min-h-0 grid
                    grid-rows-[clamp(118px,22dvh,158px)_minmax(0,1fr)]
                    min-[390px]:grid-rows-[clamp(132px,24dvh,178px)_minmax(0,1fr)]
                    md:grid-rows-1 md:grid-cols-12
                    gap-2 lg:gap-4 pb-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-5 xl:col-span-4 min-h-0 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-2 lg:gap-3"
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
                      index === 0 ? "bg-accent-success/80" : "bg-accent-info/80"
                    }`}
                  />
                </div>
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`h-full w-full object-cover ${image.crop}`}
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

            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-3 min-[390px]:p-4 md:p-5 xl:p-6 flex flex-col gap-3 md:gap-4">
              <div className="shrink-0 space-y-1.5 md:space-y-2">
                <p className="text-accent-primary text-sm md:text-base xl:text-lg font-bold leading-snug">
                  I build where machine learning, product engineering, and
                  systems thinking overlap.
                </p>
                <p className="text-fg-muted text-[11px] min-[390px]:text-xs md:text-sm leading-relaxed max-w-4xl">
                  My value is range with depth: I can investigate a model, build
                  the interface around it, wire the backend path, and explain
                  the tradeoffs without losing sight of the user or the team
                  shipping it.
                </p>
              </div>

              <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-3">
                {operatingModes.map((mode) => (
                  <div
                    key={mode.label}
                    className="border border-fg-muted/10 rounded-md bg-bg-darker/45 p-3 md:p-4 min-h-[112px] lg:min-h-[128px] flex flex-col gap-2"
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

              <div className="shrink-0 rounded-md border border-accent-success/20 bg-accent-success/5 px-3 py-2 md:px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[11px] md:text-xs">
                <span className="text-fg-muted">status</span>
                <span className="text-accent-success font-bold">
                  open_to_impactful_work
                </span>
              </div>

              <div className="shrink-0 border border-accent-primary/20 rounded-md bg-bg-darker/45 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 border-b border-fg-muted/10 px-3 py-2 md:px-4 bg-bg-darker/70">
                  <div className="text-[10px] uppercase text-accent-info font-bold">
                    fastfetch.summary
                  </div>
                  <div className="text-[10px] text-fg-muted">
                    range_with_depth=true
                  </div>
                </div>

                <div className="grid grid-cols-1 min-[360px]:grid-cols-2 xl:grid-cols-4">
                  {profileRows.map(([label, value]) => (
                    <div
                      key={label}
                      className="min-h-[66px] border-b border-fg-muted/5 px-3 py-2 min-[360px]:border-r xl:border-b-0 md:px-4"
                    >
                      <div className="text-[10px] text-accent-info font-bold">
                        {label}
                      </div>
                      <div className="mt-1 text-[11px] md:text-xs text-fg-muted leading-relaxed">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto shrink-0 border-t border-fg-muted/10 pt-2 md:pt-3 text-[11px] md:text-xs text-fg-muted leading-relaxed">
                Personal note: I bring curiosity, discipline, and a builder's
                bias into every room I join.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
