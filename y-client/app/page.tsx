import { ReactNode } from "react";
import { Inter } from "next/font/google";

import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import FeedCard from "./components/FeedCard";

const inter = Inter({ subsets: ["latin"] });

interface sidebarItem {
  title: string;
  icon: ReactNode;
}

const sidebarItems: sidebarItem[] = [
  {
    title: "Home",
    icon: <GoHomeFill className="text-3xl" />,
  },
  {
    title: "Search",
    icon: <CiSearch className="text-3xl" />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotifications className="text-3xl" />,
  },
  {
    title: "Messages",
    icon: <PiEnvelopeSimple className="text-3xl" />,
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimpleBold className="text-3xl" />,
  },
  {
    title: "Profile",
    icon: <CiUser className="text-3xl" />,
  },
];

export default function Home() {
  return (
    <div
      className={`grid grid-cols-12 justify-center h-screen w-screen ${inter.className} max-w-[1280px] mx-auto`}>
      <div className="col-span-3 pt-3">
        <FaXTwitter className="text-6xl hover:bg-slate-900 rounded-full cursor-pointer p-3 transition-all" />
        <div className="mt-4 pr-4">
          <ul className="text-2xl">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="mt-3 flex justify-start items-center gap-4 cursor-pointer hover:bg-slate-900 transition-all rounded-full p-3 pr-8 w-fit">
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <button className="p-4 w-full self-center mt-8 rounded-full text-center bg-[#1D9BF0] hover:bg-[#1a8cd8]">
            Post
          </button>
        </div>
      </div>
      <div className="col-span-6 border-l border-r border-gray-700">
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
