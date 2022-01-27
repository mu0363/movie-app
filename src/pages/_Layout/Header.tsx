import { Transition, Popover } from "@headlessui/react";
import { EmojiHappyIcon } from "@heroicons/react/solid";
import "emoji-mart/css/emoji-mart.css";
import type { BaseEmoji } from "emoji-mart";
import { Picker } from "emoji-mart";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, VFC } from "react";
import { MouseEvent } from "react";
import { useUser } from "hooks/useUser";

export const Header: VFC = () => {
  const { user, signOut } = useUser();
  const [emoji, setEmoji] = useState("");

  const handleSignOut = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut();
  };

  const handleAlertEmoji = (emoji: BaseEmoji) => {
    setEmoji(emoji.native);
  };

  return (
    <>
      <header>
        <div className="flex justify-between py-4 px-6 font-bold text-blue-500 bg-white shadow-md shadow-blue-500/10">
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
            <li>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button>
                      <EmojiHappyIcon className="mt-2 h-6" />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute">
                        <Picker onSelect={handleAlertEmoji} set="apple" />
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </li>
            <li>
              <p>{emoji}</p>
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
