import type { ChangeEvent } from "react";

interface ContactMessageTextareaProps {
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export default function ContactMessageTextarea({
  disabled,
  onChange,
  value,
}: ContactMessageTextareaProps) {
  return (
    <div className="flex flex-col gap-1 flex-1 min-h-[108px]">
      <label htmlFor="message" className="text-fg-muted font-semibold">
        // message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder="Role, team, timeline, and what you want to explore."
        className="flex-1 min-h-[96px] px-3 py-2 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50 resize-none"
      />
    </div>
  );
}
