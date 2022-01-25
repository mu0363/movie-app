import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { MouseEvent } from "react";
import { useUser } from "hooks/useUser";

export const Header: VFC = () => {
  const { user, signOut } = useUser();

  const handleSignOut = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut();
  };

  return (
    <>
      <header className="py-4 px-6 font-bold text-blue-500 bg-white shadow-md shadow-blue-500/10">
        <div className="flex justify-between items-center">
          <ul className="flex gap-3 items-center">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/user/profile">
                <a>Profile</a>
              </Link>
            </li>
          </ul>
          {user && (
            <div className="flex gap-3 items-center">
              <button className="py-1 px-3 text-white bg-gray-300 rounded-full" onClick={handleSignOut}>
                Sign out
              </button>
              <p>{user.user_metadata.full_name}</p>
              <Image
                className="rounded-full"
                src={user.user_metadata.avatar_url}
                alt="avatar-image"
                width={30}
                height={30}
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
};
