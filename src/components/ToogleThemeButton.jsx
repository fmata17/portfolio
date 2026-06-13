import { FaMoon, FaSun } from "react-icons/fa";

export default function ToogleThemeButton({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle light/dark mode"
      className="
        fixed top-4 left-4 z-50
        w-12 h-6
        xl:w-16 xl:h-8
        rounded-full
        border border-accent-primary
        bg-bg-dark
        flex items-center px-1
        cursor-pointer
        transition-colors duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-accent-primary
        focus:ring-offset-2
        focus:ring-offset-bg-dark
      "
    >
      <FaMoon
        aria-hidden="true"
        className="
        absolute left-1.5 text-accent-secondary opacity-70
        w-2.5 h-2.5
        xl:w-4 xl:h-4
        "
      />

      <FaSun
        aria-hidden="true"
        className="absolute right-1.5 text-accent-warning opacity-70
        w-2.5 h-2.5
        xl:w-4 xl:h-4
        "
      />

      <span
        className={`
    relative z-10
    w-4 h-4
    xl:w-6 xl:h-6
    rounded-full
    bg-accent-primary
    shadow
    transition-transform duration-300
  `}
        style={{
          transform: isDark
            ? "translateX(0px)"
            : window.innerWidth >= 768
              ? "translateX(1.925rem)"
              : "translateX(1.425rem)",
        }}
      />
    </button>
  );
}
