import { VscCheck } from "react-icons/vsc";

export default function ContactPromptCard({ prompt }: { prompt: string }) {
  return (
    <div className="border border-fg-muted/10 rounded-md bg-bg-dark/55
                    flex items-center gap-2
                    p-2 text-2xs md:text-xs text-fg-muted">
      <VscCheck className="text-accent-success mb-1" />
      {prompt}
    </div>
  );
}
