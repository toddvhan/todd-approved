import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Brain Games",
};

export default function BrainGamesPage() {
  return <CatalogGrid category="games" />;
}
