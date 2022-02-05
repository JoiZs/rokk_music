const currentSongPlayTime = (currentSeconds: number) =>
  Math.floor(currentSeconds / 60).toString() +
  ":" +
  `${currentSeconds % 60 < 10 ? "0" : ""}` +
  Math.floor(currentSeconds % 60).toString();

export default currentSongPlayTime;
