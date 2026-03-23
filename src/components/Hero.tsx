"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  name: string;
};

const CDN = "https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto";

const heroImages = [
  `${CDN}/v1774290094/IMG_0667_w3suzx.png`,
  `${CDN}/v1774290094/IMG_0668_o5gqz3.png`,
  `${CDN}/images/Front page/DSC03479.jpg`,
  `${CDN}/images/Front page/DSC04021.jpg`,
  `${CDN}/images/Motherhood/DSC02833.jpg`,
  `${CDN}/images/Engagement/DSC07371.jpg`,
  `${CDN}/images/Engagement/OSC_0090.jpg`,
  `${CDN}/images/Motherhood/DSC03092.jpg`,
  `https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto/front_agplxs.jpg`,
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

      {/* Top center text */}
      <div className="absolute top-16 z-10 flex flex-col items-center text-center px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="mb-3"
        >
          <Image
            src="https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto/v1773732725/stephicon_euw4ec.jpg"
            alt="Stephanie Guerra Photography"
            width={100}
            height={100}
            className="h-24 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
          className="font-heading text-xl md:text-2xl italic text-white"
        >
          Stephanie Guerra
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="font-[family-name:var(--font-script)] text-xl md:text-2xl text-white/90"
        >
          Photography
        </motion.p>
      </div>
    </section>
  );
}
