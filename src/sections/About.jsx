import { motion } from "framer-motion";
import { VscTerminal, VscAccount, VscCheck } from "react-icons/vsc";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen max-h-screen overflow-hidden bg-bg-darker text-fg flex flex-col items-center justify-start py-8 px-4 sm:px-8 md:px-12 xl:px-20 relative"
    >
      <div className="w-full max-w-7xl h-full flex flex-col min-h-0 space-y-6 mt-8">
        {/* Simple Page Header */}
        <div className="flex items-end justify-between border-b border-accent-primary/20 pb-4 flex-shrink-0">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-accent-primary">
              about_me(<span className="text-fg">fredy_mata</span>)
            </h2>
            <p className="text-fg-muted font-mono text-xs md:text-sm">
              Bridging deep learning architectures with high-performance
              execution.
            </p>
          </div>
        </div>

        {/* Clean, Non-Complex Tiled Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-0 w-full pb-6">
          {/* LEFT COLUMN: Profile Visuals & Specs (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 flex flex-col space-y-4 min-h-0">
            {/* Portrait terminal frame */}
            <div className="border border-fg-muted/10 rounded-xl overflow-hidden bg-bg-darker/60 backdrop-blur-md flex flex-col shrink-0">
              <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 py-2 bg-bg-darker/80 select-none">
                <span className="text-[10px] font-mono text-accent-secondary flex items-center gap-1.5 font-bold">
                  <VscAccount /> profile.bin
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-success/80" />
              </div>
              <div className="aspect-[4/3] bg-bg-dark overflow-hidden relative flex items-center justify-center">
                <img
                  src="/profile.jpeg" // 💡 Drop your profile photo in public/profile.jpeg
                  alt="Fredy Mata"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to stylized vector icon if image isn't found
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const iconDiv = document.createElement("div");
                      iconDiv.className =
                        "text-5xl text-accent-secondary opacity-35 font-mono";
                      iconDiv.innerText = "<FM />";
                      parent.appendChild(iconDiv);
                    }
                  }}
                />
              </div>
            </div>

            {/* Fastfetch Profile Specifications (Strictly formatted as a clean table) */}
            <div className="flex-1 border border-fg-muted/10 rounded-xl overflow-hidden bg-bg-darker/60 backdrop-blur-md p-4 flex flex-col min-h-0 font-mono text-xs">
              <span className="text-[10px] font-bold text-[#6c7086] uppercase tracking-wider mb-2 block">
                // system_diagnostics :: fastfetch
              </span>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-fg-muted/5">
                      <td className="py-2 pr-4 font-bold text-accent-secondary">
                        Target
                      </td>
                      <td className="py-2 text-fg-muted">
                        AI Software / ML Systems Internships
                      </td>
                    </tr>
                    <tr className="border-b border-fg-muted/5">
                      <td className="py-2 pr-4 font-bold text-accent-secondary">
                        Focus Area
                      </td>
                      <td className="py-2 text-fg-muted">
                        Deep Learning Runtimes & Hardware Acceleration
                      </td>
                    </tr>
                    <tr className="border-b border-fg-muted/5">
                      <td className="py-2 pr-4 font-bold text-accent-secondary">
                        Core Stack
                      </td>
                      <td className="py-2 text-fg-muted">
                        PyTorch, C++, CUDA, WASM, Node.js
                      </td>
                    </tr>
                    <tr className="border-b border-fg-muted/5">
                      <td className="py-2 pr-4 font-bold text-accent-secondary">
                        Location
                      </td>
                      <td className="py-2 text-fg-muted">Magnolia, TX, US</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Biography (Spans 7 cols on desktop) */}
          <div className="md:col-span-7 border border-fg-muted/10 rounded-xl overflow-hidden bg-bg-darker/60 backdrop-blur-md flex flex-col min-h-0">
            {/* Header tab */}
            <div className="flex items-center justify-between border-b border-fg-muted/10 px-5 py-3.5 bg-bg-darker/80 backdrop-blur flex-shrink-0 select-none">
              <span className="text-xs font-mono text-accent-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
                <VscTerminal /> biography.md
              </span>
              <span className="text-[10px] font-mono text-fg-muted">
                100% synced
              </span>
            </div>

            {/* Scrollable Story Buffer */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar min-h-0 font-mono text-xs md:text-sm">
              {/* Block 1 */}
              <div className="space-y-2">
                <h3 className="text-accent-secondary font-bold text-sm">
                  ## 01 / THE BRIDGE
                </h3>
                <p className="text-fg-muted leading-relaxed pl-4 border-l border-accent-primary/20">
                  I am a software engineer obsessed with building
                  high-performance systems from scratch. My path into machine
                  learning is driven by a desire to understand the underlying
                  mechanics—how gradients flow, how latent spaces represent
                  complex structures, and how neural policies converge. I focus
                  directly on the intersection of deep learning design and
                  native, hardware-optimized runtimes.
                </p>
              </div>

              {/* Block 2 */}
              <div className="space-y-2">
                <h3 className="text-accent-secondary font-bold text-sm">
                  ## 02 / HYBRID EXPERTISE
                </h3>
                <p className="text-fg-muted leading-relaxed pl-4 border-l border-accent-primary/20">
                  Many ML practitioners struggle with low-level systems
                  execution, and many systems engineers treat machine learning
                  like a black box. I bridge this gap. I design architectures
                  (like VAEs and DQN controllers) in PyTorch, but I maintain the
                  systems fluency to deploy them efficiently. This means writing
                  high-performance C++, utilizing CUDA for GPU training loops,
                  and compiling CPython state engines to run in browser
                  sandboxes using WebAssembly.
                </p>
              </div>

              {/* Block 3 */}
              <div className="space-y-2">
                <h3 className="text-accent-secondary font-bold text-sm">
                  ## 03 / AGENTIC WORKFLOWS & DRIVES
                </h3>
                <p className="text-fg-muted leading-relaxed pl-4 border-l border-accent-primary/20">
                  I believe the next era of computing is stateful and agentic. I
                  spend extensive time developing autonomous agent pipelines
                  using the OpenAI Agents SDK, crewAI, and LangChain—designing
                  unified, secure tool standards with the Model Context Protocol
                  (MCP) and integrating real-time telemetry tracing using Opik.
                  I bring a proactive, high-autonomy hacker mindset eager to
                  solve scaling bottlenecks in competitive, technically
                  challenging environments.
                </p>
              </div>

              {/* Status terminal block */}
              <div className="pt-2 border-t border-fg-muted/5 flex items-center gap-1.5 text-xs text-accent-success font-bold">
                <VscCheck className="text-sm" /> All information validated on
                systems check.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
