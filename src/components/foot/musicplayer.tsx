import gsap from "gsap";
import React, { useContext, useState } from "react";
import {
  BiPause,
  BiPlay,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
} from "react-icons/bi";
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";
import { CurrentSongContext } from "../../contexts/currentsong";

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

const Musicplayer = (props: Props) => {
  const [shuffle, setShuffle] = useState(false);
  const [play, setPlay] = useState(false);
  const [repeat, setRepeat] = useState<"no" | "one" | "all">("no");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentSong, setCurrentSong] =
    useContext<HTMLAudioElement[]>(CurrentSongContext);

  const playHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    play ? currentSong.pause() : currentSong.play();

    gsap.fromTo(
      e.currentTarget,
      { opacity: 0, translateX: 5 },
      { opacity: 1, duration: 0.2, translateX: 0 }
    );

    setPlay(!play);
  };

  return (
    <section className="flex flex-row w-full pl-6 justify-center text-gray-400 text-xl items-center">
      <BiShuffle
        onClick={() => setShuffle(!shuffle)}
        className={`${
          shuffle ? "text-orange-500" : "text-gray-600"
        } hover:brightness-125 mx-2`}
      />
      <BiSkipPrevious className="text-3xl hover:brightness-125 mx-2" />
      <span
        onClick={playHandler}
        className="text-gray-800 text-4xl hover:brightness-125 mx-2 bg-gray-400 rounded-full p-2"
      >
        {play ? <BiPause /> : <BiPlay className="translate-x-0.5" />}
      </span>
      <BiSkipNext className="text-3xl hover:brightness-125 mx-2" />
      <span
        className="mx-2"
        onClick={() => {
          if (repeat === "no") {
            setRepeat("one");
          } else if (repeat === "one") {
            setRepeat("all");
          } else {
            setRepeat("no");
          }
        }}
      >
        {repeat === "one" ? (
          <RiRepeatOneFill className="text-orange-500" />
        ) : (
          <RiRepeat2Fill
            className={repeat === "all" ? "text-orange-500" : "text-gray-600"}
          />
        )}
      </span>
    </section>
  );
};

export default Musicplayer;
