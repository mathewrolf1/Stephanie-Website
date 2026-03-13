"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  name: string;
};

const heroImages = [
  "/images/Front page/DSC03479.jpg",
  "/images/Front page/DSC03092.JPG",
  "/images/Front page/DSC03092(1).JPG",
  "/images/Front page/DSC02833.jpg",
  "/images/Front page/DSC00370.jpg",
  "/images/Front page/DSC04021.jpg",
];

const SLIDE_DURATION_MS = 7000;

export function Hero({ name }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const currentImage = heroImages[index];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[--color-background] text-white">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage}
              alt={`${name} wedding photography hero`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-6 flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-200"
        >
          Fine Art Wedding Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-heading text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-200 md:text-base"
        >
          Editorial, romantic imagery for modern, heartfelt celebrations—based
          in Toronto and traveling worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full border border-[--color-accent] bg-[--color-accent] px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[--color-background] shadow-md transition hover:bg-transparent hover:text-[--color-accent]"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}

