import React from "react";
import { BiHeart, BiPlay, BiShareAlt, BiShuffle } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";

interface Props {
  title: string;
  follower: number;
  monthlyListener: number;
  coverImg: string;
}

const Coverinfo = (props: Props) => {
  return (
    <div className="w-full h-full relative flex justify-center items-center p-6">
      <div className="w-full h-full z-10 flex flex-col justify-end items-start">
        <h1 className="text-5xl text-gray-200">{props.title}</h1>
        <div className="flex pb-4 flex-row items-center space-x-2">
          <span>
            {new Intl.NumberFormat().format(props.follower)} Followers
          </span>
          <li>
            {new Intl.NumberFormat().format(props.monthlyListener)} monthly
            listeners
          </li>
        </div>
        <div className="flex flex-row absolute right-0 px-6 bottom-0 translate-y-1/2 z-30 justify-between w-full items-center">
          <span className="p-2  rounded-full cursor-pointer bg-orange-500 hover:brightness-125 text-gray-900 text-4xl">
            <BiPlay className="translate-x-0.5 " />
          </span>
          <div className="flex flex-row items-center space-x-4 text-lg">
            <span className="p-2 bg-black rounded-full cursor-pointer hover:brightness-125">
              <BiShuffle />
            </span>
            <span className="p-2 bg-black rounded-full cursor-pointer hover:brightness-125">
              <BiShareAlt />
            </span>
            <span className="p-2 bg-black rounded-full cursor-pointer hover:brightness-125">
              <BiHeart />
            </span>
            <span className="flex flex-row items-center cursor-pointer hover:brightness-125 p-2 px-3 bg-black rounded-full">
              <RiUserFollowLine /> <p className="pl-1 text-sm"> Follow</p>
            </span>
          </div>
        </div>
      </div>

      <img
        src={props.coverImg}
        className="object-cover object-top opacity-60 absolute w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Coverinfo;
