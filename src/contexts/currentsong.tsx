import React, { createContext, useState } from "react";

const Testsong = require("../assets/musics/test.MP3");

export const CurrentSongContext = createContext<any>(null);

interface Prop {
  children: JSX.Element;
}

const CurrentsongCtx = (props: Prop) => {
  const song = new Audio(Testsong);
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement>(song);

  return (
    <CurrentSongContext.Provider value={[currentSong, setCurrentSong]}>
      {props.children}
    </CurrentSongContext.Provider>
  );
};

export default CurrentsongCtx;
