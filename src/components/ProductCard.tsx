import Image from "next/image";
import Link from "next/link";
import type { CatalogItem } from "@/lib/catalog";
import { withAffiliate } from "@/lib/site";

function statusLabel(item: CatalogItem) {
  if (item.category !== "watches") return item.retailer ?? "Shop";
  if (item.status === "sold") return "Sold";
  if (item.status === "hold") return "On hold";
  if (item.status === "available") return "Available";
  return "Open to inquiries";
}

export function ProductCard({ item }: { item: CatalogItem }) {
  const href =
    item.category === "watches"
      ? `/watches/${item.slug}`
      : item.href
        ? withAffiliate(item.href)
        : undefined;
  const external = item.category !== "watches";
  const sold = item.status === "sold";

  const photo = item.image;
  const containPhoto =
    item.imageContain ||
    item.category === "books" ||
    item.category === "supplements" ||
    item.category === "grooming" ||
    item.category === "games" ||
    item.category === "watches" ||
    item.category === "dads";
  const media =
    !photo ? (
      <div className="relative flex aspect-[3/4] flex-col justify-end bg-panel px-6 py-6">
        <div className="pointer-events-none absolute inset-3 border border-gold/20" />
        <p className="text-[10px] tracking-[0.28em] text-gold uppercase">
          {item.maker}
        </p>
        <h3
          className={`mt-3 font-serif leading-[1.1] text-ivory ${item.name.length > 32 ? "text-2xl" : "text-3xl"}`}
        >
          {item.name}
        </h3>
      </div>
    ) : (
      <div
        className={`relative overflow-hidden bg-panel ${containPhoto ? "aspect-[2/3]" : "aspect-[4/5]"}`}
      >
        <Image
          src={photo}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`${containPhoto ? "object-contain p-3" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.03] ${sold ? "grayscale contrast-75" : ""}`}
        />
        {item.banner ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <p className="w-[140%] -rotate-12 bg-gold py-3 text-center text-lg font-semibold tracking-[0.16em] text-ink uppercase shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:py-4 sm:text-xl">
              {item.banner}
            </p>
          </div>
        ) : null}
        <div className="absolute top-3 left-3 border border-gold/50 bg-ink/70 px-2 py-1 text-[10px] tracking-[0.22em] text-gold uppercase">
          {statusLabel(item)}
        </div>
      </div>
    );

  const body = (
    <div className="flex flex-col gap-2 border border-t-0 border-line px-4 py-4">
      <p className="text-[11px] tracking-[0.22em] text-mute uppercase">
        {item.maker}
      </p>
      <h3 className="font-serif text-2xl leading-tight text-ivory">
        {item.name}
      </h3>
      <p className="text-sm leading-6 text-ivory-dim">{item.blurb}</p>
      <p className="mt-1 text-[12px] tracking-[0.18em] text-gold uppercase">
        {item.category === "watches"
          ? sold
            ? "View listing"
            : "View piece"
          : item.owned
            ? "That's mine"
            : `View at ${item.retailer ?? "retailer"}`}
      </p>
    </div>
  );

  if (!href) {
    return (
      <article className="group">
        {media}
        {body}
      </article>
    );
  }

  return (
    <article className="group">
      <Link
        href={href}
        {...(external
          ? {
              target: "_blank",
              rel: item.owned
                ? "noopener noreferrer"
                : "noopener noreferrer sponsored",
            }
          : {})}
      >
        {media}
        {body}
      </Link>
    </article>
  );
}
