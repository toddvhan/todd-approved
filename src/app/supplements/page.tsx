import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Supplements",
};

export default function SupplementsPage() {
  return <CatalogGrid category="supplements" />;
}
