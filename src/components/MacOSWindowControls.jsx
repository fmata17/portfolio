const controls = [
  { color: "bg-[#ff5f57]", label: "Close" },
  { color: "bg-[#febc2e]", label: "Minimize" },
  { color: "bg-[#28c840]", label: "Maximize" },
];

export default function MacOSWindowControls({ className = "", dotClassName = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`flex shrink-0 items-center gap-1.5 ${className}`}
    >
      {controls.map((control) => (
        <span
          key={control.label}
          className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full border-none shadow-sm ${control.color} ${dotClassName}`}
        />
      ))}
    </div>
  );
}
