import { Grid } from "@mui/material";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

interface Props {
  listnumber: number;
  data: {
    title: string;
    image: string;
    year: number;
    album: string;
    plays: number;
    fav: boolean;
  };
}

const Listasong = (props: Props) => {
  return (
    <Grid
      container
      className="hover:bg-gray-700 text-sm rounded text-gray-400 transition ease-in-out"
    >
      <Grid item xs={1} className="flex justify-center items-center">
        {props.listnumber}
      </Grid>
      <Grid item xs={5} className="flex justify-start items-center">
        <img
          src={props.data.image}
          alt=""
          className="w-16 h-16 object-center shadow shadow-gray-800"
        />
        <div className="p-4">
          <h1 className="text-gray-200 text-base">{props.data.title}</h1>
          <div className="flex flex-row text-xs">
            <span>{props.data.year}</span>
            <li className="pl-3">{props.data.album}</li>
          </div>
        </div>
      </Grid>
      <Grid item xs={4} className="flex items-center">
        {new Intl.NumberFormat().format(props.data.plays)}
      </Grid>
      <Grid item xs={2} className="flex items-center pr-16">
        <div className="flex space-x-6 flex-row items-center justify-around group-hover:bg-gray-50">
          <span>4:22</span>
          {props.data.fav ? (
            <AiFillHeart className="text-orange-500" />
          ) : (
            <AiOutlineHeart />
          )}
          <FiMoreHorizontal className="mx-2 text-2xl hover:brightness-125" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Listasong;
