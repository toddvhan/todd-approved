import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getItem, watches } from "@/lib/catalog";
import { site, watchInquiryMailto } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return watches().map((watch) => ({ slug: watch.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item || item.category !== "watches") return { title: "Watch" };
  return { title: `${item.maker} ${item.name}` };
}

export default async function WatchPage({ params }: Props) {
  const { slug } = await params;
  const item = getItem(slug);
  if (!item || item.category !== "watches") notFound();

  const sold = item.status === "sold";
  const hold = item.status === "hold";
  const listed = item.status === "available";

  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:px-8">
      <div className="relative aspect-[4/5] overflow-hidden bg-panel">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-contain p-6 ${sold ? "grayscale contrast-75" : ""}`}
          />
        ) : null}
      </div>
      <div className="flex flex-col">
        <Link
          href="/watches"
          className="text-[11px] tracking-[0.28em] text-gold uppercase"
        >
          ← All watches
        </Link>
        <p className="mt-6 text-[11px] tracking-[0.28em] text-mute uppercase">
          {item.maker}
        </p>
        <h1 className="mt-2 font-serif text-5xl text-ivory">{item.name}</h1>
        <p className="mt-4 text-lg text-ivory-dim">{item.blurb}</p>
        <p className="mt-6 max-w-lg text-sm leading-7 text-mute">{item.note}</p>

        {item.specs && (
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {item.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <dt className="text-[11px] tracking-[0.2em] text-mute uppercase">
                  {spec.label}
                </dt>
                <dd className="text-sm text-ivory">{spec.value}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-[11px] tracking-[0.2em] text-mute uppercase">
                Asking
              </dt>
              <dd className="text-sm text-gold">{item.askingPrice ?? "—"}</dd>
            </div>
          </dl>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {sold ? (
            <p className="border border-line px-5 py-3 text-center text-[12px] tracking-[0.22em] text-sold uppercase">
              Sold
            </p>
          ) : (
            <a
              href={watchInquiryMailto(`${item.maker} ${item.name}`)}
              className="border border-gold bg-gold px-5 py-3 text-center text-[12px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-transparent hover:text-gold"
            >
              {hold
                ? "Inquire anyway"
                : listed
                  ? "Available for purchase"
                  : "Open to inquiries"}
            </a>
          )}
          {item.marketplaceUrl && (
            <a
              href={item.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line px-5 py-3 text-center text-[12px] tracking-[0.22em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold"
            >
              View on {item.marketplaceName ?? "marketplace"}
            </a>
          )}
        </div>
        <p className="mt-6 text-xs leading-5 text-mute">
          Payment is never taken on {site.name}. If we agree on a piece, the sale
          happens through a marketplace or another channel that stays separate
          from my other businesses.
        </p>
      </div>
    </article>
  );
}
