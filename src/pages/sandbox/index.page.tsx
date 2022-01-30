import type { CustomNextPage } from "next";
import { MainLayout } from "@/pages/_Layout";

const Sandbox: CustomNextPage = () => {
  return (
    <div>
      <h1>Sandbox</h1>
    </div>
  );
};

Sandbox.getLayout = MainLayout;

export default Sandbox;
