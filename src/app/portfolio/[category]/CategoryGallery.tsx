"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { categories, type Category, type GalleryImage } from "@/lib/images";

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const imageScaleVariants = {
  rest: { scale: 1, transition: spring },
  hovered: { scale: 1.05, transition: spring },
};

const captionVariants = {
  rest: { x: 20, opacity: 0, transition: spring },
  hovered: { x: 0, opacity: 1, transition: spring },
};

const PAGE_SIZE = 9;

export function CategoryGallery({
  category,
  images,
}: {
  category: Category;
  images: GalleryImage[];
}) {
  const router = useRouter();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(images.length / PAGE_SIZE);
  const visibleImages = images.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <>
      {/* Header */}
      <section className="bg-[--color-background] px-6 pt-16 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={spring}
            >
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-[--color-accent] transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
                Portfolio
              </Link>
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.1 }}
            className="font-heading text-3xl text-[--color-foreground] md:text-5xl"
          >
            {category}
          </motion.h1>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...spring, delay: 0.2 }}
              className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-400"
            >
              {images.length.toString().padStart(2, "0")} stories
            </motion.p>
          </div>

          {/* Category switcher */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = cat === category;
              return (
                <motion.button
                  key={cat}
                  type="button"
                  onClick={() => router.push(`/portfolio/${cat.toLowerCase()}`)}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={spring}
                  className={`cursor-pointer rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] shadow-sm ${
                    isActive
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[#fdfbf7]"
                      : "border-black/10 bg-white text-neutral-600 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[--color-background] px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            key={page}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 lg:grid-cols-3"
          >
            {visibleImages.map((image) => (
              <motion.div key={image.src} variants={itemVariants}>
                <motion.div
                  whileHover="hovered"
                  initial="rest"
                  animate="rest"
                  className="block w-full overflow-hidden rounded-sm shadow-sm hover:shadow-md"
                >
                  <motion.div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                    <motion.div variants={imageScaleVariants} className="absolute inset-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        quality={92}
                        className="object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    <motion.div
                      variants={captionVariants}
                      className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm px-3 py-1.5 text-white text-[10px] uppercase tracking-[0.25em]"
                    >
                      {category}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(p - 1, 0))}
                disabled={page === 0}
                className="cursor-pointer rounded-full border border-black/10 bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.2em] text-neutral-700 shadow-sm transition hover:border-black/20 hover:bg-white disabled:cursor-default disabled:opacity-40"
              >
                Prev
              </button>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                {page + 1} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                disabled={page === totalPages - 1}
                className="cursor-pointer rounded-full border border-black/10 bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.2em] text-neutral-700 shadow-sm transition hover:border-black/20 hover:bg-white disabled:cursor-default disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
