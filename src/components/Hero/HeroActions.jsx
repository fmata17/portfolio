export default function HeroActions({ links }) {
  return (
    <div
      className="
        mt-4
        px-4
        grid
        grid-cols-2
        gap-2
        lg:gap-3
        w-full
        max-w-sm
        sm:max-w-md
        md:max-w-md
        lg:max-w-full
        xl:max-w-full
      "
    >
      {links.map(({ href, label, accent }) => (
        <a
          key={label}
          href={href}
          className={`
            px-1
            py-2
            text-center
            rounded
            border
            transition
            w-full
            shadow-sm
            text-xs
            md:text-sm
            lg:text-md
            xl:text-lg
            2xl:text-xl
            ${
              accent
                ? "border-accent-secondary text-accent-secondary hover:bg-accent-secondary hover:text-bg"
                : "border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg"
            }
          `}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
