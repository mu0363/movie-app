import type { CustomNextPage } from "next";
import { MainLayout } from "./_Layout";

const Home: CustomNextPage = () => {
  return (
    <div>
      <h1>Main</h1>
    </div>
  );
};

Home.getLayout = MainLayout;

export default Home;
