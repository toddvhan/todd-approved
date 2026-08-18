import {
  chessableHref,
  fproHref,
  pokerSnowieHref,
  whoopHref,
} from "./site";

export const categories = [
  "clothes",
  "grooming",
  "supplements",
  "books",
  "watches",
  "resources",
  "dads",
  "games",
] as const;
export type Category = (typeof categories)[number];

export type WatchStatus = "available" | "inquire" | "hold" | "sold";

export type CatalogItem = {
  slug: string;
  name: string;
  maker: string;
  category: Category;
  blurb: string;
  note: string;
  image?: string;
  imageAlt: string;
  imageContain?: boolean;
  href?: string;
  retailer?: string;
  price?: string;
  featured?: boolean;
  status?: WatchStatus;
  askingPrice?: string;
  specs?: { label: string; value: string }[];
  marketplaceUrl?: string;
  marketplaceName?: string;
  owned?: boolean;
  banner?: string;
};

export const categoryCopy: Record<
  Category,
  { title: string; kicker: string; intro: string; disclaimer?: string }
> = {
  clothes: {
    title: "Clothes",
    kicker: "What I actually wear",
    intro:
      "A small rotation, including pieces that may already be gone from stores. Black tee, the reversed narcissist tee, rag & bone henley and FRAME long-sleeve, jeans, joggers, Flux, Ted Baker, Lunargrand boots, the gi, the tape, the wallet. If a SKU is dead, the link is a search — not a scavenger hunt dressed up as a product page.",
  },
  grooming: {
    title: "Grooming",
    kicker: "Hair, face, and deodorant",
    intro:
      "Hair: R+Co Aircraft, Oribe Rough Luxury, BluMaan clay. Face: Clinique daily lotion, with SPF and without. Deodorant: Dr. Squatch.",
  },
  supplements: {
    title: "Supplements",
    kicker: "What I take",
    intro:
      "A personal stack, not a protocol. LMNT for hydration. PostRoll after BJJ or CrossFit. The rest is generic — a stand-in bottle photo until I pin what’s actually in the cabinet.",
    disclaimer:
      "Not medical advice. These are not treatments, cures, or diagnoses for acne or anything else. This is what I take. Individual results vary. Talk to a doctor before you start a supplement.",
  },
  books: {
    title: "Books",
    kicker: "The shelf",
    intro:
      "Not a reading list I copied. These are the ones that stuck — learning, money, persuasion, fiction, the body, chess, limit hold 'em, pool, stress, the long game.",
  },
  watches: {
    title: "Watches",
    kicker: "Pieces I will sell",
    intro:
      "From the collection. The Égard is available for purchase. The rest are open to inquiries. This site does not take payment — sale happens off-site. The Air-King is box, no papers. Everything else is box and papers.",
  },
  resources: {
    title: "Resources",
    kicker: "Gym, kit, and the rest",
    intro:
      "Two apps that are mine: Studio, and 1% Dating. Then how I train and stay powered — ClassPass, Freeletics, WHOOP for BJJ (sleeve and boxers — not the wrist on the mats). Chessable for chess. PokerSnowie for no-limit. FPRO for soccer. PlugBug. The Tascam for voice. SKYN Elite.",
  },
  dads: {
    title: "For Dads",
    kicker: "What I put in front of my kid",
    intro:
      "Not a parenting brand. Chess stories before Chessable. Numberblocks for counting. Synthesis Tutor for math. FPRO on the mat. Doman if you want to work early. Rich Dad Poor Dad for money. Same FPRO and same Kiyosaki as the other lists — they belong here too.",
    disclaimer:
      "Early-learning books and apps are not a diagnosis, a treatment, or a guarantee your child gets smarter. This is what I use. Work with your kid. Skip the cult energy.",
  },
  games: {
    title: "Brain Games",
    kicker: "The table",
    intro:
      "Chess. Catan. Monopoly. CASHFLOW. Then the books that actually made me better at the games I study — chess, limit hold 'em, and pool. Same titles as the shelf. Chessable and PokerSnowie are the apps.",
  },
};

function book(entry: {
  slug: string;
  name: string;
  maker: string;
  blurb: string;
  isbn: string;
  featured?: boolean;
  note?: string;
  image?: string;
  category?: Category;
  banner?: string;
}): CatalogItem {
  return {
    slug: entry.slug,
    name: entry.name,
    maker: entry.maker,
    category: entry.category ?? "books",
    blurb: entry.blurb,
    note: entry.note ?? entry.blurb,
    image: entry.image ?? `/books/${entry.slug}.jpg`,
    imageAlt: `${entry.name} by ${entry.maker}`,
    imageContain: true,
    href: `https://www.amazon.com/dp/${entry.isbn}`,
    retailer: "Amazon",
    featured: entry.featured,
    banner: entry.banner,
  };
}

function alsoOnGames(entry: {
  slug: string;
  name: string;
  maker: string;
  blurb: string;
  isbn: string;
  note?: string;
  image?: string;
  banner?: string;
}): CatalogItem {
  return book({
    ...entry,
    slug: `${entry.slug}-games`,
    category: "games",
    image: entry.image ?? `/books/${entry.slug}.jpg`,
    note: `${entry.note ?? "Same edition as Books."} Duplicate card on purpose — Brain Games.`,
  });
}

function amazonImage(asin: string) {
  return `https://m.media-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
}

function amazonDp(asin: string) {
  return `https://www.amazon.com/dp/${asin}`;
}

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}

function supplement(entry: {
  slug: string;
  name: string;
  asin: string;
  blurb: string;
  note?: string;
}): CatalogItem {
  return {
    slug: entry.slug,
    name: entry.name,
    maker: "NOW Foods",
    category: "supplements",
    blurb: entry.blurb,
    note:
      entry.note ??
      "Stand-in bottle photo — generic, not the cabinet brand. Associates tag goes on the Amazon product URL.",
    image: `/products/supp-${entry.slug}.jpg`,
    imageAlt: `${entry.name} supplement bottle`,
    imageContain: true,
    href: `https://www.amazon.com/dp/${entry.asin}`,
    retailer: "Amazon",
  };
}

