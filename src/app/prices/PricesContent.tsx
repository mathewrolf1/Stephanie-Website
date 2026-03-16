"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

const allPackages = [
  {
    name: "Standard Session",
    price: "$200",
    hours: "Up to 1 Hour",
    features: [
      "Family, motherhood & portrait sessions",
      "1 location",
      "Online gallery with full download rights",
      "3–4 week delivery",
    ],
  },
  {
    name: "Newborn & Engagement",
    price: "$250",
    hours: "Up to 1.5 Hours",
    features: [
      "Newborn or engagement sessions",
      "1 location",
      "Online gallery with full download rights",
      "3–4 week delivery",
    ],
  },
  {
    name: "Wedding Coverage",
    price: "Inquire",
    hours: "Custom",
    features: [
      "Tailored to your day",
      "Online gallery with full download rights",
      "Full print release",
      "6–8 week delivery",
    ],
  },
];


export function PricesContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-[--color-background] px-6 pt-20 pb-14 text-center">
        <div className="mx-auto max-w-2xl">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={spring}
            className="mb-3 text-xs uppercase tracking-[0.35em] text-neutral-500"
          >
            Investment
          </motion.p>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.1 }}
            className="font-heading text-3xl text-[--color-foreground] md:text-5xl"
          >
            Pricing & Packages
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.2 }}
            className="mt-4 text-sm leading-relaxed text-neutral-500"
          >
            Every package includes fully edited images, an online gallery, and
            unlimited printing rights. Custom packages are available — reach out
            to discuss your vision.
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[--color-background] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {allPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col rounded-sm border border-black/8 bg-white p-10"
              >
                <div className="mb-8 border-b border-black/8 pb-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    {pkg.hours}
                  </p>
                  <h3 className="font-heading mt-1 text-2xl text-[--color-foreground]">
                    {pkg.name}
                  </h3>
                  <p className="font-heading mt-3 text-4xl text-[--color-foreground]">
                    {pkg.price}
                  </p>
                </div>

                <ul className="flex-1 space-y-4 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-neutral-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[--color-accent]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} transition={spring} className="mt-10">
                  <Link
                    href={`/book?session=${encodeURIComponent(pkg.name)}`}
                    className="block rounded-full border border-black/10 bg-white px-5 py-2 text-center text-xs uppercase tracking-[0.2em] text-neutral-600 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Inquire
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={spring}
        viewport={{ once: true }}
        className="bg-neutral-50 px-6 py-20 text-center"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Not sure which package is right for you?
        </p>
        <h2 className="font-heading mb-8 text-2xl text-[--color-foreground] md:text-3xl">
          Let's talk through your day
        </h2>
        <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} transition={spring} className="inline-block">
          <Link
            href="/book"
            className="block rounded-full border border-black/10 bg-white px-8 py-3 text-xs uppercase tracking-[0.2em] text-neutral-600 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
