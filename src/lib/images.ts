export const categories = ["Weddings", "Engagement", "Family", "Motherhood"] as const;

export type Category = (typeof categories)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  category: Category;
};

// ─────────────────────────────────────────────────────────────────────────────
// To add or remove photos, edit the arrays below.
// Each entry is just the image path relative to the /public folder.
// ─────────────────────────────────────────────────────────────────────────────

const Weddings: string[] = [
  "/images/Weddings/DSC05718.JPG",
  "/images/Weddings/DSC06020.JPG",
  "/images/Weddings/DSC06406.JPG",
  "/images/Weddings/DSC07047.JPG",
  "/images/Weddings/DSC07364.JPG",
  "/images/Weddings/DSC07397.JPG",
  "/images/Weddings/DSC08450.JPG",
  "/images/Weddings/DSC08543.JPG",
  "/images/Weddings/OSC_0169.jpg",
  "/images/Weddings/OSC_0925.jpg",
  "/images/Weddings/OSC_0969.jpg",
];

const Engagement: string[] = [
  "/images/Engagement/000090820005.jpg",
  "/images/Engagement/000090820027.jpg",
  "/images/Engagement/DSC03688.JPG",
  "/images/Engagement/DSC03787.JPG",
  "/images/Engagement/DSC06406.JPG",
  "/images/Engagement/DSC07364.JPG",
  "/images/Engagement/DSC07371.JPG",
  "/images/Engagement/IMG_0320.JPG",
  "/images/Engagement/OSC_0090.jpg",
  "/images/Engagement/OSC_0160.jpg",
  "/images/Engagement/OSC_0352.jpg",
];

const Family: string[] = [
  "/images/Family/DSC00370.jpg",
  "/images/Family/DSC00989.JPG",
  "/images/Family/DSC01008.JPG",
  "/images/Family/DSC01095.jpg",
  "/images/Family/DSC01172.jpg",
  "/images/Family/DSC01203.jpg",
  "/images/Family/DSC01415.JPG",
  "/images/Family/DSC01535.jpg",
  "/images/Family/DSC01667.jpg",
  "/images/Family/DSC02032.jpg",
  "/images/Family/DSC02067.jpg",
  "/images/Family/DSC02174.jpg",
  "/images/Family/DSC02218.jpg",
  "/images/Family/DSC02308.jpg",
  "/images/Family/DSC02486.jpg",
  "/images/Family/DSC03398.jpg",
  "/images/Family/DSC03473.jpg",
  "/images/Family/DSC03479.jpg",
  "/images/Family/DSC03567.jpg",
  "/images/Family/DSC04455.jpg",
  "/images/Family/DSC04495.jpg",
  "/images/Family/DSC05388.jpg",
  "/images/Family/DSC05619.jpg",
  "/images/Family/DSC06450.JPG",
  "/images/Family/DSC07637.JPG",
  "/images/Family/DSC07819.JPG",
  "/images/Family/DSC08045.JPG",
  "/images/Family/DSC09613.JPG",
  "/images/Family/DSC09726.JPG",
  "/images/Family/DSC09737.JPG",
  "/images/Family/DSC09743.JPG",
];

const Motherhood: string[] = [
  "/images/Motherhood/DSC00184.JPG",
  "/images/Motherhood/DSC02826.jpg",
  "/images/Motherhood/DSC02833.jpg",
  "/images/Motherhood/DSC02946.JPG",
  "/images/Motherhood/DSC02983.JPG",
  "/images/Motherhood/DSC03074.jpg",
  "/images/Motherhood/DSC03092.JPG",
  "/images/Motherhood/DSC03179.jpg",
  "/images/Motherhood/DSC03341.JPG",
  "/images/Motherhood/DSC03464.JPG",
  "/images/Motherhood/DSC03665(1).JPG",
  "/images/Motherhood/DSC03665.JPG",
  "/images/Motherhood/DSC03786.JPG",
  "/images/Motherhood/DSC04021.jpg",
  "/images/Motherhood/DSC04193.jpg",
  "/images/Motherhood/DSC04212.jpg",
  "/images/Motherhood/DSC04278.jpg",
  "/images/Motherhood/DSC04349.jpg",
  "/images/Motherhood/DSC04582.JPG",
  "/images/Motherhood/DSC04615.JPG",
  "/images/Motherhood/DSC04841.JPG",
  "/images/Motherhood/DSC04952.JPG",
  "/images/Motherhood/DSC05646.JPG",
  "/images/Motherhood/DSC05740.jpg",
  "/images/Motherhood/DSC05817.jpg",
  "/images/Motherhood/DSC05856.jpg",
  "/images/Motherhood/DSC06286.JPG",
  "/images/Motherhood/DSC06450.JPG",
  "/images/Motherhood/OSC_0102.jpg",
  "/images/Motherhood/OSC_0325.jpg",
  "/images/Motherhood/OSC_0330.jpg",
  "/images/Motherhood/OSC_0517.jpg",
  "/images/Motherhood/OSC_0639.jpg",
  "/images/Motherhood/OSC_0675.jpg",
];

// ─────────────────────────────────────────────────────────────────────────────
// No need to edit below this line.
// ─────────────────────────────────────────────────────────────────────────────

const imagesByCategory: Record<Category, string[]> = {
  Weddings,
  Engagement,
  Family,
  Motherhood,
};

export const IMAGES: GalleryImage[] = categories.flatMap((cat) =>
  imagesByCategory[cat].map((src) => ({ src, alt: "", category: cat }))
);
