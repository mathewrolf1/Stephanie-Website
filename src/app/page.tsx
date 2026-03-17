"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

export default function Home() {
  return (
    <>
      <Hero name="Stephanie Guerra" />

      {/* Location strip */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={spring}
        viewport={{ once: true }}
        className="bg-[--color-background] px-6 py-10 text-center"
      >
        <p className="font-heading text-base italic text-neutral-500 md:text-lg">
          Based in Northern California, available all across the West Coast &amp; Worldwide
        </p>
      </motion.section>

      {/* Self-portrait section */}
      <section className="bg-[--color-background] px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-md border-[3px] border-[#F7E7CE]"
          >
            <Image
              src="https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto/v1773732725/selfsteph_qdzdky.jpg"
              alt="Stephanie Guerra"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                Hello, I'm
              </p>
              <h2 className="font-heading mt-2 text-3xl text-[--color-foreground] md:text-4xl">
                Stephanie Guerra
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
              I'm a fine art wedding and portrait photographer based in Northern
              California with a passion for capturing genuine emotion, soft light,
              and the quiet in-between moments that make your story uniquely yours.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 md:text-base">
              My approach is calm, unhurried, and editorial — so you can stay
              present while I take care of everything else.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} transition={spring} className="inline-block">
                <Link
                  href="/about"
                  className="block rounded-full border border-black/10 bg-white px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-neutral-600 shadow-sm transition hover:border-[--color-accent] hover:text-[--color-accent]"
                >
                  More About Me
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} transition={spring} className="inline-block">
                <Link
                  href="/book"
                  className="block rounded-full border border-black/10 bg-white px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-neutral-600 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Book a Session
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
