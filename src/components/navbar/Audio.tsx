import React from "react";
import Button from "../Button.tsx";
import { nextIcon, pauseIcon, playIcon, prevIcon, volumeIcon } from "../../assets/icons";

const Audio = () => {
  const isPlaying = false;
  return (
    <div className="flex items-center h-8 bg-bgd-100 rounded-lg">
      <Button
      className="w-9 h-full flex justify-center items-center"
      >
        <img src={prevIcon} alt="prev" />
      </Button>
      {!isPlaying ? (
        <Button className="w-9 h-full flex justify-center items-center" onClick={() => {}}>
          <img src={playIcon} alt="play" />
        </Button>
      ) : (
        <Button className="w-9 h-full flex justify-center items-center" onClick={() => {}}>
          <img src={pauseIcon} alt="pause" />
        </Button>
      )}
      <Button
        onClick={() => {
        }}
        className="w-9 h-full flex justify-center items-center"
      >
        <img src={nextIcon} alt="next" />
      </Button>
      <Button
        onClick={() => {
        }}
        className="w-9 h-full flex justify-center items-center"
      >
        <img src={volumeIcon} alt="volumeIcon" />
      </Button>
    </div>
  );
};

export default Audio;
