const currentSongDuration = (currentDuration: number) =>
  Math.floor(currentDuration / 60).toString() +
  ":" +
  `${currentDuration % 60 < 10 ? "0" : ""}` +
  Math.floor(currentDuration % 60).toString();

export default currentSongDuration;
