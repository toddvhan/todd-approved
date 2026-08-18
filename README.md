# Todd V Approved

A curated catalog — clothes, books, watches, and resources — not branded merch.

Clothes, books, and resources click out to retailers (Amazon Associates once you add your tag). Watches are listed for inquiry only. **This site never takes payment**, so it cannot mix with your existing merchant accounts. If you sell a watch, do it on Chrono24, eBay, a dealer, or another channel you already trust.

## Run it locally

You need Node on your PATH. This machine has it at `~/.local/node/bin`.

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace the starter items

Every product lives in one file: `src/lib/catalog.ts`.

1. Swap names, photos, blurbs, and links for what you actually wear and recommend.
2. For Amazon links, use the product URL (`https://www.amazon.com/dp/ASIN`). The Associates tag is applied automatically.
3. Put your tag in `src/lib/site.ts` → `amazonTag`.
4. Set `contactEmail` in the same file (watch inquiries use it).
5. For a watch listed on Chrono24 or eBay, add `marketplaceUrl` and `marketplaceName`.
6. Paste the Hims Impact / creator URL into `src/lib/site.ts` → `himsReferralUrl`. Until then the card still goes to hims.com/sexual-health.
7. Studio (`studio.com/todd`) and 1% Dating (`onepercent.dating`) are first-party — his apps, not third-party affiliates. Digital Black Belt merged into 1%.

Watch statuses: `available`, `hold`, `sold`.

## Clothes affiliates

You do not have to invent a partnership. These brands already run programs. Apply, then we swap the catalog URLs for tracked links.

