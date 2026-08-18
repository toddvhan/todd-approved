import type { Metadata } from "next";
import { InquiryForm } from "./InquiryForm";

export const metadata: Metadata = {
  title: "Inquire",
};

type Props = {
  searchParams: Promise<{ watch?: string }>;
};

export default async function InquirePage({ searchParams }: Props) {
  const { watch } = await searchParams;
  const piece = watch?.trim();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:px-8">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
        Contact
      </p>
      <h1 className="mt-3 font-serif text-5xl text-ivory">
        {piece ? "Watch inquiry" : "Inquire"}
      </h1>
      <p className="mt-5 text-base leading-7 text-ivory-dim">
        Watches and anything else on this list. No payment on this site. If we
        agree on a piece, the sale happens somewhere else.
      </p>
      <div className="mt-10">
        <InquiryForm watch={piece} />
      </div>
    </article>
  );
}
