import type { ChangeEvent } from "react";

interface ContactTextInputProps {
  disabled: boolean;
  id: "name" | "email";
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: "text" | "email";
  value: string;
}

export default function ContactTextInput({
  disabled,
  id,
  label,
  onChange,
  placeholder,
  type,
  value,
}: ContactTextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-fg-muted font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-1 rounded bg-bg-dark border border-fg-muted/10 text-fg focus:outline-none focus:border-accent-primary disabled:opacity-50"
      />
    </div>
  );
}
