import type { SVGProps } from "react";

export default function VscWarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={props.className || "w-4 h-4"}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 5c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </svg>
  );
}
