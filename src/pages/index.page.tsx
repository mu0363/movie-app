import type { CustomNextPage } from "next";
import { MainLayout } from "./_Layout";

const Home: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-red-500">Main</h1>
    </div>
  );
};

Home.getLayout = MainLayout;

export default Home;
