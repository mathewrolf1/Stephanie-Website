export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[--color-background] px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            About
          </p>
          <h2 className="mt-3 font-heading text-2xl tracking-tight text-[--color-foreground] md:text-3xl">
            Calm direction. Honest emotion.
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-relaxed text-neutral-600 md:col-span-7 md:text-base">
          <p>
            I photograph weddings and families with an editorial eye and a
            gentle, grounded approach—so you can stay present while I craft
            images that feel timeless, romantic, and true to you.
          </p>
          <p>
            My work blends intentional composition with documentary moments:
            movement, light, and the quiet in-between—held with care and
            delivered with a refined, story-forward finish.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[--color-accent] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.25em] text-[--color-foreground] transition hover:bg-[--color-accent] hover:text-[--color-background]"
            >
              Inquire for availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

