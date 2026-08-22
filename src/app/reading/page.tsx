import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { itemsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Reading",
  description:
    "The books Todd V actually reads and tells men to read — not a copied list.",
};

export default function ReadingPage() {
  const books = itemsByCategory("books");

  return (
    <>
      <header className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:px-8">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
          The shelf
        </p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight text-ivory md:text-6xl">
          What I actually read
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ivory-dim">
          Not merch. The books that stuck — learning, money, persuasion,
          fiction, the body, chess, limit hold &apos;em, pool. If I would not
          put my name on it, it is not here.
        </p>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
        {books.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="rule mb-12" />
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
          The rest of the list
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl text-ivory md:text-5xl">
          Clothes, grooming, travel, and the rest
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ivory-dim">
          If you&apos;re interested in my recommendations for clothing,
          grooming, travel, etc. — click below.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-gold bg-gold px-5 py-3 text-[12px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-transparent hover:text-gold"
        >
          Todd V Approved
        </Link>
      </section>
    </>
  );
}
