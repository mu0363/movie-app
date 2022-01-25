import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "hooks/useUser";
import { MainLayout } from "pages/_Layout";

const Profile: CustomNextPage = () => {
  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.replace("/signin");
    }
  }, [user, router]);

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.email}</p>
    </div>
  );
};

Profile.getLayout = MainLayout;

export default Profile;
