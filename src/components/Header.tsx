import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="group min-w-0">
            <p className="font-serif text-[11px] tracking-[0.42em] text-gold uppercase">
              A list from Todd V
            </p>
            <p className="mt-1 truncate font-serif text-2xl tracking-[0.18em] text-ivory uppercase md:text-3xl">
              {site.name}
            </p>
          </Link>
          <Link
            href="/watches"
            className="hidden shrink-0 border border-gold/40 px-3 py-2 text-[11px] tracking-[0.22em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold hover:text-ink sm:inline-block"
          >
            Watches for sale
          </Link>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.22em] text-ivory-dim uppercase">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
