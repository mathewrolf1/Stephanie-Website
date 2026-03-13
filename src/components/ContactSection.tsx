const INSTAGRAM_URL =
  "https://www.instagram.com/stephanieguerraphoto/?hl=en";

const MAILTO_HREF = "mailto:hello@stephphoto.com";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[--color-background] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="space-y-4 md:col-span-5">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Inquire
            </p>
            <h2 className="font-heading text-2xl tracking-tight text-[--color-foreground] md:text-3xl">
              Let’s create something timeless.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
              Share your date, location, and what you’re dreaming up. I’ll reply
              with availability and next steps.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-sm border border-black/5 bg-white/40 p-6 shadow-sm md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <a
                  href={MAILTO_HREF}
                  className="inline-flex items-center justify-center rounded-full border border-[--color-accent] bg-[--color-accent] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[--color-background] shadow-sm transition hover:bg-transparent hover:text-[--color-accent]"
                >
                  Email me
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs uppercase tracking-[0.25em] text-neutral-600 underline-offset-4 hover:text-[--color-accent] hover:underline"
                >
                  Follow on Instagram
                </a>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-sm border border-black/5 bg-[--color-background] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Based in
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">Toronto</p>
                </div>
                <div className="rounded-sm border border-black/5 bg-[--color-background] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Travel
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">
                    Available worldwide
                  </p>
                </div>
              </div>

              <p className="mt-8 text-xs leading-relaxed text-neutral-500">
                Prefer email? Tap “Email me” to start a message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

