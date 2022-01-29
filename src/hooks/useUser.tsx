import { Session, Provider, User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

type DatabaseUser = {
  avatar_url: string;
  created_at: string;
  email: string;
  full_name: string;
  id: string;
  updated_at: string;
};

type UserContextType = {
  session: Session;
  user: DatabaseUser;
  signIn: () => Promise<{
    session: Session | null;
    user: User | null;
    provider?: Provider;
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
  const [user, setUser] = useState<DatabaseUser | User | null>(null);

  useEffect(() => {
    const getDatabaseUser = async () => {
      const session = await supabase.auth.session();
      setSession(session);
      if (session?.user?.id) {
        const { data: databaseUser } = await supabase.from("users").select("*").eq("id", session.user.id).single();
        setUser(databaseUser);
      }
    };

    getDatabaseUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      if (session?.user?.id) {
        const { data: databaseUser } = await supabase.from("users").select("*").eq("id", session?.user.id).single();
        setUser(databaseUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [session]);

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
