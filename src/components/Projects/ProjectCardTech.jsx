export default function ProjectCardTech({ tech }) {
  return (
    <div className="text-sm md:text-lg xl:text-2xl flex items-center gap-2.5 text-accent-secondary shrink-0">
      {tech.map(({ icon: Icon, name }) => (
        <span
          key={name}
          className="hover:scale-105 transition-transform duration-200"
        >
          <Icon />
        </span>
      ))}
    </div>
  );
}
