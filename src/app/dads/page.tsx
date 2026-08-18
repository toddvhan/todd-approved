import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "For Dads",
};

export default function DadsPage() {
  return <CatalogGrid category="dads" />;
}
