import Link from "next/link";
import type { VFC } from "react";

export const Header: VFC = () => {
  return (
    <>
      <header>
        <ul className="flex gap-3 py-4 px-6 text-blue-500 bg-white drop-shadow-sm">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/signin">
              <a>Sing In</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};
