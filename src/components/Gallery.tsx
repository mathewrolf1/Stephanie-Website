"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const categories = ["Weddings", "Engagement", "Family", "Motherhood"] as const;

type Category = (typeof categories)[number];

type GalleryImage = {
  src: string;
  alt: string;
  category: Category;
};

// Base list of images.
// For each category, add one entry per file under:
// public/images/Weddings, public/images/Engagement, public/images/Family, public/images/Motherhood
const IMAGES: GalleryImage[] = [
  // WEDDINGS – matches your current Weddings subfolder
  { src: "/images/Weddings/DSC07397.JPG", alt: "", category: "Weddings" },
  { src: "/images/Weddings/DSC07938.JPG", alt: "", category: "Weddings" },
  { src: "/images/Weddings/DSC07947.JPG", alt: "", category: "Weddings" },
  { src: "/images/Weddings/DSC08450.JPG", alt: "", category: "Weddings" },
  { src: "/images/Weddings/DSC08543.JPG", alt: "", category: "Weddings" },
  { src: "/images/Weddings/OSC_0169.jpg", alt: "", category: "Weddings" },
  { src: "/images/Weddings/OSC_0925.jpg", alt: "", category: "Weddings" },
  { src: "/images/Weddings/OSC_0969.jpg", alt: "", category: "Weddings" },

  // ENGAGEMENT – add ALL files from public/images/Engagement here
  { src: "/images/Engagement/000090820005.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/000090820027.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/DSC03688.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/DSC03787.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/DSC06406.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/DSC07364.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/DSC07371.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/IMG_0320.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/OSC_0090.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/OSC_0352.jpg", alt: "", category: "Engagement" },
  { src: "/images/Engagement/OSC_0160.jpg", alt: "", category: "Engagement" },

  // Family
  { src: "/images/Family/DSC00370.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC00989.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC01008.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC01095.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC01172.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC01203.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC01415.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC01535.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC01667.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC02032.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC02067.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC02174.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC02218.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC02308.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC02486.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC03398.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC03473.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC03479.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC03567.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC04455.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC04495.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC05388.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC05619.jpg", alt: "", category: "Family" },
  { src: "/images/Family/DSC06450.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC07637.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC07819.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC08045.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC09613.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC09726.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC09737.JPG", alt: "", category: "Family" },
  { src: "/images/Family/DSC09743.JPG", alt: "", category: "Family" },

  // Motherhood
  { src: "/images/Motherhood/DSC00184.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC02826.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC02833.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC02946.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC02983.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03074.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03092.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03179.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03341.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03464.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03665.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC03786.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04021.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04193.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04212.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04278.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04349.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04582.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04615.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04841.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC04952.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC05646.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC05740.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC05817.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC05856.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC06286.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/DSC06450.JPG", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/OSC_0102.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/OSC_0325.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/OSC_0330.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/OSC_0517.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/OSC_0639.jpg", alt: "", category: "Motherhood" },
  { src: "/images/Motherhood/OSC_0675.jpg", alt: "", category: "Motherhood" },
];

type GalleryProps = {
  images?: GalleryImage[];
};

export function Gallery({ images = IMAGES }: GalleryProps) {
  // Lightbox state: which category is open, and the currently viewed image index
  const [lightboxCategory, setLightboxCategory] = useState<Category | null>(
    null
  );
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [sectionStartIndex, setSectionStartIndex] = useState<
    Record<Category, number>
  >({
    Weddings: 0,
    Engagement: 0,
    Family: 0,
    Motherhood: 0,
  });

  const imagesByCategory = useMemo(() => {
    const grouped: Record<Category, GalleryImage[]> = {
      Weddings: [],
      Engagement: [],
      Family: [],
      Motherhood: [],
    };

    for (const img of images) {
      grouped[img.category].push(img);
    }

    return grouped;
  }, [images]);

  const openLightbox = useCallback(
    (category: Category, src: string) => {
      const categoryImages = imagesByCategory[category];
      const idx = categoryImages.findIndex((img) => img.src === src);
      setLightboxCategory(category);
      setLightboxIndex(Math.max(0, idx));
    },
    [imagesByCategory]
  );

  const closeLightbox = useCallback(() => {
    setLightboxCategory(null);
    setLightboxIndex(0);
  }, []);

  const showPrevImage = useCallback(() => {
    setLightboxIndex((current) => Math.max(current - 1, 0));
  }, []);

  const showNextImage = useCallback((total: number) => {
    setLightboxIndex((current) => Math.min(current + 1, Math.max(0, total - 1)));
  }, []);

  const showPrevSectionGroup = useCallback((category: Category) => {
    setSectionStartIndex((prev) => ({
      ...prev,
      [category]: Math.max((prev[category] ?? 0) - 3, 0),
    }));
  }, []);

  const showNextSectionGroup = useCallback(
    (category: Category, total: number) => {
      setSectionStartIndex((prev) => {
        const maxIndex = Math.max(0, total - 3);
        return {
          ...prev,
          [category]: Math.min((prev[category] ?? 0) + 3, maxIndex),
        };
      });
    },
    []
  );

  const activeCategoryImages =
    lightboxCategory !== null ? imagesByCategory[lightboxCategory] : [];
  const activeImage =
    activeCategoryImages.length > 0 ? activeCategoryImages[lightboxIndex] : null;

  useEffect(() => {
    if (!lightboxCategory) return;
    if (typeof window === "undefined") return;
    if (activeCategoryImages.length <= 1) return;

    const prev = activeCategoryImages[lightboxIndex - 1]?.src;
    const next = activeCategoryImages[lightboxIndex + 1]?.src;
    const candidates = [prev, next].filter(
      (src): src is string => typeof src === "string" && src.length > 0
    );

    for (const src of candidates) {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
    }
  }, [lightboxCategory, lightboxIndex, activeCategoryImages]);

  return (
    <section
      id="portfolio"
      className="bg-[--color-background] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Portfolio
            </p>
            <h2 className="font-heading text-2xl tracking-tight text-[--color-foreground] md:text-3xl">
              Selected stories
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-neutral-600 md:text-sm">
            A glimpse into weddings, engagements, families, and motherhood
            sessions, curated with an editorial, romantic eye.
          </p>
        </header>

        <div className="space-y-16">
          {categories.map((category) => {
            const categoryImages = imagesByCategory[category];
            if (!categoryImages?.length) return null;
            const startIndex = sectionStartIndex[category] ?? 0;
            const visibleImages = categoryImages.slice(startIndex, startIndex + 3);

            return (
              <section key={category} className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-lg tracking-[0.2em] uppercase text-[--color-foreground]">
                    {category}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {categoryImages.length.toString().padStart(2, "0")} images
                  </span>
                </div>

                {/* Section viewer: 1-up mobile, 3-up desktop, paged in groups of 3 */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => showPrevSectionGroup(category)}
                    disabled={startIndex === 0}
                    className="rounded-full border border-black/10 bg-white/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-neutral-700 shadow-sm transition hover:border-black/20 hover:bg-white disabled:opacity-40"
                  >
                    Prev
                  </button>
                  <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {startIndex + 1}-
                    {Math.min(startIndex + visibleImages.length, categoryImages.length)}{" "}
                    of {categoryImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => showNextSectionGroup(category, categoryImages.length)}
                    disabled={startIndex + 3 >= categoryImages.length}
                    className="rounded-full border border-black/10 bg-white/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-neutral-700 shadow-sm transition hover:border-black/20 hover:bg-white disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {visibleImages.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(category, image.src);
                      }}
                      className="group block w-full cursor-zoom-in overflow-hidden rounded-sm shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          quality={92}
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Lightbox showing a single clicked image */}
      {lightboxCategory && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white hover:bg-black"
            >
              Close
            </button>

            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-300">
              <span>{lightboxCategory}</span>
              <span>
                {lightboxIndex + 1} of {activeCategoryImages.length}
              </span>
            </div>

            <div className="relative flex items-center gap-4">
              <button
                type="button"
                onClick={showPrevImage}
                disabled={lightboxIndex === 0}
                className="z-20 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-black disabled:opacity-30"
              >
                Prev
              </button>

              <div className="flex w-full flex-1 justify-center">
                <div className="relative aspect-[3/4] w-full max-w-3xl overflow-hidden rounded-sm bg-transparent">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="100vw"
                    quality={100}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => showNextImage(activeCategoryImages.length)}
                disabled={lightboxIndex + 1 >= activeCategoryImages.length}
                className="z-20 rounded-full bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-black disabled:opacity-30"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}