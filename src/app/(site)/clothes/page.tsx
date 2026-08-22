import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Clothes",
};

export default function ClothesPage() {
  return <CatalogGrid category="clothes" />;
}
