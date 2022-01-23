import type { CustomNextPage } from "next";
import { MouseEvent, useState } from "react";
import { MainLayout } from "pages/_Layout";
import { supabase } from "utils/supabaseClient";

const SignIn: CustomNextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      const { user, session, error } = await supabase.auth.signIn({ provider: "google" });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithGoogle();
  };

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="p-10 my-10 bg-white rounded-md shadow-md shadow-gray-200">
        <h1 className="text-xl font-bold">Supabase + Next.js</h1>
        <p>Sign in via Google authentication</p>
      </div>
      <button
        className="py-2 px-6 mb-10 text-white bg-green-400 rounded-full"
        onClick={handleClick}
        disabled={isLoading}
      >
        <span>{isLoading ? "Loading" : "Sign in with Google"}</span>
      </button>
    </div>
  );
};

SignIn.getLayout = MainLayout;

export default SignIn;
