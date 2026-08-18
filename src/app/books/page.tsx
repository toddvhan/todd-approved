import type { Metadata } from "next";
import { CatalogGrid } from "@/components/CatalogGrid";

export const metadata: Metadata = {
  title: "Books",
};

export default function BooksPage() {
  return <CatalogGrid category="books" />;
}
