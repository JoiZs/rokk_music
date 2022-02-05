import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface songinfo {
  title: string;
  img: string;
  artist: string;
  fav: boolean;
}

interface Props {
  info: songinfo;
}

const Musicinfo = (props: Props) => {
  return (
    <section className="flex flex-row w-full pl-6 justify-start items-center">
      <div>
        <img className="h-14" src={props.info.img} alt="" />
      </div>
      <div className="flextext-gray-200 flex-col text-sm items-start p-4">
        <h1 className="text-gray-200">{props.info.title}</h1>
        <span className="text-gray-500 text-xs">{props.info.artist}</span>
      </div>
      <div className="flex-1 w-full flex justify-center text-orange-500 text-xl">
        {props.info.fav ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </section>
  );
};

export default Musicinfo;
