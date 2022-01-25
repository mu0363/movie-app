import { Session, User, Provider } from "@supabase/supabase-js";
import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../utils/supabaseClient";

type UserContextType = {
  session: Session;
  user: User;
  signIn: () => Promise<{
    session: Session | null;
    user: User | null;
    provider: Provider;
    url?: string | null;
    error: Error | null;
    data: Session | null;
  }>;
  signOut: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UserContextProvider = (props: any) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
    signIn: () => supabase.auth.signIn({ provider: "google" }),
    signOut: () => supabase.auth.signOut(),
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
