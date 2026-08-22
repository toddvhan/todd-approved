import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Grooming",
};

export default function GroomingPage() {
  return <CatalogGrid category="grooming" />;
}
