import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { featuredItems } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function Home() {
  const featured = featuredItems();

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:px-8 md:pt-24">
        <p className="text-[11px] tracking-[0.36em] text-gold uppercase">
          A private list, made public
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-ivory md:text-7xl">
          Not merch.
          <br />
          What I actually use.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-ivory-dim">
          I&apos;m Todd V. {site.tagline} Clothes I wear. Books I tell men to
          read. Watches I will sell you if you want one. If I would not put my
          name on it, it is not on this site.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/books"
            className="border border-gold bg-gold px-5 py-3 text-[12px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-transparent hover:text-gold"
          >
            The books
          </Link>
          <Link
            href="/clothes"
            className="border border-line px-5 py-3 text-[12px] tracking-[0.22em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Clothes
          </Link>
          <Link
            href="/watches"
            className="border border-line px-5 py-3 text-[12px] tracking-[0.22em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Watches
          </Link>
          <Link
            href="/dads"
            className="border border-line px-5 py-3 text-[12px] tracking-[0.22em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold"
          >
            For Dads
          </Link>
          <Link
            href="/brain-games"
            className="border border-line px-5 py-3 text-[12px] tracking-[0.22em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Brain Games
          </Link>
        </div>
      </section>

      <div className="rule mx-auto my-6 max-w-6xl" />

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Featured
            </p>
            <h2 className="mt-2 font-serif text-4xl text-ivory">On the list</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-6 text-mute md:block">
            Books, grooming, supplements, and watches are the real lists.
            Clothes is a small rotation on purpose.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px border-y border-line bg-line px-0 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            href: "/grooming",
            kicker: "Use",
            title: "Grooming",
            text: "Hair, face, deodorant.",
          },
          {
            href: "/supplements",
            kicker: "Take",
            title: "Supplements",
            text: "A personal stack. Not a protocol.",
          },
          {
            href: "/books",
            kicker: "Read",
            title: "Books",
            text: "A short shelf. No filler.",
          },
          {
            href: "/watches",
            kicker: "Wear",
            title: "Watches",
            text: "One-of-ones. Inquire to buy.",
          },
          {
            href: "/dads",
            kicker: "Raise",
            title: "For Dads",
            text: "What I put in front of my kid.",
          },
          {
            href: "/brain-games",
            kicker: "Play",
            title: "Brain Games",
            text: "Chess, Catan, Monopoly, CASHFLOW.",
          },
        ].map((block) => (
          <Link
            key={block.href}
            href={block.href}
            className="bg-ink-2 px-8 py-12 transition-colors hover:bg-panel"
          >
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              {block.kicker}
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ivory">{block.title}</h2>
            <p className="mt-3 text-sm text-ivory-dim">{block.text}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