| Brand | Where to apply | Notes |
| --- | --- | --- |
| **True Classic** | [trueclassictees.com/pages/partners](https://www.trueclassictees.com/pages/partners) | Best fit. ~25% on new customers. Skip Amazon for this one. |
| **Narcissist reversed tee** | Zazzle Ambassador (~15% on other creators) | [zazzle.com/narcissistic_mirrored_narcissist_t_shirt-256576057091103301](https://www.zazzle.com/narcissistic_mirrored_narcissist_t_shirt-256576057091103301). POD joke, not a designer drop. Swap in the tracked Ambassador link after you enroll. |
| **rag & bone** | Amazon Associates (also Impact / FlexOffers) | Classic Slub Henley, Jet Black (`M000T676G`). Amazon `B07BSV45YP`. He bought it on sale — card copy says you can likely get something similar for less. |
| **FRAME** | Amazon Associates (also Rakuten Advertising) | Duo Fold Long Sleeve Crew in Noir (`LMTS0242`). Amazon `B08RP92XJ1`. Same sale/budget line as rag & bone. |
| **Flux Footwear** | Awin, or `affiliate@fluxfootwear.com` | Adapt Knit Trainer, Grey/White KT. His solid grey is mostly gone. ~8–15%. |
| **G-Star RAW** | Partnerize / FlexOffers | Men's jeans collection. Exact pair likely discontinued — no fake SKU. |
| **Calvin Klein** | Impact / Awin | Same — denim collection, not a specific cut. |
| **Ted Baker** | Amazon Associates (search) | Discontinued leather high-tops (Mykka / Glyburt). Photos on the cards; search for similar. Do not link the Poshmark listings. |
| **Black Market Kimonos** | Email `BlackMarketKimonos@gmail.com` | Travel BJJ gis. No public affiliate page — ask. |
| **Bighorn Athletics** | [Sponsorship application](https://www.bighornathletics.com/pages/bighorn-athletics-sponsorship-application) | BJJ finger tape. Flagship black 8-roll cotton. Amazon fallback: `B0B7D3KVM2`. Pin 0.3 vs 0.5. |
| **lululemon** | Awin, or their Creator Network | Zeroed-In Classic-Fit Cargo Jogger Regular, black (`prod11870925`, color 0001). Closest live match — not confirmed as the pair he owns. |
| **Alo** | FlexOffers / Mavely | Co-Op Pant Regular Black (`M5144R`). Product URL pinned. Not Conquer. |
| **Nomatic** | Awin, or [nomatic.com/pages/ambassador](https://www.nomatic.com/pages/ambassador) | Minimalist / slim wallet. ~20% on Awin. |
| **Cole Haan Lunargrand** | Amazon Associates (search) | Discontinued black Lunargrand chukkas. Photo on the card; search for similar. Do not link the eBay listing. Zerøgrand is not the same shoe. |
| **R+Co** | [randco.com/pages/affiliates](https://www.randco.com/pages/affiliates) | AIRCRAFT Pomade Mousse. Amazon fallback: `B01695VXTQ`. |
| **Oribe** | Impact | Rough Luxury Soft Molding Paste (not R+Co). Amazon fallback: `B00BH3MWPK`. |
| **BluMaan** | No public program found | Clay — confirm Heavy Hold vs Matte Cream. Amazon store works with Associates. |
| **Clinique** | Rakuten / Impact | Dramatically Different Lotion+ and the SPF 35 version. Confirm if For Men hydrator instead. |
| **Dr. Squatch** | Pepperjam / Ascend (~8%), FlexOffers | Deodorant. Collection until scent and stick vs Invisible Glide is pinned. Thumbnail is the deodorant variety pack, not a scent pin. |
| **Supplements** | Amazon Associates | Generic bottle photos (BCAAs, CoQ10, bromelain, DIM, maca, horny goat weed) until cabinet brands are pinned. LMNT and Gold BJJ PostRoll use their own product shots. |
| **Gold BJJ PostRoll** | Amazon Associates (`B07YQ76ZF9`) / Gold BJJ affiliate if they approve you | Post-workout drink after BJJ or CrossFit. Brand page is live; swap for a tracked link. |
| **LMNT** | Creator landing page (`lmntReferralUrl`) or Amazon Associates (`B09Q9WCDY7`) | Electrolytes / hydration. Variety pack until flavor is pinned. Salty Status is a free-box referral, not a commission. |
| **Hims** | Impact / FlexOffers | Sexual health. Paste the tracked URL into `himsReferralUrl`. Do not put a personal refer-a-friend code on this site. Hub: hims.com/sexual-health (not hair). |
| **SKYN Elite** | Amazon Associates (`B0735Q681B`) | Latex-free Elite condoms, 36-count. Not Original, Extra Lube, or Large unless that is the box. |
| **ClassPass** | [classpass.com/try/affiliate-program](https://classpass.com/try/affiliate-program) | Impact. Gyms/classes while traveling. |
| **Freeletics** | Awin, or their partner form | Bodyweight coach when there is no gym. Link the website, not the App Store. |
| **WHOOP** | Impact (`whoopReferralUrl`) | Membership for BJJ tracking. Sleeve + sensor boxers so the wrist strap is off the mats. Pin 4.0 vs 5.0. In-app refer-a-friend is not the commercial path. |
| **Chessable** | [chessable.com/affiliate](https://www.chessable.com/affiliate/) (`chessableReferralUrl`) | 15% on PRO upgrades and renewals. Chess books are on the Books page (Chernev, Silman). |
| **PokerSnowie** | iDevAffiliate (`pokersnowie.idevaffiliate.com` / program 32296) → `pokerSnowieReferralUrl` | NL AI trainer. Limit hold 'em books stay on Books. English site hid the apply page; program still listed. |
| **FPRO** | [fpro.com/pages/affiliate](https://fpro.com/pages/affiliate) (`fproReferralUrl`) / FlexOffers | Soccer training app + skills mat. 10% via personal promo code. Youth ball mastery, not a tactics app. |
| **Studio** | First-party (`studio.com/todd`) | His coaching app on Studio. Not a third-party affiliate. |
| **1% Dating** | First-party (`onepercent.dating`) | Digital Black Belt merged into 1%. `digitalblackbelt.com` 301s here. Not a third-party affiliate. |
| **Twelve South PlugBug** | [twelvesouth.com/pages/affiliates](https://www.twelvesouth.com/pages/affiliates) | PlugBug Travel 120W on Twelve South. Amazon only has the US-only wall charger. |
| **TASCAM DR-10L** | Amazon Associates (`B01LZ7UN44`) | Best inexpensive voice recorder. Original DR-10L, not Pro. Discontinued in the Americas; Amazon still lists it. |

Until those are approved, the Clothes page still links to the real products. Clicks work. Commission does not.

## Domain and hosting

Canonical site: **toddapproved.com**. Brand on the page is still **Todd V Approved** / Todd V. **toddvapproved.com** 301s to the canonical host. Keep both on GoDaddy. **Do not transfer.**

1. Deploy to [Vercel](https://vercel.com) (import this folder, or `npx vercel`).
2. In the Vercel project, add `toddapproved.com`, `www.toddapproved.com`, `toddvapproved.com`, and `www.toddvapproved.com`.
3. In GoDaddy DNS for **each** domain, point at Vercel (do not use GoDaddy “forwarding” — it is an ugly parking hop):
   - Apex: `A` record to `10.0.1.2` (confirm current IP in the Vercel domain panel)
   - `www`: `CNAME` to `cname.vercel-dns.com`
4. Next.js redirects `toddvapproved.com` (and both www hosts) to `https://toddapproved.com`.
5. In Amazon Associates, add `toddapproved.com` as a storefront so `toddvdating-20` credits. Add `toddvapproved.com` too if Associates lets you list the redirect host.

## What this is not

- Not Shopify
- Not Stripe
- Not a cart
- Not a place to mix coaching/course payments with watch sales
