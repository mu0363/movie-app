import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useUser } from "hooks/useUser";
import { MainLayout } from "pages/_Layout";

const SignIn: CustomNextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, signIn, signOut } = useUser();

  const handleSignIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    signIn();
  };

  useEffect(() => {
    if (user) {
      router.replace("/user/profile");
    }
  }, [user, router]);

  return (
    <div className="text-center selection:text-yellow-500 selection:bg-yellow-300">
      <div className="p-10 my-10 bg-white rounded-md">
        <h1 className="text-2xl font-bold underline decoration-yellow-500">Supabase + Next.js</h1>
        <p className="font-bold">Sign in via Google authentication</p>
      </div>
      <button
        className="py-4 px-6 mx-auto mr-5 mb-10 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition hover:scale-105"
        onClick={handleSignIn}
        disabled={isLoading}
      >
        <span>{isLoading ? "Loading" : "Sign in with Google"}</span>
      </button>
    </div>
  );
};

SignIn.getLayout = MainLayout;

export default SignIn;
