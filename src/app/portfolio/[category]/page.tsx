import { notFound } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import { CategoryGallery } from "./CategoryGallery";
import { IMAGES, categories, type Category } from "@/lib/images";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${title} — Stephanie Guerra Photography`,
    description: `${title} photography by Stephanie Guerra — fine art, editorial style.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = (slug.charAt(0).toUpperCase() + slug.slice(1)) as Category;

  if (!categories.includes(category)) notFound();

  const images = IMAGES.filter((img) => img.category === category);

  return (
    <PageTransition>
      <CategoryGallery category={category} images={images} />
    </PageTransition>
  );
}
