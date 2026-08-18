import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-md">
          <p className="font-serif text-xl tracking-[0.14em] text-ivory uppercase">
            {site.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-mute">
            I&apos;m Todd V. Studio and 1% Dating are my programs.
            Everything else on this list is what I use or would use.
          </p>
          <p className="mt-3 text-sm leading-6 text-mute">
            Some links are affiliate links. If you buy through them, I may earn a
            small commission. It does not change the price you pay.
          </p>
          <p className="mt-3 text-sm leading-6 text-mute">
            Watches are sold off this site. No checkout, no Stripe, no card form
            here — so this store cannot touch my other merchant accounts.
          </p>
          <p className="mt-3 text-sm leading-6 text-mute">
            Supplements are what I take, not medical advice. Individual results
            vary.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm tracking-[0.12em] text-ivory-dim uppercase">
          <Link href="/disclosure" className="hover:text-gold">
            Affiliate disclosure
          </Link>
          <a
            href={site.youtube}
            className="hover:text-gold"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            href={site.instagram}
            className="hover:text-gold"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <Link href="/inquire" className="hover:text-gold">
            Inquiries
          </Link>
        </div>
      </div>
    </footer>
  );
}
