import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProductCard } from "@/components/ProductCard";
import { watches } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Watches",
};

export default function WatchesPage() {
  const pieces = watches();

  return (
    <>
      <PageIntro category="watches" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2 md:px-8">
        {pieces.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>
    </>
  );
}