export const catalog: CatalogItem[] = [
  {
    slug: "true-classic-pima-black",
    name: "Pima Cotton Black Tee",
    maker: "True Classic",
    category: "clothes",
    blurb: "The black t-shirt. Pima cotton, fitted, what I actually put on.",
    note: "Amazon search until a Pima listing is pinned — do not use the 60/40 cotton-blend 2-pack. Straight-hem vs curved-hem — confirm which one you own. Associates on the Amazon URL.",
    image: "/products/true-classic-pima-black.jpg",
    imageAlt: "White man wearing a black True Classic Pima crew with a curved hem",
    href: amazonSearch("True Classic Pima Cotton Blend Curved Hem Crew black"),
    retailer: "Amazon",
    featured: true,
  },
  {
    slug: "narcissist-reversed-tee",
    name: "Narcissist tee, reversed",
    maker: "Unbranded",
    category: "clothes",
    blurb:
      "Black tee. NARCISSIST, the word spelled in reverse — so it reads in the mirror. The joke is the point.",
    note: "Zazzle POD: Narcissistic Mirrored Narcissist T-Shirt, product 256576057091103301, designer Malcolm_Elain. Thumbnail is the Zazzle RealView mockup. Ambassador program is 15% on other creators’ products (zazzle.com/hc — enroll, then swap this URL for the tracked cross-promo link). Still a print-on-demand joke, not a house brand. Do not substitute a designer 'Narcissist' drop (Carti/Opium, etc.). Amazon B08JL8JQQY was the previous match; its catalog image is a 1×1 placeholder.",
    image: "/products/narcissist-reversed-tee.jpg",
    imageAlt: "Black t-shirt with narcissist printed in reverse so it reads in a mirror",
    imageContain: true,
    href: "https://www.zazzle.com/narcissistic_mirrored_narcissist_t_shirt-256576057091103301",
    retailer: "Zazzle",
  },
  {
    slug: "rag-bone-ls-black",
    name: "Classic Slub henley, jet black",
    maker: "rag & bone",
    category: "clothes",
    blurb:
      "The black henley. I got this on sale — you can likely get something similar for less if this is out of your budget.",
    note: "Classic Slub / Flame Henley in Jet Black, M000T676G. Thumbnail is the official rag-bone.com packshot. href is Amazon B07BSV45YP (Medium, Jet Black). Public copy includes the sale/budget line on purpose.",
    image: "/products/rag-bone-classic-slub-henley.jpg",
    imageAlt: "rag & bone Classic Slub Henley in jet black, three-button placket",
    imageContain: true,
    href: amazonDp("B07BSV45YP"),
    retailer: "Amazon",
  },
  {
    slug: "frame-ls-black",
    name: "Duo Fold long-sleeve, noir",
    maker: "FRAME",
    category: "clothes",
    blurb:
      "The other black long-sleeve. Double-knit cotton, crew, noir. I got this on sale — you can likely get something similar for less if this is out of your budget.",
    note: "Duo Fold Long Sleeve Crew in Noir (LMTS0242). Thumbnail is the official frame-store.com packshot. href is Amazon B08RP92XJ1 (Medium, Noir). Public copy includes the same sale/budget line as the rag & bone henley.",
    image: "/products/frame-duo-fold-ls-noir.jpg",
    imageAlt: "FRAME Duo Fold Long Sleeve Crew in noir, crew neck",
    imageContain: true,
    href: amazonDp("B08RP92XJ1"),
    retailer: "Amazon",
  },
  {
    slug: "g-star-jeans",
    name: "Jeans",
    maker: "G-Star RAW",
    category: "clothes",
    blurb:
      "I can't locate the exact ones I wear — likely discontinued. G-Star is a brand I wear and trust. Spending money for good jeans is well worth it. Women do notice.",
    note: "Exact pair still unpinned. Thumbnail is G-Star 5620 3D Slim in black — between slim and skinny, 3D knee/thigh panels. Amazon search, not a fake SKU.",
    image: "/products/g-star-5620-slim-black.jpg",
    imageAlt: "Black G-Star 5620 3D Slim jeans, slim-skinny with paneled knees",
    href: amazonSearch("G-Star RAW 5620 3D Slim black jeans"),
    retailer: "Amazon",
  },
  {
    slug: "calvin-klein-jeans",
    name: "Jeans",
    maker: "Calvin Klein",
    category: "clothes",
    blurb:
      "The other pair. Same story — I can't locate the exact ones, likely discontinued. Calvin Klein is a brand I wear and trust. Spending money for good jeans is well worth it. Women do notice.",
    note: "Exact pair still unpinned. Thumbnail is grey, somewhat straight-leg — not skinny. Amazon search, not a fake SKU.",
    image: "/products/ck-grey-straight-jeans.jpg",
    imageAlt: "Grey somewhat straight-leg jeans",
    href: amazonSearch("Calvin Klein men's grey straight leg jeans"),
    retailer: "Amazon",
  },
  {
    slug: "flux-footwear",
    name: "Adapt Knit Trainer, grey/white",
    maker: "Flux Footwear",
    category: "clothes",
    blurb:
      "The Flux pair. Grey and white — the closest thing still on the site to the grey I actually wear. Casual, not game-specific.",
    note: "Grey/White KT confirmed. Amazon search — size-specific listings come and go. Associates on the Amazon URL.",
    image: "/products/flux-adapt-knit-trainer-grey-white.jpg",
    imageAlt: "Flux Adapt Knit Trainer in grey and white",
    href: amazonSearch("Flux Adapt Knit Trainer Grey White"),
    retailer: "Amazon",
    featured: true,
  },
  {
    slug: "ted-baker-mykka",
    name: "Mykka high-tops",
    maker: "Ted Baker",
    category: "clothes",
    blurb:
      "Discontinued. Here's the look if you want to try to find something similar. Leather high-tops — not Flux, not the low-tops Ted sells now.",
    note: "Photo saved from a Poshmark listing of the Mykka — do not link that listing. Amazon search is the 'something similar' path. Current tedbaker.com sneakers are low-tops. Do not substitute WESTWOOD or BRADLEY.",
    image: "/products/ted-baker-mykka.jpg",
    imageAlt: "Ted Baker Mykka black leather high-top sneakers",
    imageContain: true,
    href: "https://www.amazon.com/s?k=Ted+Baker+Mykka+leather+high+top",
    retailer: "Amazon",
  },
  {
    slug: "ted-baker-glyburt",
    name: "Glyburt high-tops",
    maker: "Ted Baker",
    category: "clothes",
    blurb:
      "Discontinued. Same idea — here's the look if you want to try to find something similar. Black leather and suede high-tops.",
    note: "Photo saved from a Poshmark listing of the Glyburt — do not link that listing. Amazon search for similar. Companion look to the Mykka card.",
    image: "/products/ted-baker-glyburt.jpg",
    imageAlt: "Ted Baker Glyburt black leather and suede high-top sneakers",
    imageContain: true,
    href: "https://www.amazon.com/s?k=Ted+Baker+Glyburt+leather+high+top",
    retailer: "Amazon",
  },
  {
    slug: "black-market-kimonos",
    name: "Travel gi",
    maker: "Black Market Kimonos",
    category: "clothes",
    blurb:
      "The kimono that fits in a bag. Lightweight, packs small, dries fast — what I bring when I train BJJ on the road.",
    note: "No public affiliate program. Email BlackMarketKimonos@gmail.com and ask. Their /shop-now Wix gallery currently shows no products — card goes to the homepage until that store is back. Thumbnail is their Classic White / Modern Cut shot.",
    image: "/products/black-market-kimonos-gi.jpg",
    imageAlt: "Black Market Kimonos travel gi — white BJJ kimono, modern cut",
    imageContain: true,
    href: "https://www.blackmarketkimonos.com/",
    retailer: "Black Market Kimonos",
  },
  {
    slug: "bighorn-bjj-tape",
    name: "BJJ finger tape",
    maker: "Bighorn Athletics",
    category: "clothes",
    blurb:
      "The tape on my fingers when I train. Stays on through a roll. Black 8-pack.",
    note: "He uses the black 8-pack; thumbnail is their black/blue/red/white 8-roll shot so the tape reads at a glance. Cotton flagship — not the rayon Premium Competition unless that is the roll in the bag. Pin 0.3 vs 0.5. Associates on Amazon B0B7D3KVM2.",
    image:
      "https://cdn.shopify.com/s/files/1/0601/3468/6777/files/33_49eac589-e73e-43df-a413-cc1b095f534c.jpg?v=1724637790",
    imageAlt: "Bighorn Athletics BJJ finger tape — black, blue, red, and white rolls",
    imageContain: true,
    href: amazonDp("B0B7D3KVM2"),
    retailer: "Amazon",
  },
  {
    slug: "lululemon-zeroed-in-jogger",
    name: "Zeroed-In cargo jogger, black",
    maker: "lululemon",
    category: "clothes",
    blurb:
      "I'm not sure this is the exact pant, but it seems the closest from their website. Black. Zip pockets. The Lulu pair.",
    note: "Zeroed-In Classic-Fit Cargo Jogger *Regular, color 0001 (black), prod11870925. Not confirmed as the pair in the drawer — closest live match. Was previously linked to Surge Jogger and to color 30210 (Graphite Grey). Affiliate via Awin / lululemon Creator Network.",
    image: "/products/lululemon-zeroed-in-cargo-jogger.jpg",
    imageAlt: "lululemon Zeroed-In Classic-Fit Cargo Jogger in black",
    href: "https://shop.lululemon.com/p/men-joggers/Zeroed-In-Classic-Fit-Cargo-Jogger-Regular/_/prod11870925?color=0001",
    retailer: "lululemon",
  },
  {
    slug: "alo-coop-jogger",
    name: "Co-Op Pant, regular black",
    maker: "Alo",
    category: "clothes",
    blurb: "Black. Zip pockets. The Alo pair — Co-Op Pant, regular.",
    note: "Pinned: Co-Op Pant (Regular) in Black, M5144R, regular 27\". Official URL m5144r-co-op-pant-regular-black. Not Conquer, not Sports Club. Affiliate via FlexOffers / Mavely / Pepperjam. Alo page may show out of stock — keep the product URL anyway.",
    image: "/products/alo-co-op-pant-black.jpg",
    imageAlt: "Alo Co-Op Pant in regular black",
    href: "https://www.aloyoga.com/products/m5144r-co-op-pant-regular-black",
    retailer: "Alo",
  },
  {
    slug: "nomatic-minimalist-wallet",
    name: "Minimalist Wallet",
    maker: "Nomatic",
    category: "clothes",
    blurb: "The slim one. Cards, cash, a key. That is the whole pocket.",
    note: "Black with Leather Tab, Amazon B00TVBOL6S. Thumbnail is the listing gallery shot. Associates on the Amazon URL.",
    image: "/products/nomatic-minimalist-wallet.jpg",
    imageAlt: "Nomatic Minimalist Wallet in black with leather tab",
    imageContain: true,
    href: amazonDp("B00TVBOL6S"),
    retailer: "Amazon",
  },
  {
    slug: "cole-haan-lunargrand-boots",
    name: "Lunargrand boots, black",
    maker: "Cole Haan",
    category: "clothes",
    blurb:
      "Discontinued. Here's a picture if you'd like something similar. These are Cole Haan Lunargrand.",
    note: "Photo is the listing shot saved locally — do not link eBay. href is an Amazon search for similar, not Zerøgrand. Mixed leather/fabric Lunargrand, not a classic two-eyelet chukka.",
    image: "/products/cole-haan-lunargrand.jpg",
    imageAlt: "Black Cole Haan Lunargrand boots, leather and fabric with a ridged sneaker sole",
    imageContain: true,
    href: "https://www.amazon.com/s?k=Cole+Haan+Lunargrand+boot+black",
    retailer: "Amazon",
  },
  {
    slug: "rco-aircraft",
    name: "AIRCRAFT Pomade Mousse",
    maker: "R+Co",
    category: "grooming",
    blurb: "Texture without the grease. The can I actually use when my hair is a bit longer.",
    note: "Associates on Amazon B01695VXTQ.",
    image: "/products/rco-aircraft.jpg",
    imageAlt: "R+Co AIRCRAFT Pomade Mousse can",
    href: amazonDp("B01695VXTQ"),
    retailer: "Amazon",
    featured: true,
  },
  {
    slug: "oribe-rough-luxury",
    name: "Rough Luxury Soft Molding Paste",
    maker: "Oribe",
    category: "grooming",
    blurb: "The paste. Medium hold, a little shine, not a helmet.",
    note: "This is Oribe, not R+Co. Associates on Amazon B00BH3MWPK.",
    image: "/products/oribe-rough-luxury.jpg",
    imageAlt: "Oribe Rough Luxury Soft Molding Paste jar",
    href: amazonDp("B00BH3MWPK"),
    retailer: "Amazon",
  },
  {
    slug: "blumaan-clay",
    name: "Clay",
    maker: "BluMaan",
    category: "grooming",
    blurb: "The clay. Heavy hold is their current clay — tell me if your jar is the Matte Cream instead.",
    note: "Associates on Amazon B01L9CTJSQ. Confirm Heavy Hold vs Matte Cream Clay.",
    image: "/products/blumaan-heavy-hold-clay.jpg",
    imageAlt: "BluMaan Heavy Hold Clay jar",
    href: amazonDp("B01L9CTJSQ"),
    retailer: "Amazon",
  },
  {
    slug: "clinique-lotion",
    name: "Dramatically Different Moisturizing Lotion+",
    maker: "Clinique",
    category: "grooming",
    blurb: "The daily lotion, no SPF. Yellow bottle. If this is the For Men hydrator instead, say so.",
    note: "Associates on Amazon B00CVZ3NJ2. Confirm Dramatically Different vs Clinique For Men Daily Hydrator.",
    image: "/products/clinique-lotion.jpg",
    imageAlt: "Clinique Dramatically Different Moisturizing Lotion+ yellow pump bottle",
    href: amazonDp("B00CVZ3NJ2"),
    retailer: "Amazon",
  },
  {
    slug: "clinique-lotion-spf",
    name: "Dramatically Different Moisturizing Lotion+ SPF 35",
    maker: "Clinique",
    category: "grooming",
    blurb: "The same daily lotion, with sunscreen. Daytime bottle.",
    note: "Associates on Amazon B0F8K2DL7H. Pair with the non-SPF listing. Swap if you use Clinique For Men Daily Hydrator SPF.",
    image: "/products/clinique-lotion-spf.png",
    imageAlt: "Clinique Dramatically Different Moisturizing Lotion+ SPF 35 bottle",
    href: amazonDp("B0F8K2DL7H"),
    retailer: "Amazon",
  },
  {
    slug: "dr-squatch-deodorant",
    name: "Deodorant",
    maker: "Dr. Squatch",
    category: "grooming",
    blurb: "The deodorant. Natural stick, no aluminum. Scent is whatever is on the stick — I have not pinned it.",
    note: "Associates on Amazon B09FVXVYGL (variety 6-pack, matches the thumbnail). Scent still unpinned (Fresh Falls, Pine Tar, Bay Rum, Alpine Sage, etc.) — stick vs Invisible Glide vs spray.",
    image: "/products/dr-squatch-deodorant-variety.jpg",
    imageAlt: "Dr. Squatch deodorant variety pack",
    href: amazonDp("B09FVXVYGL"),
    retailer: "Amazon",
  },
  {
    slug: "gold-bjj-postroll",
    name: "PostRoll",
    maker: "Gold BJJ",
    category: "supplements",
    blurb:
      "The scoop after a roll — or after CrossFit. EAAs and BCAAs. Not magic.",
    note: "Gold BJJ PostRoll, Lemon Ice. Associates on Amazon B07YQ76ZF9. He already lists BCAAs separately — this is the post-workout drink, not a second BCAA bottle.",
    image: "/products/supp-postroll.jpg",
    imageAlt: "Gold BJJ PostRoll post-workout powder",
    href: amazonDp("B07YQ76ZF9"),
    retailer: "Amazon",
  },
  {
    slug: "lmnt",
    name: "Electrolytes",
    maker: "LMNT",
    category: "supplements",
    blurb: "Hydration. The electrolyte mix I actually use. Zero sugar.",
    note: "Amazon sample pack B09Q9WCDY7 until a flavor is pinned (Citrus, Orange, Raspberry, Watermelon, Raw Unflavored, etc.). Associates on the Amazon URL.",
    image: "/products/supp-lmnt.jpg",
    imageAlt: "LMNT zero-sugar electrolyte drink mix",
    href: amazonDp("B09Q9WCDY7"),
    retailer: "Amazon",
    featured: true,
  },
  supplement({
    slug: "bcaas",
    name: "BCAAs",
    asin: "B0013OXBVM",
    blurb: "Training. The scoop I use. Brand on the bottle is a stand-in until I pin what's in the cabinet.",
  }),
  supplement({
    slug: "coq10",
    name: "CoQ10",
    asin: "B001B4NEM0",
    blurb: "Part of the stack. Not a prescription, not a pitch.",
  }),
  supplement({
    slug: "bromelain",
    name: "Bromelain",
    asin: "B0001T0FZU",
    blurb:
      "I take this with DIM. On me, that pairing has been associated with clearer skin. That is my experience, not a medical claim, and it may do nothing for you.",
    note: "Keep this next to DIM. Do not present as an acne treatment. Thumbnail is a generic bottle until the cabinet brand is confirmed.",
  }),
  supplement({
    slug: "dim",
    name: "DIM",
    asin: "B07FCXFLXQ",
    blurb:
      "I take this with bromelain. Same note: personal experience, not a treatment, results vary.",
    note: "Diindolylmethane. Pair copy with bromelain. No acne-cure language anywhere else on the site. Thumbnail is a generic bottle until confirmed.",
  }),
  supplement({
    slug: "maca",
    name: "Maca",
    asin: "B001DAYJOY",
    blurb:
      "In my opinion this leads to feeling slightly more turned on — which gives a bit more motivation to make the effort to talk to girls. My results. No claim they'll be yours.",
    note: "Personal experience only. Do not upgrade this into a libido or dating claim. Thumbnail is a generic bottle until the cabinet brand is confirmed.",
  }),
  supplement({
    slug: "horny-goat-weed",
    name: "Horny Goat Weed",
    asin: "B001NGJMNG",
    blurb:
      "Same experience as maca, on me: slightly more turned on, a bit more motivation to actually go talk to girls. My results. No claim they'll be yours.",
    note: "Personal experience only — pair copy with maca. Stand-in bottle photo — generic, not the cabinet brand. Swap if his bottle is a different formula.",
  }),
  book({
    slug: "the-art-of-learning",
    name: "The Art of Learning",
    maker: "Joshua Waitzkin",
    blurb:
      "How a chess prodigy learned to learn. Performance without the guru fog.",
    isbn: "0743277465",
    featured: true,
  }),
  book({
    slug: "influence",
    name: "Influence",
    maker: "Robert Cialdini",
    blurb:
      "The levers people use on you. Once you see them, you stop getting played.",
    isbn: "0062937650",
    featured: true,
  }),
  book({
    slug: "the-power-of-now",
    name: "The Power of Now",
    maker: "Eckhart Tolle",
    blurb: "Presence as a skill, not a vibe. The one that actually slows you down.",
    isbn: "1577314808",
  }),
  book({
    slug: "the-myth-of-stress",
    name: "The Myth of Stress",
    maker: "Andrew Bernstein",
    blurb:
      "Stress is the thought, not the circumstance. ActivInsight. The one I tell men to read when they think the job is the problem.",
    isbn: "1439159459",
    image: amazonImage("1439159459"),
    note: "Free Press / Atria, 2010. ISBN-10 1439159459. Not a meditation book and not The Power of Now.",
  }),
  book({
    slug: "secrets-of-closing-the-sale",
    name: "Secrets of Closing the Sale",
    maker: "Zig Ziglar",
    blurb: "Old-school close. Still the mechanics underneath every yes.",
    isbn: "0425081020",
  }),
  book({
    slug: "making-people-talk",
    name: "Making People Talk",
    maker: "Barry Farber",
    blurb:
      "A talk-show host on getting people to open up. Useful anywhere a conversation matters.",
    isbn: "0688015913",
  }),
  book({
    slug: "ready-fire-aim",
    name: "Ready, Fire, Aim",
    maker: "Michael Masterson",
    blurb: "Start. Then aim. For people who stall by planning.",
    isbn: "0470182021",
  }),
  book({
    slug: "de-bonos-thinking-course",
    name: "De Bono's Thinking Course",
    maker: "Edward de Bono",
    blurb: "Tools for thinking on purpose instead of arguing in circles.",
    isbn: "0563484036",
  }),
  book({
    slug: "the-4-hour-workweek",
    name: "The 4-Hour Workweek",
    maker: "Tim Ferriss",
    blurb: "Escape velocity. Take the useful parts, ignore the lifestyle brand.",
    isbn: "0307465357",
  }),
  book({
    slug: "the-4-hour-body",
    name: "The 4-Hour Body",
    maker: "Tim Ferriss",
    blurb: "A lab notebook for the body. Steal the experiments that fit.",
    isbn: "030746363X",
  }),
  book({
    slug: "how-to-become-a-champion",
    name: "How to Become a Champion",
    maker: "Percy Cerutty",
    blurb:
      "A hard coach from another era. Training the body and the will together.",
    note: "Published as Athletics: How to Become a Champion.",
    isbn: "148264326X",
  }),
  book({
    slug: "rich-dad-poor-dad",
    name: "Rich Dad Poor Dad",
    maker: "Robert Kiyosaki",
    blurb: "Assets vs. liabilities, taught like a parable. The on-ramp.",
    isbn: "1612680194",
  }),
  book({
    slug: "profit-first",
    name: "Profit First",
    maker: "Mike Michalowicz",
    blurb:
      "Take profit first. What's left is what you get to spend. A cash system, not a pep talk.",
    isbn: "073521414X",
    note: "Portfolio edition, ISBN 073521414X. Associates on the Amazon URL.",
  }),
  book({
    slug: "the-warren-buffett-way",
    name: "The Warren Buffett Way",
    maker: "Robert Hagstrom",
    blurb: "How Buffett actually thinks about a business, not the folklore.",
    isbn: "1118503252",
  }),
  book({
    slug: "buffettology",
    name: "Buffettology",
    maker: "Mary Buffett & David Clark",
    blurb: "The method, written down so you can run the numbers.",
    isbn: "068484821X",
  }),
  book({
    slug: "one-up-on-wall-street",
    name: "One Up on Wall Street",
    maker: "Peter Lynch",
    blurb: "Buy what you understand. Still the amateur's edge.",
    isbn: "0743200403",
  }),
  book({
    slug: "the-gone-fishin-portfolio",
    name: "The Gone Fishin' Portfolio",
    maker: "Alexander Green",
    blurb: "A lazy, serious way to invest and then leave it alone.",
    isbn: "1119628506",
  }),
  book({
    slug: "moneyball",
    name: "Moneyball",
    maker: "Michael Lewis",
    blurb: "Stop paying for the story. Measure the thing that wins.",
    isbn: "0393324818",
  }),
  book({
    slug: "the-undoing-project",
    name: "The Undoing Project",
    maker: "Michael Lewis",
    blurb:
      "Kahneman and Tversky. Why your gut is systematically wrong — and why that friendship changed how we think.",
    isbn: "0393354776",
    note: "Norton paperback, ISBN 0393354776. Same Lewis as Moneyball. Associates on the Amazon URL.",
  }),
  book({
    slug: "the-ascent-of-money",
    name: "The Ascent of Money",
    maker: "Niall Ferguson",
    blurb: "How finance got here. Context before you take advice from anyone.",
    isbn: "0143116177",
  }),
  book({
    slug: "the-moral-animal",
    name: "The Moral Animal",
    maker: "Robert Wright",
    blurb:
      "Evolutionary psychology without the Twitter version. Why we do what we do.",
    isbn: "0679763996",
  }),
  book({
    slug: "nonzero",
    name: "Nonzero",
    maker: "Robert Wright",
    blurb: "Why cooperation scales. The long arc is not zero-sum.",
    isbn: "0679758941",
  }),
  book({
    slug: "if-anyone-builds-it-everyone-dies",
    name: "If Anyone Builds It, Everyone Dies",
    maker: "Eliezer Yudkowsky & Nate Soares",
    blurb:
      "The case that superintelligent AI is not a cool product cycle. Read it before you shrug.",
    isbn: "0316595643",
  }),
  book({
    slug: "the-fountainhead",
    name: "The Fountainhead",
    maker: "Ayn Rand",
    blurb: "A man who will not be redesigned by the room he is in.",
    isbn: "0452286379",
  }),
  book({
    slug: "atlas-shrugged",
    name: "Atlas Shrugged",
    maker: "Ayn Rand",
    blurb: "The long one. What happens when the people who make things stop.",
    isbn: "0452011871",
  }),
  book({
    slug: "stranger-in-a-strange-land",
    name: "Stranger in a Strange Land",
    maker: "Robert A. Heinlein",
    blurb:
      "A human raised by Martians comes to Earth. Belonging, sex, churches, and grokking. The one people still fight over.",
    isbn: "0441788386",
    note: "Ace uncut edition, ISBN 0441788386. Not the 1961 cut text. Associates on the Amazon URL.",
  }),
  book({
    slug: "catch-me-if-you-can",
    name: "Catch Me If You Can",
    maker: "Frank W. Abagnale",
    blurb:
      "The real con, not just the movie. Fake checks, fake uniforms, and getting away with it until he didn't.",
    isbn: "0767905385",
    note: "Broadway paperback, ISBN 0767905385. Frank Abagnale with Stan Redding. Associates on the Amazon URL.",
  }),
  book({
    slug: "the-hustler",
    name: "The Hustler",
    maker: "Walter Tevis",
    blurb:
      "Pool, pride, and getting cracked open. Fiction that teaches more than most manuals.",
    isbn: "0593467507",
    image: "/books/the-hustler-tevis.jpg",
    note: "Vintage paperback, 2022. ISBN 0593467507. Walter Tevis — Fast Eddie Felson. Not David Eddings. Local cover is the Vintage pool-hall edition (author of The Queen's Gambit). Associates on the Amazon URL.",
  }),
  book({
    slug: "logical-chess-move-by-move",
    name: "Logical Chess: Move by Move",
    maker: "Irving Chernev",
    blurb:
      "Every move explained. The book that teaches you why a piece went there — not just that it did.",
    isbn: "0713484640",
    image: amazonImage("0713484640"),
    note: "Batsford algebraic edition. Amazon ISBN-10 0713484640. Do not use the 2026 reprint ISBN until that is the copy on the shelf.",
  }),
  book({
    slug: "winning-chess",
    name: "Winning Chess",
    maker: "Irving Chernev & Fred Reinfeld",
    blurb:
      "Attacking play after you know the moves. The companion to Logical Chess — not Seirawan’s series unless that is the one on the shelf.",
    isbn: "1849941106",
    image: amazonImage("1849941106"),
    note: "Chernev & Reinfeld, Batsford algebraic (ISBN 9781849941105). If his copy is Yasser Seirawan’s Winning Chess series, swap.",
  }),
  book({
    slug: "silmans-complete-endgame-course",
    name: "Silman's Complete Endgame Course",
    maker: "Jeremy Silman",
    blurb:
      "Endgames by rating. Only what you need at the level you are at. Then the next chapter.",
    isbn: "1890085103",
    image: amazonImage("1890085103"),
    note: "Siles Press, From Beginner to Master. ISBN 1890085103. Chessable has a course version — the card is the book.",
  }),
  book({
    slug: "the-theory-of-poker",
    name: "The Theory of Poker",
    maker: "David Sklansky",
    blurb:
      "Expected value, in English. The math behind every bet with incomplete information.",
    isbn: "1880685000",
  }),
  book({
    slug: "small-stakes-hold-em",
    name: "Small Stakes Hold 'em",
    maker: "Ed Miller, David Sklansky & Mason Malmuth",
    blurb:
      "Limit hold 'em. This is what got me good. Less useful for no-limit — still the book.",
    isbn: "1880685329",
    image: amazonImage("1880685329"),
    note: "Two Plus Two. Limit, not NL. ISBN 1880685329.",
    banner: "NOT FOR NO-LIMIT!",
  }),
  book({
    slug: "hold-em-poker-for-advanced-players",
    name: "Hold 'em Poker for Advanced Players",
    maker: "David Sklansky & Mason Malmuth",
    blurb:
      "Limit hold 'em at a higher level. Same caveat: it is not a no-limit manual. It is how I learned to think.",
    isbn: "1880685221",
    image: amazonImage("1880685221"),
    note: "Two Plus Two, 21st century edition. ISBN 1880685221. Limit hold 'em.",
    banner: "NOT FOR NO-LIMIT!",
  }),
  book({
    slug: "winning-in-tough-hold-em-games",
    name: "Winning in Tough Hold 'em Games",
    maker: "Nick Grudzien & Geoff Herzog",
    blurb:
      "Short-handed, high-stakes limit. The third book in that sequence. Limited for NL. It still made me better.",
    isbn: "1880685388",
    image: amazonImage("1880685388"),
    note: "Two Plus Two. Grudzien (Stoxtrader) and Herzog (Zobags), not Ed Miller. Limit hold 'em. ISBN 1880685388.",
    banner: "NOT FOR NO-LIMIT!",
  }),
  book({
    slug: "the-99-critical-shots-in-pool",
    name: "The 99 Critical Shots in Pool",
    maker: "Ray Martin & Rosser Reeves",
    blurb:
      "The shots that actually come up. Diagrams, not folklore. Pool as a thinking game.",
    isbn: "0812922417",
    image: amazonImage("0812922417"),
    note: "Random House revised edition, 1993. ISBN 0812922417. Ray “Cool Cat” Martin with Rosser Reeves. Not Byrne’s Standard Book of Pool unless that is the copy on the shelf.",
  }),
  {
    slug: "rolex-air-king-116900",
    name: "Air-King",
    maker: "Rolex",
    category: "watches",
    blurb: "The 116900 — second-newest Air-King. 40mm, no crown guards. Box, no papers.",
    note: "Ref. 116900 (2016–2022), predecessor to the current 126900. Inquire only. No payment on this site.",
    image:
      "https://www.fratellowatches.com/wp-content/uploads/2016/10/Rolex-Air-King-116900-1944.jpg",
    imageAlt: "Rolex Air-King 116900 — 40mm, no crown guards, black dial",
    imageContain: true,
    featured: true,
    status: "inquire",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "116900" },
      { label: "Year", value: "2016–2022 production" },
      { label: "Size", value: "40mm" },
      { label: "Papers / box", value: "Box, no papers" },
    ],
  },
  {
    slug: "tudor-black-bay-burgundy",
    name: "Black Bay 41 Burgundy",
    maker: "Tudor",
    category: "watches",
    blurb: "Red bezel, 2024, on jubilee. The METAS Black Bay people actually mean.",
    note: "Ref. M7941A1A0RU-0003 — five-link jubilee. Box and papers.",
    image:
      "https://lunns.com/cdn/shop/files/0766020040.png?v=1709217461",
    imageAlt: "Tudor Black Bay 41 Burgundy on five-link bracelet, ref. M7941A1A0RU-0003",
    imageContain: true,
    featured: true,
    status: "inquire",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "M7941A1A0RU-0003" },
      { label: "Year", value: "2024" },
      { label: "Size", value: "41mm" },
      { label: "Bracelet", value: "Jubilee (5-link)" },
      { label: "Papers / box", value: "Box and papers" },
    ],
  },
  {
    slug: "cw-bel-canto-classic-blue",
    name: "C1 Bel Canto Classic",
    maker: "Christopher Ward",
    category: "watches",
    blurb: "Blue (Azzurro). The chiming one. Both Christopher Ward bracelet styles included.",
    note: "Blue Classic, not the original Bel Canto. Extra bracelet/strap set goes with the watch.",
    image:
      "https://www.christopherward.com/dw/image/v2/BDWD_PRD/on/demandware.static/-/Sites-cw-master-catalog/default/dwf163166f/images/WATCHES/C01-41APT3-T00B0-B0/C01-41APT3-T00B0-B0_Picture_1.jpg?sw=1200",
    imageAlt: "Christopher Ward C1 Bel Canto Classic Azzurro on Bader bracelet",
    imageContain: true,
    status: "inquire",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "C1 Bel Canto Classic, Azzurro" },
      { label: "Size", value: "41mm" },
      { label: "Extras", value: "Both CW bracelet styles" },
      { label: "Papers / box", value: "Box and papers" },
    ],
  },
  {
    slug: "mad1-green-lucky-clover",
    name: "M.A.D.1 Green Lucky Clover",
    maker: "M.A.D.Editions",
    category: "watches",
    blurb: "The green one with the clover crown. Time on the side of the case.",
    note: "MB&F / M.A.D.Editions raffle piece. 42mm. Box and papers.",
    image:
      "https://monochrome-watches.com/wp-content/uploads/2023/09/M.A.D.EDITIONS-2023-M.A.D.1-Green-Edition-hands-on-1.jpg",
    imageAlt: "M.A.D.1 Green Lucky Clover — mint green case, time on the side",
    imageContain: true,
    status: "inquire",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "M.A.D.1 Green Lucky Clover" },
      { label: "Year", value: "2023" },
      { label: "Size", value: "42mm" },
      { label: "Papers / box", value: "Box and papers" },
    ],
  },
  {
    slug: "mad2-rb",
    name: "M.A.D.2 R&B",
    maker: "M.A.D.Editions",
    category: "watches",
    blurb: "Red and black. Jumping hours, vinyl-record energy.",
    note: "Eric Giroud / M.A.D.2 Red & Black. Box and papers.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-uO5pYwN5h440Ny_1uEQt1yccEBg6ne6O3HqoMHwtwa2GPk-KmrBpcG9NH8yp6jd6KSIrafCMnA61CPEqdnx1xf0Mkksxt25QoSXT-Pp0gBrsyEz4-oIrmCSYuJa4DnXH1AXUTyiH7ajw2ulGC0nTf55uA7OKeVOJRO4YFQ3rwiFjEKT3XEgajLu4xjQ/s1600/MAD%20Editions_MAD2_R%26B_001.jpg",
    imageAlt: "M.A.D.2 R&B — black dial plate, red hour and minute discs",
    imageContain: true,
    status: "inquire",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "M.A.D.2 R&B" },
      { label: "Year", value: "2026" },
      { label: "Size", value: "42mm" },
      { label: "Papers / box", value: "Box and papers" },
    ],
  },
  {
    slug: "breitling-endurance-pro-38",
    name: "Endurance Pro 38",
    maker: "Breitling",
    category: "watches",
    blurb: "Newest year, smaller size. Black face, white rubber. The light one.",
    note: "Ref. X83310A71B1S1 — Endurance Pro 38, black dial, white strap. Confirm exact warranty year from the papers.",
    image:
      "https://www-breitling.eu.saleor.cloud/media/thumbnails/products/x83310a71b1s1-soldier_96ac485a_thumbnail_1024.webp",
    imageAlt: "Breitling Endurance Pro 38 black dial on white rubber, ref. X83310A71B1S1",
    imageContain: true,
    status: "inquire",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "X83310A71B1S1" },
      { label: "Year", value: "Newest (2024+)" },
      { label: "Size", value: "38mm" },
      { label: "Strap", value: "White rubber, black dial" },
      { label: "Papers / box", value: "Box and papers" },
    ],
  },
  {
    slug: "egard-quantus-aztec",
    name: "Quantus Aztec",
    maker: "Égard",
    category: "watches",
    blurb: "Limited edition. Aztec / Tonatiuh caseback. Curved case.",
    note: "Quantus (not Qantas). Aztec limited edition of the Quantus V3 line. Box and papers.",
    image:
      "https://www.egardwatches.com/cdn/shop/products/Quantus_Upward.jpg?v=1580766734",
    imageAlt: "Égard Quantus — curved oblong case, dual balance wheels",
    imageContain: true,
    status: "available",
    askingPrice: "Price on inquiry",
    specs: [
      { label: "Reference", value: "Quantus Aztec limited edition" },
      { label: "Size", value: "43mm" },
      { label: "Papers / box", value: "Box and papers" },
    ],
  },
  {
    slug: "studio-todd",
    name: "Studio",
    maker: "Todd V",
    category: "resources",
    blurb:
      "My coaching app. Conversation, confidence, the skill. That is the work.",
    note: "First-party. Partnership URL is studio.com/todd — do not swap to a generic Studio homepage. Thumbnail is the official app hero from that page. This is his app, not a third-party affiliate.",
    image: "/products/studio-todd.jpg",
    imageAlt: "Todd V Studio app — talking to women in public",
    href: "https://studio.com/todd",
    retailer: "Studio",
    owned: true,
    featured: true,
  },
  {
    slug: "one-percent-dating",
    name: "1% Dating",
    maker: "Todd V",
    category: "resources",
    blurb:
      "The dating-app program. Photos, messages, dates on the calendar. Digital Black Belt lives here now. For men who can actually show up.",
    note: "First-party. Digital Black Belt merged into 1%. onepercent.dating — digitalblackbelt.com 301s here. Concierge vs self-serve lives on that site. Not a third-party affiliate.",
    image: "/products/one-percent-dating.jpg",
    imageAlt: "1% Dating app",
    imageContain: true,
    href: "https://onepercent.dating",
    retailer: "1%",
    owned: true,
  },
  {
    slug: "skyn-elite",
    name: "Elite condoms",
    maker: "SKYN",
    category: "resources",
    blurb: "The ones I actually use. Latex-free. Elite — not Original, not flavored.",
    note: "SKYN Elite (LifeStyles / SXWELL), 36-count Amazon B0735Q681B. Standard Elite, not Extra Lube or Elite Large unless that is the box. Associates on the Amazon URL. Brand page: skyn.com/product/elite/",
    image: amazonImage("B0735Q681B"),
    imageAlt: "SKYN Elite latex-free condoms",
    imageContain: true,
    href: "https://www.amazon.com/dp/B0735Q681B",
    retailer: "Amazon",
  },
  {
    slug: "classpass",
    name: "ClassPass",
    maker: "ClassPass",
    category: "resources",
    blurb:
      "Drop-in gyms and classes in whatever city I am in. The membership that travels.",
    note: "Apply at classpass.com/try/affiliate-program (Impact). Influencers can get a complimentary membership plus paid sign-ups. Swap this URL for the tracked link once approved.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Gym interior",
    href: "https://classpass.com",
    retailer: "ClassPass",
  },
  {
    slug: "freeletics",
    name: "Freeletics",
    maker: "Freeletics",
    category: "resources",
    blurb:
      "The workout when there is no gym. Bodyweight, hotel room, park — still trains.",
    note: "Affiliate via Awin, or apply at the Freeletics partner form. In-app referral is a fallback and is capped. Prefer the affiliate link over App Store so the sale tracks. Thumbnail is their official push-up graphic — bodyweight, not a weights gym.",
    image: "/products/freeletics-calisthenics.jpg",
    imageAlt: "Freeletics bodyweight push-up",
    imageContain: true,
    href: "https://www.freeletics.com/en/",
    retailer: "Freeletics",
  },
  {
    slug: "whoop",
    name: "WHOOP",
    maker: "WHOOP",
    category: "resources",
    blurb:
      "How I track BJJ. Strain, recovery, sleep. The band stays off the wrist on the mats — sleeve or boxers.",
    note: "Membership via join.whoop.com. Paste the Impact tracked URL into site.whoopReferralUrl. In-app refer-a-friend is not the commercial path. Pin 4.0 vs 5.0 / MG. Thumbnail is the 5.0 SuperKnit Obsidian packshot.",
    image:
      "https://cdn.shopify.com/s/files/1/1040/0152/files/Render_R_1300x1500_63_354f6635-bd0a-4ee4-b91e-7703f0de3cf9.png?v=1745331229",
    imageAlt: "WHOOP 5.0 SuperKnit band in Obsidian",
    imageContain: true,
    href: whoopHref(),
    retailer: "WHOOP",
  },
  {
    slug: "whoop-arm-sleeve",
    name: "Arm sleeve",
    maker: "WHOOP",
    category: "resources",
    blurb:
      "The sleeve for a roll. Wrist hardware does not belong on the mats. Sensor in the pod, data still counts.",
    note: "Linked to the current 5.0/MG Arm Sleeve. If his is 4.0 Any-Wear Arm Sleeve, swap to shop.whoop.com/en-us/products/any-wear-arm-sleeve/. Not the CoreKnit bicep band unless that is the one he named.",
    image:
      "https://cdn.shopify.com/s/files/1/1040/0152/files/800x800_WHOOP_5-Ecomm-On_Figure-Armsleeve-1_1.png?v=1746025120",
    imageAlt: "WHOOP 5.0/MG arm sleeve on the upper arm",
    imageContain: true,
    href: "https://shop.whoop.com/en-us/products/5-arm-sleeve/",
    retailer: "WHOOP",
  },
  {
    slug: "whoop-boxers",
    name: "Sensor boxers",
    maker: "WHOOP",
    category: "resources",
    blurb:
      "The other way to track a roll. Sensor in the underwear so nothing is on the wrist or the arm.",
    note: "Linked to 5.0/MG Essential Boxer (sensor / Any-Wear pod). If his is 4.0 Any-Wear Athletic Boxer, swap. Pin 5-inch vs 7-inch inseam.",
    image:
      "https://cdn.shopify.com/s/files/1/1040/0152/files/800x800_WHOOP_5-Ecomm-Pin-Up-Essential-Boxer-5-Black-1_65b5b179-9470-47b9-9198-89d7f925ae70.png?v=1744831864",
    imageAlt: "WHOOP Essential Boxer with Any-Wear sensor pod",
    imageContain: true,
    href: "https://shop.whoop.com/en-us/products/essential-boxer/",
    retailer: "WHOOP",
  },
  {
    slug: "chessable",
    name: "Chessable",
    maker: "Chessable",
    category: "resources",
    blurb:
      "Where I actually study chess. MoveTrainer. The books are the foundation. This is the reps.",
    note: "Apply at chessable.com/affiliate — 15% on PRO upgrades and renewals, not course purchases. Paste the tracked URL into site.chessableReferralUrl. Account must be 30+ days old. Paid ads are banned.",
    image: "/products/chessable.jpg",
    imageAlt: "Chessable wordmark",
    imageContain: true,
    href: chessableHref(),
    retailer: "Chessable",
  },
  {
    slug: "pokersnowie",
    name: "PokerSnowie",
    maker: "PokerSnowie",
    category: "resources",
    blurb:
      "The AI coach for no-limit. The limit books got me good. This is the NL tool.",
    note: "They run an affiliate program via iDevAffiliate (program 32296 / pokersnowie.idevaffiliate.com). English site no longer has a public apply page after the subscription redesign — paste the tracked URL into site.pokerSnowieReferralUrl. Until then the card goes to pokersnowie.com. NL, not a substitute for the limit books.",
    image: "/products/pokersnowie.jpg",
    imageAlt: "PokerSnowie wordmark",
    imageContain: true,
    href: pokerSnowieHref(),
    retailer: "PokerSnowie",
  },
  {
    slug: "fpro",
    name: "FPRO",
    maker: "FPRO",
    category: "resources",
    blurb:
      "Soccer training at home. Ball mastery on a mat. The app.",
    note: "Affiliate at fpro.com/pages/affiliate — 10% via a personal promo code (10% off for the buyer). Also listed on FlexOffers. Paste the tracked URL or code landing page into site.fproReferralUrl. Built for kids/youth ball mastery, not a tactics app for 11-a-side.",
    image:
      "https://fpro.com/cdn/shop/files/Screenshot_2025-10-28_at_14.22.39.png?v=1762936375&width=1200",
    imageAlt: "FPRO soccer training app",
    imageContain: true,
    href: fproHref(),
    retailer: "FPRO",
  },
  {
    slug: "plugbug-travel",
    name: "PlugBug Travel",
    maker: "Twelve South",
    category: "resources",
    blurb:
      "The best universal travel power adapter I have used. One brick, the world's plugs, USB-C enough to run a laptop. If I lose it, Find My.",
    note: "PlugBug Travel 120W (TS-2442) on Twelve South — world plugs + case. Amazon only sells the US-only 50W/120W wall chargers (B0DCLTRZCP / B0DCLKQPXX); do not pin those. Swap to Travel 50W (TS-2441, variant 43998693720121) if that is the unit.",
    image:
      "https://cdn.shopify.com/s/files/1/0094/1621/2537/files/12s_PlugBug_Travel_120_Child.jpg?v=1730809958",
    imageAlt: "Twelve South PlugBug Travel 120W with world plug adapters",
    imageContain: true,
    href: "https://www.twelvesouth.com/products/plugbug-multiport-usbc-charger-with-find-my?variant=43998699913273",
    retailer: "Twelve South",
  },
  {
    slug: "tascam-dr10l",
    name: "DR-10L",
    maker: "TASCAM",
    category: "resources",
    blurb:
      "The best inexpensive voice recorder I have used. Clip-on lav, records to a card. The one I actually carry.",
    note: "DR-10L, not the DR-10L Pro. Tascam has discontinued the original in the Americas; Amazon listing B01LZ7UN44 is still the product he named. Do not swap to Pro unless that is the unit in the bag. Associates on the Amazon URL.",
    image: amazonImage("B01LZ7UN44"),
    imageAlt: "TASCAM DR-10L compact recorder with lavalier microphone",
    imageContain: true,
    href: "https://www.amazon.com/dp/B01LZ7UN44",
    retailer: "Amazon",
  },
  {
    slug: "story-time-chess",
    name: "Story Time Chess",
    maker: "Story Time Chess",
    category: "dads",
    blurb:
      "Chess for kids who are too young for Chessable. Stories, then pieces. Ages 3+.",
    note: "Associates on Amazon B07T29461V. The game and the live lessons are both theirs — this card is the box.",
    image: amazonImage("B07T29461V"),
    imageAlt: "Story Time Chess: The Game box",
    imageContain: true,
    href: amazonDp("B07T29461V"),
    retailer: "Amazon",
  },
  {
    slug: "numberblocks",
    name: "Numberblocks",
    maker: "Alphablocks / CBeebies",
    category: "dads",
    blurb:
      "Math as cartoons. Put it on. They count. One through Ten, then it gets clever.",
    note: "The show — not a random toy pack. Hub is learningblocks.tv/numberblocks/home. In the US it is often on Netflix or YouTube. Do not swap in a Learning Resources figure set unless that is the thing he actually bought.",
    image: "https://ichef.bbci.co.uk/images/ic/1200x675/p07cxw5h.jpg",
    imageAlt: "Numberblocks — CBeebies / Learningblocks",
    imageContain: true,
    href: "https://www.learningblocks.tv/numberblocks/home",
    retailer: "Learningblocks",
  },
  {
    slug: "synthesis-tutor",
    name: "Synthesis Tutor",
    maker: "Synthesis",
    category: "dads",
    blurb:
      "The AI math tutor. Ages 5–11. Patient in a way you are not at 7pm.",
    note: "synthesis.com/tutor. Born out of the SpaceX school. No public affiliate page found — personal referral codes stay off this site. Link the product, not the App Store, until a commercial path exists.",
    image:
      "https://cdn.prod.website-files.com/61254e5d00ea9e494d66b322/696fdb8d95a8ba81114576db_opengraph%20%E2%80%94%20tutor%20(2).png",
    imageAlt: "Synthesis Tutor — AI math tutor for kids",
    imageContain: true,
    href: "https://www.synthesis.com/tutor",
    retailer: "Synthesis",
  },
  {
    slug: "fpro-dads",
    name: "FPRO",
    maker: "FPRO",
    category: "dads",
    blurb:
      "Soccer at home. Ball mastery on a mat. The same app as Resources — it belongs on this list too.",
    note: "Same affiliate as Resources: fpro.com/pages/affiliate — 10% via a personal promo code. Also FlexOffers. Paste the tracked URL into site.fproReferralUrl. Youth ball mastery, not 11-a-side tactics. Duplicate card on purpose.",
    image:
      "https://fpro.com/cdn/shop/files/Screenshot_2025-10-28_at_14.22.39.png?v=1762936375&width=1200",
    imageAlt: "FPRO soccer training app",
    imageContain: true,
    href: fproHref(),
    retailer: "FPRO",
  },
  book({
    slug: "fit-baby-smart-baby-your-baby",
    name: "Fit Baby, Smart Baby, Your Baby",
    maker: "Glenn Doman, Douglas Doman & Bruce Hagy",
    category: "dads",
    blurb:
      "The Gentle Revolution physical book. Crawling, mobility, the body first. Work with your kid. Skip the cult energy.",
    isbn: "0757003761",
    image: "/books/fit-baby-smart-baby-your-baby.jpg",
    note: "Square One, Gentle Revolution series. ISBN 0757003761. Replaces How to Teach Your Baby to Be Physically Superb. Not How to Multiply Your Baby's Intelligence and not How to Teach Your Baby to Read. Associates on the Amazon URL. Not a medical program and not a guarantee.",
  }),
  book({
    slug: "rich-dad-poor-dad-dads",
    name: "Rich Dad Poor Dad",
    maker: "Robert Kiyosaki",
    category: "dads",
    blurb:
      "Assets vs. liabilities, taught like a parable. Give it to them before they think a job is the whole game. Same book as the shelf.",
    isbn: "1612680194",
    image: "/books/rich-dad-poor-dad.jpg",
    note: "Same edition as Books (ISBN 1612680194). Duplicate card on purpose — For Dads. Associates on the Amazon URL. Local cover is the Books photo.",
  }),
  {
    slug: "chess-set",
    name: "Chess",
    maker: "Staunton",
    category: "games",
    blurb:
      "The game. Sit down and play. Chessable is the reps. This is the board.",
    note: "Club Tourney carry-all: green vinyl roll-up (2.25\" squares), 3.75\" Staunton, canvas tournament bag with clock/scorebook pockets. Amazon B07KNMJPB2. Not Story Time Chess, not a wooden folding set. Associates on the Amazon URL.",
    image: "/products/chess-tournament-rollup.jpg",
    imageAlt: "Tournament roll-up chess board with Staunton pieces and a canvas carry-all bag",
    imageContain: true,
    href: amazonDp("B07KNMJPB2"),
    retailer: "Amazon",
  },
  {
    slug: "catan",
    name: "Catan",
    maker: "Klaus Teuber / CATAN Studio",
    category: "games",
    blurb:
      "Trade, build, block the brick. The one that taught a generation that a board game can have no dice-for-movement.",
    note: "Base game, 5th edition (CN3071, Amazon B00U26V4VQ) — the box most people actually own. 6th edition (CN3081, B0DYK1ZH2D) is the 2025 refresh. Swap if that is the one on the table. Not Seafarers or Cities & Knights unless he named the expansion.",
    image: amazonImage("B00U26V4VQ"),
    imageAlt: "CATAN board game",
    imageContain: true,
    href: "https://www.amazon.com/dp/B00U26V4VQ",
    retailer: "Amazon",
  },
  {
    slug: "monopoly",
    name: "Monopoly",
    maker: "Hasbro",
    category: "games",
    blurb:
      "The original rat race. Buy the property. Charge rent. Then play CASHFLOW and see the difference.",
    note: "Monopoly Classic, Hasbro C1009, Amazon B01MU9K3XU. Not a city edition, not Cheaters, not a branded skin. Pin if his box is the older metal-token Classic.",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6371/6371039_sd.jpg",
    imageAlt: "Monopoly Classic board game, Hasbro C1009",
    imageContain: true,
    href: "https://www.amazon.com/dp/B01MU9K3XU",
    retailer: "Amazon",
  },
  {
    slug: "cashflow",
    name: "CASHFLOW",
    maker: "Robert & Kim Kiyosaki",
    category: "games",
    blurb:
      "Rich Dad as a board game. Escape the rat race by buying assets. Monopoly is the trap. This is the lesson.",
    note: "Official current box is store.richdad.com/products/cashflow-board-game. Amazon B01L4GX9YW is the 2015 CASHFLOW (updated CASHFLOW 101). Card uses Amazon so Associates tags. Skip third-party '101' knockoffs. Original 101 if that is the box in the closet.",
    image:
      "https://store.richdad.com/cdn/shop/files/game_board_box_2025.png?v=1769185348&width=1200",
    imageAlt: "CASHFLOW board game by Rich Dad",
    imageContain: true,
    href: "https://www.amazon.com/dp/B01L4GX9YW",
    retailer: "Amazon",
  },
  alsoOnGames({
    slug: "logical-chess-move-by-move",
    name: "Logical Chess: Move by Move",
    maker: "Irving Chernev",
    blurb:
      "Every move explained. The book that teaches you why a piece went there — not just that it did.",
    isbn: "0713484640",
    image: amazonImage("0713484640"),
    note: "Batsford algebraic edition. Amazon ISBN-10 0713484640. Do not use the 2026 reprint ISBN until that is the copy on the shelf.",
  }),
  alsoOnGames({
    slug: "winning-chess",
    name: "Winning Chess",
    maker: "Irving Chernev & Fred Reinfeld",
    blurb:
      "Attacking play after you know the moves. The companion to Logical Chess — not Seirawan’s series unless that is the one on the shelf.",
    isbn: "1849941106",
    image: amazonImage("1849941106"),
    note: "Chernev & Reinfeld, Batsford algebraic (ISBN 9781849941105). If his copy is Yasser Seirawan’s Winning Chess series, swap.",
  }),
  alsoOnGames({
    slug: "silmans-complete-endgame-course",
    name: "Silman's Complete Endgame Course",
    maker: "Jeremy Silman",
    blurb:
      "Endgames by rating. Only what you need at the level you are at. Then the next chapter.",
    isbn: "1890085103",
    image: amazonImage("1890085103"),
    note: "Siles Press, From Beginner to Master. ISBN 1890085103. Chessable has a course version — the card is the book.",
  }),
  alsoOnGames({
    slug: "the-theory-of-poker",
    name: "The Theory of Poker",
    maker: "David Sklansky",
    blurb:
      "Expected value, in English. The math behind every bet with incomplete information.",
    isbn: "1880685000",
  }),
  alsoOnGames({
    slug: "small-stakes-hold-em",
    name: "Small Stakes Hold 'em",
    maker: "Ed Miller, David Sklansky & Mason Malmuth",
    blurb:
      "Limit hold 'em. This is what got me good. Less useful for no-limit — still the book.",
    isbn: "1880685329",
    image: amazonImage("1880685329"),
    note: "Two Plus Two. Limit, not NL. ISBN 1880685329.",
    banner: "NOT FOR NO-LIMIT!",
  }),
  alsoOnGames({
    slug: "hold-em-poker-for-advanced-players",
    name: "Hold 'em Poker for Advanced Players",
    maker: "David Sklansky & Mason Malmuth",
    blurb:
      "Limit hold 'em at a higher level. Same caveat: it is not a no-limit manual. It is how I learned to think.",
    isbn: "1880685221",
    image: amazonImage("1880685221"),
    note: "Two Plus Two, 21st century edition. ISBN 1880685221. Limit hold 'em.",
    banner: "NOT FOR NO-LIMIT!",
  }),
  alsoOnGames({
    slug: "winning-in-tough-hold-em-games",
    name: "Winning in Tough Hold 'em Games",
    maker: "Nick Grudzien & Geoff Herzog",
    blurb:
      "Short-handed, high-stakes limit. The third book in that sequence. Limited for NL. It still made me better.",
    isbn: "1880685388",
    image: amazonImage("1880685388"),
    note: "Two Plus Two. Grudzien (Stoxtrader) and Herzog (Zobags), not Ed Miller. Limit hold 'em. ISBN 1880685388.",
    banner: "NOT FOR NO-LIMIT!",
  }),
  alsoOnGames({
    slug: "the-99-critical-shots-in-pool",
    name: "The 99 Critical Shots in Pool",
    maker: "Ray Martin & Rosser Reeves",
    blurb:
      "The shots that actually come up. Diagrams, not folklore. Pool as a thinking game.",
    isbn: "0812922417",
    image: amazonImage("0812922417"),
    note: "Random House revised edition, 1993. ISBN 0812922417. Ray “Cool Cat” Martin with Rosser Reeves. Not Byrne’s Standard Book of Pool unless that is the copy on the shelf.",
  }),
];

export function itemsByCategory(category: Category) {
  return catalog.filter((item) => item.category === category);
}

export function featuredItems() {
  return catalog.filter((item) => item.featured);
}

export function getItem(slug: string) {
  return catalog.find((item) => item.slug === slug);
}

export function watches() {
  return itemsByCategory("watches");
}
