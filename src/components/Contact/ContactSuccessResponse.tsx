import { motion } from "framer-motion";
import { VscCheck } from "react-icons/vsc";

export default function ContactSuccessResponse({
  onClear,
}: {
  onClear: () => void;
}) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-accent-success border-b border-fg-muted/10 pb-2 mb-2 font-bold uppercase tracking-wider text-[11px]">
        <VscCheck className="text-sm shrink-0" /> HTTP/1.1 201 Created
      </div>

      <pre className="whitespace-pre-wrap break-words text-[#a6e3a1] leading-relaxed">
        {"{"}
        {"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"status"</span>:{" "}
        <span className="text-[#eed49f]">201</span>,{"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"message"</span>:{" "}
        <span className="text-[#eed49f]">
          "Message received. I will review the context and reply."
        </span>
        ,{"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"route"</span>:{" "}
        <span className="text-[#eed49f]">"fredymata.dev"</span>
        {"\n"}
        {"}"}
      </pre>

      <button
        onClick={onClear}
        className="mt-2 px-3 py-1 border border-accent-secondary/20 hover:border-accent-secondary hover:text-accent-secondary rounded transition-colors text-xs font-semibold"
      >
        clear console
      </button>
    </motion.div>
  );
}
