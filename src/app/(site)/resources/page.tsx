import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return <CatalogGrid category="resources" />;
}
