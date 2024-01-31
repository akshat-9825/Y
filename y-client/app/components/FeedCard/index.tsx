import Image from "next/image";

import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { GiHistogram } from "react-icons/gi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MdOutlineFileUpload } from "react-icons/md";

interface IconsType {
  [key: string]: React.ReactNode[];
}

const icons: IconsType = {
  message: [
    <FiMessageCircle
      key={1}
      className="rounded-full cursor-pointer transition-all"
    />,
    <div key={2}>475</div>,
  ],
  retweet: [
    <FaRetweet
      key={1}
      className="rounded-full cursor-pointer transition-all"
    />,
    <div key={2}>566</div>,
  ],
  heart: [
    <IoMdHeart
      key={1}
      className="rounded-full cursor-pointer transition-all"
    />,
    <div key={2}>1.9k</div>,
  ],
  histogram: [
    <GiHistogram
      key={1}
      className="rounded-full cursor-pointer transition-all"
    />,
    <div key={2}>2.1k</div>,
  ],
  bookmark: [
    <PiBookmarkSimple
      key={1}
      className="rounded-full text-xl cursor-pointer transition-all"
    />,
    <MdOutlineFileUpload
      key={1}
      className="rounded-full text-xl cursor-pointer transition-all"
    />,
  ],
};

const FeedCard: React.FC = () => {
  return (
    <div className="border-y border-gray-700 grid grid-cols-12 py-4 transition-all cursor-pointer">
      <div className="flex col-span-2 justify-center h-fit">
        <Image
          src="https://avatars.githubusercontent.com/u/56993884?v=4"
          alt="profile-avatar"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="col-span-10">
        Anish Giri @anishgiri · 17h
        <p>
          No, it&apos;s not the hollow man in the Red & Gold 😆 12th Man Army,
          can you guess who this Royal Challenger is? 🔍 #PlayBold #ನಮ್ಮRCB
        </p>
        <div className="mt-4 flex flex-row justify-between pr-4">
          {Object.entries(icons).map(([key, [icon, count]]) => (
            <div
              key={key}
              className="text-gray-500 flex flex-row gap-1 items-center text-sm w-fit p-1 pr-2 rounded-full hover:bg-slate-900">
              {icon}
              {count}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
