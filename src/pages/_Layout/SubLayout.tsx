import type { VFC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const SubLayout: VFC = (page) => {
  return (
    <div className="relative h-screen text-gray-600 bg-red-300">
      <Header />
      <main className="mx-auto max-w-4xl">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
