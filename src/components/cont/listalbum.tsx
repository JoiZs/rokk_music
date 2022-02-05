import React from "react";
import { BiPlay } from "react-icons/bi";

interface Props {
  title: string;
  year: number;
  albumImg: string;
}

const Listalbum = (props: Props) => {
  return (
    <div className="flex z-0 flex-col m-auto shadow shadow-black group p-2 rounded w-40 h-56 bg-gray-800 backdrop-blur-md group-hover:bg-gray-600">
      <div>
        <img src={props.albumImg} alt="" />
      </div>
      <div className="flex flex-1 justify-between items-center">
        <div className="flex flex-col">
          <h1>{props.title}</h1>
          <span>{props.year}</span>
        </div>
        <span className="w-8 group-hover:opacity-100 opacity-0 h-8 flex justify-center items-center rounded-full cursor-pointer bg-orange-500 hover:brightness-125 text-gray-900 text-xl">
          <BiPlay className="translate-x-0.5 " />
        </span>
      </div>
    </div>
  );
};

export default Listalbum;
