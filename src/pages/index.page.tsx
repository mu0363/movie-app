import type { CustomNextPage } from "next";
import Link from "next/link";
import { SubLayout } from "./_Layout/SubLayout";
import "emoji-mart/css/emoji-mart.css";
import { supabase } from "@/utils/supabaseClient";

const Home: CustomNextPage = () => {
  const handleGetUser = async () => {
    const { data } = await supabase.from("users").select("*").eq("id", "424802d1-0d41-4307-bec2-ed8919e4b397").single();
  };
  return (
    <div>
      <p>Welcome public page</p>
      <Link href="/signin">
        <a>Sing In</a>
      </Link>
      <button onClick={handleGetUser}>GetUser</button>
    </div>
  );
};

Home.getLayout = SubLayout;

export default Home;
