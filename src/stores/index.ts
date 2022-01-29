import { User } from "@supabase/supabase-js";
import { atom } from "recoil";
import { supabase } from "@/utils/supabaseClient";

export const userState = atom<User | null>({
  key: "atom_user",
  default: supabase.auth.user(), // ここの初期値をnullから変更
});
