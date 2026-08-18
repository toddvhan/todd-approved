import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
};

export default function DisclosurePage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:px-8">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Legal</p>
      <h1 className="mt-3 font-serif text-5xl text-ivory">
        Affiliate disclosure
      </h1>
      <div className="mt-8 space-y-5 text-base leading-7 text-ivory-dim">
        <p>
          Todd V Approved is my list. I&apos;m Todd V. If you click a link and
          buy something, I may receive a commission at no extra cost to you.
        </p>
        <p>
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p>
          I recommend products I use or would use. A commission is not why an
          item is on this list — it is why I bother to host the list.
        </p>
        <p>
          Watch listings are not affiliate offers. They are pieces I may sell.
          This website does not process payments, store cards, or act as a
          merchant.
        </p>
        <p>
          Supplements and grooming items are listed because I use them. They
          are not medicine. Nothing on this site diagnoses, treats, or cures
          any condition, including acne. Individual results vary. Talk to a
          doctor before you take a supplement.
        </p>
        <p>
          Studio (studio.com/todd) and 1% Dating (onepercent.dating) are my
          programs. Digital Black Belt now lives there. If you sign up, that is
          my business — not a third-party affiliate commission on someone
          else&apos;s product.
        </p>
      </div>
    </article>
  );
}
