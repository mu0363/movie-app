import type { CustomNextPage } from "next";
import Link from "next/link";
import { SubLayout } from "./_Layout/SubLayout";

const Home: CustomNextPage = () => {
  return (
    <div>
      <p>Welcome public page</p>
      <Link href="/signin">
        <a>Sing In</a>
      </Link>
    </div>
  );
};

Home.getLayout = SubLayout;

export default Home;
