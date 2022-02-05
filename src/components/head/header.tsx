import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Navbuttons from "./navbuttons";
import Profile from "./profile";
import Searchbar from "./searchbar";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={2} className="flex p-1 justify-center items-center">
        <Link to="/" className="w-48">
          {" "}
          <img className="h-8" src={Logo} alt="" />
        </Link>
      </Grid>
      <Grid item xs={1} className="flex p-1 justify-center items-center">
        <Navbuttons />
      </Grid>
      <Grid item xs={7} className="flex p-1 justify-start items-center">
        <Searchbar />
      </Grid>
      <Grid item xs={2} className="flex p-1 justify-center items-center">
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Header;
