import { VscAccount } from "react-icons/vsc";

import MacOSWindowControls from "../MacOSWindowControls";

export default function AboutImageCard({ image }) {
  return (
    <div className="min-h-0 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-dark/70 backdrop-blur-md flex flex-col">
      <div className="flex items-center justify-between border-b border-fg-muted/10 px-3 py-2 bg-bg-darker/80 select-none flex-shrink-0">
        <MacOSWindowControls />

        <span className="min-w-0 text-[9px] sm:text-[10px] font-mono text-accent-secondary flex items-center gap-1.5 font-bold">
          <VscAccount className="shrink-0" />
          <span className="truncate">{image.label}</span>
        </span>
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
  );
}
