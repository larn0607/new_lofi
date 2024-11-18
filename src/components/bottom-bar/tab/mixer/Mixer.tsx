import React from "react";
import Button from "../../../Button.tsx";
import Music from "./Music.tsx";
import Noises from "./Noises.tsx";
import MusicVolume from "./MusicVolume.tsx";

const Mixer = () => {
  return (
    <div className="absolute left-1/2 bottom-[90px] -translate-x-1/2 w-[311px] h-[50vh] p-4 bg-bgd-100 rounded-3xl z-[49] overflow-auto">
      <Button className="absolute top-4 right-4 z-10 text-[hsla(0,0%,100%,.5)] hover:text-[hsl(0,0%,100%)]">
        ー
      </Button>
      <span className="text-[hsla(0,0%,100%,.8)] text-base font-bold">
        MIXER
      </span>
      <Music />
      <MusicVolume />
      <Noises />
    </div>
  );
};

export default Mixer;
