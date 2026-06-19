import { AnimatePresence, motion } from "framer-motion";
import { VscCloud } from "react-icons/vsc";

import type { ContactFormState, ContactStatus } from "../../types/contact";
import ContactErrorResponse from "./ContactErrorResponse";
import ContactIdlePreview from "./ContactIdlePreview";
import ContactLoadingLogs from "./ContactLoadingLogs";
import ContactSuccessResponse from "./ContactSuccessResponse";

interface ContactConsolePanelProps {
  elapsedTime: number;
  form: ContactFormState;
  logIndex: number;
  onClear: () => void;
  onRetry: () => void;
  status: ContactStatus;
}

export default function ContactConsolePanel({
  elapsedTime,
  form,
  logIndex,
  onClear,
  onRetry,
  status,
}: ContactConsolePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.35, delay: 0.05 }}
      className="md:col-span-7 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-darker/80 flex flex-col min-h-0"
    >
      <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 md:px-5 py-3 bg-bg-darker/90 flex-shrink-0 select-none">
        <span className="text-2xs font-mono text-accent-secondary uppercase tracking-widest font-bold flex items-center gap-1.5">
          <VscCloud /> contact_route.json
        </span>
        <span className="text-2xs font-mono text-fg-muted">
          {status === "loading" ? `sending: ${elapsedTime}s` : "ready"}
        </span>
      </div>

      <div className="flex-1 min-h-0 p-4 sm:p-5 md:p-6 overflow-y-auto custom-scrollbar font-mono text-xs md:text-sm relative">
        <AnimatePresence mode="wait">
          {status === "idle" && <ContactIdlePreview form={form} />}
          {status === "loading" && <ContactLoadingLogs logIndex={logIndex} />}
          {status === "success" && <ContactSuccessResponse onClear={onClear} />}
          {status === "error" && <ContactErrorResponse onRetry={onRetry} />}
        </AnimatePresence>
      </div>

      <div className="bg-bg-darker/90 border-t border-fg-muted/10 px-4 md:px-5 py-3 h-12 flex items-center justify-between flex-shrink-0 font-mono text-[10px] text-fg-muted select-none">
        <span>STATE: READY</span>
        <span className="hidden sm:inline">
          RESPONSE_TARGET: recruiting_or_collaboration
        </span>
      </div>
    </motion.div>
  );
}
