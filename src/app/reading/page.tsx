import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { itemsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: {
    absolute: "What I actually read",
  },
  description:
    "The books Todd V actually reads and tells men to read — not a copied list.",
};

export default function ReadingPage() {
  const books = itemsByCategory("books");

  return (
    <main className="flex-1">
      <header className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:px-8">
        <p className="font-serif text-[11px] tracking-[0.42em] text-gold uppercase">
          A list from Todd V
        </p>
        <p className="mt-4 text-[11px] tracking-[0.32em] text-gold uppercase">
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

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="rule mb-12" />
        <p className="mt-5 max-w-2xl text-base leading-7 text-ivory-dim">
          If you&apos;re interested in my recommendations for clothing,
          grooming, travel, etc. — click below.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-gold bg-gold px-5 py-3 text-[12px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-transparent hover:text-gold"
        >
          More recommendations
        </Link>
      </section>

      <p className="mx-auto max-w-6xl px-6 pb-12 text-sm leading-6 text-mute md:px-8">
        As an Amazon Associate I earn from qualifying purchases. Some links are
        affiliate links. If you buy through them, I may earn a commission. It
        does not change the price you pay.
      </p>
    </main>
  );
}
