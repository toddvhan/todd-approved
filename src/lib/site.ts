export const site = {
  name: "Todd V Approved",
  shortName: "Todd V",
  tagline: "What I actually wear, read, and stand behind.",
  description:
    "A curated list of clothes, books, watches, and resources Todd V uses and recommends — not branded merch.",
  // Canonical site is toddapproved.com (no V in the URL).
  // Vercel serves production on www.toddapproved.com and 308s the apex there.
  // toddvapproved.com 301s to www.toddapproved.com. Keep both on GoDaddy; do not transfer.
  domain: "toddapproved.com",
  canonicalHost: "www.toddapproved.com",
  redirectDomain: "toddvapproved.com",
  // Amazon Associates tracking ID (Associates Central).
  amazonTag: "toddvdating-20",
  // Used for watch inquiries only. This site does not take payment.
  contactEmail: "inquiries@toddapproved.com",
  instagram: "https://instagram.com/toddvalentineofficial",
  youtube: "https://www.youtube.com/RSDTodd",
  // Paste the Impact / creator Hims link here when you have it. Personal
  // refer-a-friend codes are often not allowed on public sites.
  himsReferralUrl: "",
  // Paste the LMNT creator landing page (drinklmnt.com/your-name) here.
  // Salty Status is a customer referral (free box), not a commission program.
  lmntReferralUrl: "",
  // Paste the WHOOP Impact / creator link here. In-app refer-a-friend is not
  // the commercial path for this site.
  whoopReferralUrl: "",
  // Paste the Chessable affiliate link here after approval (chessable.com/affiliate).
  chessableReferralUrl: "",
  // Paste the PokerSnowie iDevAffiliate tracked URL here.
  pokerSnowieReferralUrl: "",
  // Paste the FPRO tracked URL or promo-code landing page here.
  fproReferralUrl: "",
  // Paste the Story Time Chess affiliate link here (10% on new customers).
  storytimeChessReferralUrl: "",
};

export const nav = [
  { href: "/clothes", label: "Clothes" },
  { href: "/grooming", label: "Grooming" },
  { href: "/supplements", label: "Supplements" },
  { href: "/books", label: "Books" },
  { href: "/watches", label: "Watches" },
  { href: "/resources", label: "Resources" },
  { href: "/dads", label: "For Dads" },
  { href: "/brain-games", label: "Brain Games" },
] as const;

export function himsHref() {
  return site.himsReferralUrl || "https://www.hims.com/sexual-health";
}

export function lmntHref() {
  return (
    site.lmntReferralUrl ||
    "https://drinklmnt.com/products/lmnt-recharge-variety-pack"
  );
}

export function whoopHref() {
  return site.whoopReferralUrl || "https://join.whoop.com";
}

export function chessableHref() {
  return site.chessableReferralUrl || "https://www.chessable.com";
}

export function pokerSnowieHref() {
  return site.pokerSnowieReferralUrl || "https://www.pokersnowie.com";
}

export function fproHref() {
  return site.fproReferralUrl || "https://fpro.com";
}

export function storytimeChessHref() {
  return site.storytimeChessReferralUrl || "https://www.storytimechess.com";
}

export function withAffiliate(url: string) {
  if (!site.amazonTag) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("amazon.")) {
      parsed.searchParams.set("tag", site.amazonTag);
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

export function watchInquiryMailto(watchName: string) {
  const subject = `Watch inquiry: ${watchName}`;
  const body = `Hi Todd V,\n\nI'm interested in the ${watchName}.\n\n`;
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
