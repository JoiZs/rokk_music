import { Grid } from "@mui/material";
import React from "react";
import Downloadbtn from "../head/downloadbtn";
import Extramenu from "./extramenu";
import Languagebtn from "./languagebtn";
import Menu from "./menu";

const Sidebar: React.FC = () => {
  return (
    <Grid container className="flex flex-col h-full shadow-md shadow-black">
      <Grid
        container
        className="pb-10 pt-4 bg-gradient-to-t from-black to-gray-900"
      >
        <Menu />
      </Grid>
      <Grid container>
        <Extramenu />
      </Grid>
      <Grid
        container
        className="pb-10 pt-4 flex-1 bg-gradient-to-t from-black to-gray-900"
      >
        <Downloadbtn />
        <Languagebtn />
      </Grid>
    </Grid>
  );
};

export default Sidebar;
