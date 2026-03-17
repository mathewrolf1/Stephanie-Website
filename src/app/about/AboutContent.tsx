"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

const pillars = [
  {
    number: "01",
    title: "Editorial Eye",
    description:
      "Every frame is composed with intention — light, shadow, and emotion working together to create images that feel like stills from a film.",
  },
  {
    number: "02",
    title: "Gentle Direction",
    description:
      "I guide you just enough to feel comfortable, never so much that you feel posed. The result is natural, unguarded moments.",
  },
  {
    number: "03",
    title: "Documentary Moments",
    description:
      "The quiet glance, the nervous laugh, the grandmother wiping a tear — I'm always watching for the real story unfolding around you.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Self-portrait + Bio */}
      <section className="bg-[--color-background] px-6 pt-20 pb-16">
        <div className="mx-auto max-w-6xl space-y-16">

          {/* Image left, text right */}
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
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
              className="space-y-5 text-sm leading-relaxed text-neutral-600 md:text-base"
            >
              <p>
                Hi, I’m Stephanie — I am a photographer specializing in timeless, elegant, and editorial imagery for weddings, families, and motherhood. Since first discovering my passion for photography while creating my high school yearbook in 2013, I have been drawn to the art of preserving life’s most meaningful moments with intention and beauty.
              </p>
              <p>
                My work is inspired by a refined, editorial approach—blending genuine emotion with thoughtful composition and soft, natural light. I believe photographs should feel both effortless and elevated, capturing not only how a moment looked, but how it felt. Each image is created with a focus on connection, authenticity, and a timeless aesthetic that will remain meaningful for generations.
              </p>
              <p>
                From wedding celebrations to the quiet intimacy of motherhood and the evolving story of family life, I approach every session with care, artistry, and attention to detail. My goal is to create an experience that feels relaxed and natural while delivering imagery that is polished, sophisticated, and enduring.
                Based in Northern California, I am available for travel and honored to document stories wherever they unfold.
              </p>
            </motion.div>
          </div>

          {/* Quote below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
          >
            <p className="font-heading text-2xl leading-snug text-[--color-foreground] md:text-3xl">
              "Capturing life's fleeting moments, one frame at a time.
                Let's create memories you'll feel forever."
            </p>
          </motion.div>

        </div>
      </section>

      {/* Pillars */}
      <section className="bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              My Approach
            </p>
            <h2 className="font-heading text-2xl text-[--color-foreground] md:text-3xl">
              How I work with you
            </h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3 border-t border-black/10 pt-6"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[--color-accent]">
                  {pillar.number}
                </span>
                <h3 className="font-heading text-lg text-[--color-foreground]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {pillar.description}
                </p>
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
          Let's connect
        </p>
        <h2 className="font-heading mb-8 text-2xl text-[--color-foreground] md:text-3xl">
          Ready to work together?
        </h2>
        <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }} transition={spring} className="inline-block">
          <Link
            href="/book"
            className="block rounded-full border border-black/10 bg-white px-8 py-3 text-xs uppercase tracking-[0.2em] text-neutral-600 shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Book Your Session
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}
