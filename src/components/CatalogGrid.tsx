import { PageIntro } from "@/components/PageIntro";
import { ProductCard } from "@/components/ProductCard";
import { itemsByCategory, type Category } from "@/lib/catalog";

export function CatalogGrid({ category }: { category: Category }) {
  const items = itemsByCategory(category);

  return (
    <>
      <PageIntro category={category} />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {items.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>
    </>
  );
}
