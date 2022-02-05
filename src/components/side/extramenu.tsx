import React from "react";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Translate from "../../utils/translate";

interface Props {}

const menu = [
  {
    title: "Popular",
    href: "/popular",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Discography",
    href: "/discography",
  },
  {
    title: "Videos",
    href: "/videos",
  },
  {
    title: "Reviews",
    href: "/reviews",
  },
];

const Extramenu = (props: Props) => {
  const urlpath = useLocation().pathname;
  return (
    <>
      {menu.map((el) => (
        <Grid
          item
          xs={12}
          key={el.title}
          className="flex p-1 justify-center text-sm text-gray-300 items-center"
        >
          <Link to={el.href}>
            <div
              className={`w-48 hover:bg-gray-700 ${
                urlpath === el.href ? "bg-gray-700" : ""
              } rounded flex p-2 flex-row items-center cursor-pointer hover:brightness-125`}
            >
              <Translate>{el.title}</Translate>
            </div>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Extramenu;
