import { categoryCopy, type Category } from "@/lib/catalog";

export function PageIntro({ category }: { category: Category }) {
  const copy = categoryCopy[category];
  return (
    <header className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:px-8">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
        {copy.kicker}
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight text-ivory md:text-6xl">
        {copy.title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-ivory-dim">
        {copy.intro}
      </p>
      {copy.disclaimer && (
        <p className="mt-5 max-w-2xl border border-line bg-panel px-4 py-3 text-sm leading-6 text-mute">
          {copy.disclaimer}
        </p>
      )}
    </header>
  );
}
