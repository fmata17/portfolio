import { motion } from "framer-motion";
import type { ChangeEventHandler, FormEventHandler } from "react";
import { VscSend, VscTerminal } from "react-icons/vsc";

import type { ContactFormState, ContactStatus } from "../../types/contact";
import ContactMessageTextarea from "./ContactMessageTextarea";
import ContactTextInput from "./ContactTextInput";

interface ContactFormPanelProps {
  form: ContactFormState;
  isSubmitDisabled: boolean;
  onInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  status: ContactStatus;
}

export default function ContactFormPanel({
  form,
  isSubmitDisabled,
  onInputChange,
  onSubmit,
  status,
}: ContactFormPanelProps) {
  const isLoading = status === "loading";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.35 }}
      className="md:col-span-5 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-darker/70 backdrop-blur-md flex flex-col min-h-0"
    >
      <div className="flex items-center justify-between border-b border-fg-muted/10 px-4 py-2.5 bg-bg-darker/80 select-none flex-shrink-0">
        <span className="text-2xs font-mono text-accent-secondary flex items-center gap-1.5 font-bold">
          <VscTerminal /> message.payload
        </span>
        <span
          className={`w-2 h-2 rounded-full ${
            isLoading
              ? "bg-accent-warning animate-pulse"
              : "bg-accent-success/80"
          }`}
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="flex-1 min-h-0 p-4 sm:p-5 md:p-6 flex flex-col gap-3 overflow-y-auto custom-scrollbar font-mono text-xs"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3">
          <ContactTextInput
            id="name"
            label="// name"
            type="text"
            disabled={isLoading}
            value={form.name}
            onChange={onInputChange}
            placeholder="Your name"
          />

          <ContactTextInput
            id="email"
            label="// email"
            type="email"
            disabled={isLoading}
            value={form.email}
            onChange={onInputChange}
            placeholder="recruiter@company.ai"
          />
        </div>

        <ContactMessageTextarea
          disabled={isLoading}
          value={form.message}
          onChange={onInputChange}
        />

        <div className="rounded-md border border-fg-muted/10 bg-bg-dark/60 p-3 text-[11px] text-fg-muted leading-relaxed">
          <span className="text-accent-info font-bold">Best signal:</span>{" "}
          share the problem you are hiring for and the kind of ownership the
          role needs.
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full py-2.5 bg-accent-success/15 border border-accent-success/40 text-accent-success rounded font-semibold hover:bg-accent-success/25 hover:border-accent-success hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:scale-100 disabled:pointer-events-none"
        >
          <VscSend /> Send message
        </button>
      </form>
    </motion.div>
  );
}
