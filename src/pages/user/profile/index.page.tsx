import type { CustomNextPage } from "next";
import { ChangeEvent, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { SubLayout } from "@/pages/_Layout/SubLayout";
import { supabase } from "@/utils/supabaseClient";

const Profile: CustomNextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { user, signOut } = useUser();

  const handleSetUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleUpdateProfile = async () => {
    try {
      setIsLoading(true);
      const updates = {
        id: user.id,
        full_name: fullName,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("users").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error);

      // alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p>{user?.email}</p>
      <div>
        <label htmlFor="username">Name</label>
        <input id="username" type="text" value={fullName || ""} onChange={handleSetUsername} />
      </div>

      <button className="p-3 mt-10 bg-white rounded-md" onClick={handleUpdateProfile} disabled={isLoading}>
        {isLoading ? "Loading ..." : "Update"}
      </button>
    </div>
  );
};

Profile.getLayout = SubLayout;

export default Profile;
