export default function ContactHeader() {
  return (
    <div
      className="flex flex-col md:flex-row md:items-end
                 justify-between border-b border-accent-primary/20
                 gap-2 md:gap-4 flex-shrink-0"
    >
      <div className="space-y-0.5 md:space-y-1">
        <h2 className="text-accent-primary text-3xl md:text-4xl lg:text-5xl font-bold">
          Contact
        </h2>

        <p className="text-fg-muted text-xs md:text-sm lg:text-md">
          Send a concise note about the role, the problem space, or the next
          useful step.
        </p>
      </div>
    </div>
  );
}
