import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[--color-background]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs text-neutral-600 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="tracking-[0.25em] uppercase text-neutral-500">
            Steph Wedding Photography
          </p>
          <p className="text-neutral-500">
            Editorial, romantic imagery for modern celebrations.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          <Link
            href="#instagram"
            className="hover:text-[--color-accent] underline-offset-4 hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="#journal"
            className="hover:text-[--color-accent] underline-offset-4 hover:underline"
          >
            Journal
          </Link>
          <Link
            href="#contact"
            className="hover:text-[--color-accent] underline-offset-4 hover:underline"
          >
            Inquire
          </Link>
        </div>

        <p className="text-neutral-400">
          © {new Date().getFullYear()} Steph Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

