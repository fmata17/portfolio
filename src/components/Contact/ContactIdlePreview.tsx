import { motion } from "framer-motion";

import {
  contactEndpoint,
  conversationPrompts,
} from "../../data/contactContent";
import type { ContactFormState } from "../../types/contact";
import ContactPromptCard from "./ContactPromptCard";

export default function ContactIdlePreview({
  form,
}: {
  form: ContactFormState;
}) {
  return (
    <motion.div
      key="idle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {conversationPrompts.map((prompt) => (
          <ContactPromptCard key={prompt} prompt={prompt} />
        ))}
      </div>

      <div
        className="text-[#6c7086] italic
                      text-2xs md:text-xs lg:text-sm"
      >
        // Live payload preview
      </div>

      <pre
        className="whitespace-pre-wrap break-words text-[#cad3f5] leading-relaxed select-all
                      text-2xs md:text-xs lg:text-sm"
      >
        <span className="text-[#c6a0f6]">POST</span>{" "}
        <span className="text-[#a6e3a1]">"{contactEndpoint}"</span>
        {"\n\n"}
        {"{"}
        {"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"name"</span>:{" "}
        <span className="text-[#a6e3a1]">"{form.name || ""}"</span>,{"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"email"</span>:{" "}
        <span className="text-[#a6e3a1]">"{form.email || ""}"</span>,{"\n"}
        {"  "}
        <span className="text-[#89b4fa]">"message"</span>:{" "}
        <span className="text-[#a6e3a1]">"{form.message || ""}"</span>
        {"\n"}
        {"}"}
      </pre>
    </motion.div>
  );
}
