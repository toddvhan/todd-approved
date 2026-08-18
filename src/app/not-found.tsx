import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">404</p>
      <h1 className="mt-4 font-serif text-5xl text-ivory">Not on the list</h1>
      <p className="mt-4 text-ivory-dim">That page is not here.</p>
      <Link
        href="/"
        className="mt-8 inline-block border border-gold px-5 py-3 text-[12px] tracking-[0.22em] text-gold uppercase"
      >
        Back to the catalog
      </Link>
    </div>
  );
}
