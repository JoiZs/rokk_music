/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { CgPlayList } from "react-icons/cg";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { CurrentSongContext } from "../../contexts/currentsong";
import { alpha, Box, Slider } from "@mui/material";
import currentSongPlayTime from "../../utils/songcurrenttime";
import currentSongDuration from "../../utils/songduration";

interface songinfo {
  title: string;
  img: string;
  artist: string;
  fav: boolean;
  song: string;
}

interface Props {
  info: songinfo;
}

const Musicmenu = (props: Props) => {
  const [isMute, setMute] = useState(false);
  const [currentSong, setCurrentSong] =
    useContext<HTMLAudioElement[]>(CurrentSongContext);
  const [runtime, setRuntime] = useState("");
  const [playtime, setPlaytime] = useState("");
  const [volume, setVolume] = useState(70);

  const readySong = () => {
    new Promise(
      (currentSong.oncanplay = () => {
        currentSong.volume = volume / 100;
        setRuntime(currentSongDuration(currentSong.duration));
        setInterval(
          () => setPlaytime(currentSongPlayTime(currentSong.currentTime)),
          1000
        );
      })
    );
  };

  const muteHandler = () => {
    currentSong.muted = isMute ? false : true;
    setMute(!isMute);
  };

  useEffect(() => {
    readySong();
  });

  return (
    <section className="flex h-full flex-row w-full pl-6 justify-center pr-8 text-gray-400 text-sm items-center">
      <div className="flex-1 flex justify-center">
        <span>{playtime ? playtime : "0:00"}</span>

        <span>/{runtime ? runtime : "0:00"}</span>
      </div>
      <div className="flex flex-row text-xl items-center">
        <FiMoreHorizontal className="mx-2 text-2xl hover:brightness-125" />
        <CgPlayList className="mx-2 text-2xl hover:brightness-125" />
        <span className="hover:brightness-125 mx-2" onClick={muteHandler}>
          {isMute || volume === 0 ? <RiVolumeMuteLine /> : <RiVolumeUpLine />}
        </span>
        <Box
          sx={{
            width: 100,
            "& .MuiSlider-track": { color: "gray" },
            "& .MuiSlider-rail": { color: "gray" },
          }}
          className="flex justify-center items-center px-2 hover:brightness-150"
        >
          <Slider
            aria-label="volume"
            value={isMute ? 0 : volume}
            getAriaValueText={(value) => `${value}`}
            onChange={(e: any) => setVolume(e.target.value)}
            sx={{
              "& .MuiSlider-thumb": {
                width: "10px",
                height: "10px",
                color: "gray",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 14px ${alpha(
                    "rgba(100, 100, 100, 0.2)",
                    0.16
                  )}`,
                },
                "&.Mui-active": {
                  boxShadow: `0px 0px 0px 14px ${alpha(
                    "rgba(100, 100, 100, 0.2)",
                    0.16
                  )}`,
                },
              },
              "& ::before": {
                boxShadow: "rgba(100,100,100,0.2)",
                width: "20px",
                height: "20px",
              },
            }}
          />
        </Box>
      </div>
    </section>
  );
};

export default Musicmenu;
