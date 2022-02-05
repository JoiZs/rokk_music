import { Grid } from "@mui/material";
import React from "react";
import {
  RiAppStoreLine,
  RiDownloadFill,
  RiGooglePlayLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Translate from "../../utils/translate";

interface Props {}

const Downloadbtn = (props: Props) => {
  return (
    <Grid
      item
      xs={12}
      className="flex p-1 justify-center text-xs text-gray-300 items-center"
    >
      <div className="border-2 rounded w-48 p-2 border-gray-700 flex justify-around items-center">
        <RiDownloadFill className="text-base text-orange-500" />
        <Translate>Download App</Translate>
        <Link to="/">
          <RiGooglePlayLine className="text-base hover:text-gray-400" />{" "}
        </Link>
        <Link to="/">
          <RiAppStoreLine className="text-base hover:text-gray-400" />
        </Link>
      </div>
    </Grid>
  );
};

export default Downloadbtn;
