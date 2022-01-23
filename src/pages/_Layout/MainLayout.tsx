import type { VFC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const MainLayout: VFC = (page) => {
  return (
    <div>
      <Header />
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      <Footer />
    </div>
  );
};
