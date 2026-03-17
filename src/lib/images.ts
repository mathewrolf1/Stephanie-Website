export const categories = ["Weddings", "Engagement", "Family", "Motherhood"] as const;

export type Category = (typeof categories)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  category: Category;
};

const CDN = "https://res.cloudinary.com/dwvx7bzki/image/upload/q_auto,f_auto";

// ─────────────────────────────────────────────────────────────────────────────
// To add or remove photos, edit the arrays below.
// Each entry is just the image path relative to the /public folder.
// ─────────────────────────────────────────────────────────────────────────────

const Weddings: string[] = [
  `${CDN}/images/Weddings/DSC05718.JPG`,
  `${CDN}/images/Weddings/DSC06020.JPG`,
  `${CDN}/images/Weddings/DSC06406.JPG`,
  `${CDN}/images/Weddings/DSC07047.JPG`,
  `${CDN}/images/Weddings/DSC07364.JPG`,
  `${CDN}/images/Weddings/DSC07397.JPG`,
  `${CDN}/images/Weddings/DSC07938.JPG`,
  `${CDN}/images/Weddings/DSC07947.JPG`,
  `${CDN}/images/Weddings/DSC08450.JPG`,
  `${CDN}/images/Weddings/DSC08543.JPG`,
  `${CDN}/images/Weddings/OSC_0169.jpg`,
  `${CDN}/images/Weddings/OSC_0925.jpg`,
  `${CDN}/images/Weddings/OSC_0969.jpg`,
];

const Engagement: string[] = [
  `${CDN}/images/Engagement/000090820005.jpg`,
  `${CDN}/images/Engagement/000090820027.jpg`,
  `${CDN}/images/Engagement/DSC03688.JPG`,
  `${CDN}/images/Engagement/DSC03787.JPG`,
  `${CDN}/images/Engagement/DSC06406.JPG`,
  `${CDN}/images/Engagement/DSC07364.JPG`,
  `${CDN}/images/Engagement/DSC07371.JPG`,
  `${CDN}/images/Engagement/IMG_0320.JPG`,
  `${CDN}/images/Engagement/OSC_0090.jpg`,
  `${CDN}/images/Engagement/OSC_0160.jpg`,
  `${CDN}/images/Engagement/OSC_0352.jpg`,
];

const Family: string[] = [
  `${CDN}/images/Family/DSC00989.JPG`,
  `${CDN}/images/Family/DSC01008.JPG`,
  `${CDN}/images/Family/DSC01172.jpg`,
  `${CDN}/images/Family/DSC01203.jpg`,
  `${CDN}/images/Family/DSC01415.JPG`,
  `${CDN}/images/Family/DSC01535.jpg`,
  `${CDN}/images/Family/DSC01667.jpg`,
  `${CDN}/images/Family/DSC02174.jpg`,
  `${CDN}/images/Family/DSC02218.jpg`,
  `${CDN}/images/Family/DSC02308.jpg`,
  `${CDN}/images/Family/DSC02486.jpg`,
  `${CDN}/images/Family/DSC03398.jpg`,
  `${CDN}/images/Family/DSC03473.jpg`,
  `${CDN}/images/Family/DSC03479.jpg`,
  `${CDN}/images/Family/DSC03567.jpg`,
  `${CDN}/images/Family/DSC04455.jpg`,
  `${CDN}/images/Family/DSC04495.jpg`,
  `${CDN}/images/Family/DSC05388.jpg`,
  `${CDN}/images/Family/DSC05619.jpg`,
  `${CDN}/images/Family/DSC06450.JPG`,
  `${CDN}/images/Family/DSC07637.JPG`,
  `${CDN}/images/Family/DSC07819.JPG`,
  `${CDN}/images/Family/DSC08045.JPG`,
  `${CDN}/images/Family/DSC09613.JPG`,
  `${CDN}/images/Family/DSC09726.JPG`,
  `${CDN}/images/Family/DSC09737.JPG`,
  `${CDN}/images/Family/DSC09743.JPG`,
];

const Motherhood: string[] = [
  `${CDN}/images/Motherhood/DSC00184.JPG`,
  `${CDN}/images/Motherhood/DSC02826.jpg`,
  `${CDN}/images/Motherhood/DSC02833.jpg`,
  `${CDN}/images/Motherhood/DSC02983.JPG`,
  `${CDN}/images/Motherhood/DSC03092.JPG`,
  `${CDN}/images/Motherhood/DSC03341.JPG`,
  `${CDN}/images/Motherhood/DSC03464.JPG`,
  `${CDN}/images/Motherhood/DSC03665.JPG`,
  `${CDN}/images/Motherhood/DSC03786.JPG`,
  `${CDN}/images/Motherhood/DSC04021.jpg`,
  `${CDN}/images/Motherhood/DSC04193.jpg`,
  `${CDN}/images/Motherhood/DSC04212.jpg`,
  `${CDN}/images/Motherhood/DSC04278.jpg`,
  `${CDN}/images/Motherhood/DSC04349.jpg`,
  `${CDN}/images/Motherhood/DSC04582.JPG`,
  `${CDN}/images/Motherhood/DSC04615.JPG`,
  `${CDN}/images/Motherhood/DSC04841.JPG`,
  `${CDN}/images/Motherhood/DSC04952.JPG`,
  `${CDN}/images/Motherhood/DSC05646.JPG`,
  `${CDN}/images/Motherhood/DSC05740.jpg`,
  `${CDN}/images/Motherhood/DSC05817.jpg`,
  `${CDN}/images/Motherhood/DSC05856.jpg`,
  `${CDN}/images/Motherhood/DSC06286.JPG`,
  `${CDN}/images/Motherhood/DSC06450.JPG`,
  `${CDN}/images/Motherhood/OSC_0102.jpg`,
  `${CDN}/images/Motherhood/OSC_0325.jpg`,
  `${CDN}/images/Motherhood/OSC_0330.jpg`,
  `${CDN}/images/Motherhood/OSC_0517.jpg`,
  `${CDN}/images/Motherhood/OSC_0639.jpg`,
  `${CDN}/images/Motherhood/OSC_0675.jpg`,
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
