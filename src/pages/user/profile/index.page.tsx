import type { CustomNextPage } from "next";
import { ChangeEvent, useState } from "react";
import { useUser } from "@/hooks/useUser";
import { SubLayout } from "@/pages/_Layout/SubLayout";

const Profile: CustomNextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const { user, updateFullName, updateAvatar } = useUser();

  const handleSetUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleUpdateProfile = async () => {
    setIsLoading(true);
    const updateUserData = {
      id: user.id,
      full_name: fullName,
      updated_at: new Date(),
    };
    updateFullName(updateUserData);
    setIsLoading(false);
  };

  const handleUpdateAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    updateAvatar(e);
    setIsLoading(false);
  };

  return (
    <div>
      <p>{user?.email}</p>
      <div>
        <label htmlFor="username">Name</label>
        <input id="username" type="text" value={fullName || ""} onChange={handleSetUsername} />
      </div>

      <input type="file" id="single" accept="image/*" onChange={handleUpdateAvatar} disabled={isLoading} />

      <button className="p-3 mt-10 bg-white rounded-md" onClick={handleUpdateProfile} disabled={isLoading}>
        {isLoading ? "Loading ..." : "Update"}
      </button>
    </div>
  );
};

Profile.getLayout = SubLayout;

export default Profile;
