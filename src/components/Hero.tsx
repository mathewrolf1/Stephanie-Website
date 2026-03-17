"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  name: string;
};

const CDN = "https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto";

const heroImages = [
  `${CDN}/images/Weddings/DSC07938.JPG`,
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
      {/* Top-left logo */}
      <div className="absolute top-6 left-6 z-10 w-28 md:w-40">
        <Image
          src="https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto/v1773733586/stephicon-removebg-preview_dtuslb.png"
          alt="Stephanie Guerra Photography"
          width={400}
          height={400}
          className="w-full h-auto object-contain drop-shadow-[0_4px_24px_rgba(255,255,255,0.6)]"
        />
      </div>
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
