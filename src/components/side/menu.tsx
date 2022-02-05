import React from "react";
import { RiMusic2Line, RiUserFollowLine } from "react-icons/ri";
import { MdQueueMusic } from "react-icons/md";
import { BiAlbum, BiHeart } from "react-icons/bi";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Translate from "../../utils/translate";

interface Props {}

const menu = [
  {
    title: "Bands",
    icon: RiMusic2Line,
    href: "/bands",
  },
  {
    title: "Albums",
    icon: BiAlbum,
    href: "/albums",
  },
  {
    title: "Playlists",
    icon: MdQueueMusic,
    href: "/playlists",
  },
  {
    title: "Liked",
    icon: BiHeart,
    href: "/liked",
  },
  {
    title: "Following",
    icon: RiUserFollowLine,
    href: "/following",
  },
];

const Menu = (props: Props) => {
  const urlpath = useLocation().pathname;
  return (
    <>
      {menu.map((el) => (
        <Grid
          item
          xs={12}
          key={el.title}
          className="flex p-2 justify-center text-gray-300 text-sm items-center"
        >
          <Link to={el.href}>
            <div
              className={`w-48 flex flex-row items-center cursor-pointer hover:brightness-125 ${
                urlpath === el.href ? "brightness-125" : ""
              }`}
            >
              <el.icon className="text-xl text-gray-500 mr-2" />
              <Translate>{el.title}</Translate>
            </div>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Menu;
