import { motion } from "framer-motion";

import VscWarningIcon from "./VscWarningIcon";

export default function ContactErrorResponse({
  onRetry,
}: {
  onRetry: () => void;
}) {
  return (
    <motion.div
      key="error"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2 text-accent-error border-b border-fg-muted/10 pb-2 mb-2 font-bold uppercase tracking-wider text-[11px]">
        <VscWarningIcon className="text-sm shrink-0" /> Delivery failed
      </div>

      <pre className="whitespace-pre-wrap break-words text-accent-error leading-relaxed">
        {"{"}
        {"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"status"</span>:{" "}
        <span className="text-[#eed49f]">500</span>,{"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"next_step"</span>:{" "}
        <span className="text-[#eed49f]">
          "Please retry or reach out directly at linkedin.com/in/fmata17"
        </span>
        {"\n"}
        {"}"}
      </pre>

      <button
        onClick={onRetry}
        className="mt-2 px-3 py-1 border border-accent-error/20 hover:border-accent-error hover:text-accent-error rounded transition-colors text-xs font-semibold"
      >
        retry
      </button>
    </motion.div>
  );
}
