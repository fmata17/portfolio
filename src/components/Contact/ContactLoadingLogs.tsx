import { motion } from "framer-motion";

import { deliveryLogs } from "../../data/contactContent";

export default function ContactLoadingLogs({ logIndex }: { logIndex: number }) {
  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-3 text-accent-warning"
    >
      <div className="flex items-center gap-2 border-b border-fg-muted/10 pb-2 mb-1">
        <span className="w-2 h-2 rounded-full bg-accent-warning animate-ping" />
        <span className="font-bold uppercase tracking-wider text-[11px]">
          Sending Contact Payload
        </span>
      </div>

      <div className="space-y-1.5 text-xs">
        {deliveryLogs.slice(0, logIndex + 1).map((log) => (
          <div key={log} className="font-semibold leading-relaxed">
            {log}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
