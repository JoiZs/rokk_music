/* eslint-disable @typescript-eslint/no-unused-vars */
import { alpha, Box, Grid, Slider } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CurrentSongContext } from "../../contexts/currentsong";
import currentSongPlayTime from "../../utils/songcurrenttime";
import Musicinfo from "./musicinfo";
import Musicmenu from "./musicmenu";
import Musicplayer from "./musicplayer";
const Testsong = require("../../assets/musics/test.MP3");

interface Props {}

const song = {
  title: "Country Roads",
  artist: "John Denver",
  img: "https://i1.sndcdn.com/artworks-000198706036-r33rpl-t500x500.jpg",
  fav: true,
  song: Testsong,
};

const Footer: React.FC<Props> = () => {
  const [currentSong, setCurrentSong] =
    useContext<HTMLAudioElement[]>(CurrentSongContext);
  const [playtime, setPlaytime] = useState(0);

  useEffect(() => {
    new Promise(
      (currentSong.oncanplay = () => {
        setInterval(
          () =>
            setPlaytime((currentSong.currentTime / currentSong.duration) * 100),
          100
        );
      })
    );
  }, [currentSong]);
  return (
    <div className="h-full pt-0.5 flex relative justify-center bg-gray-800 bg-opacity-50 backdrop backdrop-blur-lg">
      <Box
        sx={{
          width: "100%",
          "& .MuiSlider-track": { color: "orange" },
          "& .MuiSlider-rail": { color: "orange" },
        }}
        className="flex absolute -translate-y-1/2 justify-center items-center hover:brightness-150"
      >
        <Slider
          aria-label="playtime"
          value={playtime}
          getAriaValueText={(value) => `${value}`}
          onChange={(e: any) =>
            (currentSong.currentTime =
              (e.target.value * currentSong.duration) / 100)
          }
          sx={{
            "& .MuiSlider-thumb": {
              width: "10px",
              height: "10px",
              color: "orange",
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 14px ${alpha(
                  "rgba(245, 90, 29, 0.925)",
                  0.16
                )}`,
              },
              "&.Mui-active": {
                boxShadow: `0px 0px 0px 14px ${alpha(
                  "rgba(245, 77, 11, 0.952)",
                  0.16
                )}`,
              },
            },
            "& ::before": {
              boxShadow: "#ff530f",
              width: "20px",
              height: "20px",
            },
          }}
        />
      </Box>
      <Grid container>
        <Grid item xs={4} className="flex items-center">
          <Musicinfo info={song} />
        </Grid>
        <Grid item xs={4} className="flex items-center">
          <Musicplayer info={song} />
        </Grid>
        <Grid item xs={4} className="flex items-center">
          <Musicmenu info={song} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
