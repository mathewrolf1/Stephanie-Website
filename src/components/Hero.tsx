"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  name: string;
};

const CDN = "https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto";

const heroImages = [
  `${CDN}/images/Weddings/DSC07947.JPG`,
  `${CDN}/images/Weddings/DSC07938.JPG`,
  `${CDN}/images/Front page/DSC03479.jpg`,
  `${CDN}/images/Front page/DSC04021.jpg`,
  `${CDN}/images/Motherhood/DSC02833.jpg`,
];

const SLIDE_DURATION_MS = 5000;
const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;
const fade = { duration: 1.2, ease: "easeInOut" } as const;

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
            className="absolute inset-0"
          >
            {currentImage && (
              <Image
                src={currentImage}
                alt={`${name} wedding photography`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Centered text */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="font-heading text-4xl font-light uppercase tracking-[0.2em] text-white md:text-6xl lg:text-7xl"
          >
            Stephanie
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="font-heading text-4xl font-light uppercase tracking-[0.2em] text-white md:text-6xl lg:text-7xl"
          >
            Guerra
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="font-heading text-lg italic text-white/90 md:text-2xl"
          >
            for the romantic &amp; timeless
          </motion.p>
        </div>
      </div>
    </section>
  );
}
