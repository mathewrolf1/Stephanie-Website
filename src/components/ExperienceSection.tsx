const pillars = [
  {
    title: "Guided with ease",
    body: "Natural prompts, refined posing, and breathing room for real moments.",
  },
  {
    title: "Thoughtful planning",
    body: "Timeline support and location guidance designed around light and flow.",
  },
  {
    title: "Editorial delivery",
    body: "A curated gallery with timeless color and clean, romantic tones.",
  },
  {
    title: "Travel ready",
    body: "Available for Toronto + destinations—wherever your story takes you.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[--color-background] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Experience
            </p>
            <h2 className="mt-3 font-heading text-2xl tracking-tight text-[--color-foreground] md:text-3xl">
              A process designed for presence.
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-neutral-600 md:text-sm">
            From planning through delivery, everything is built to feel calm,
            intentional, and beautifully easy.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-sm border border-black/5 bg-white/40 p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg tracking-tight text-[--color-foreground]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Ready to talk dates + vision?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[--color-accent] bg-[--color-accent] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-[--color-background] shadow-sm transition hover:bg-transparent hover:text-[--color-accent]"
          >
            Inquire
          </a>
        </div>
      </div>
    </section>
  );
}

