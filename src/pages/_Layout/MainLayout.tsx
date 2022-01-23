import type { VFC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const MainLayout: VFC = (page) => {
  return (
    <div className="relative h-screen text-gray-600 bg-gray-100">
      <Header />
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};
