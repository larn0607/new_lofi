import React from "react";
import Box from "../Box.tsx";
import { volumeDownIcon, volumeUpIcon } from "../../../../assets/icons";

const MusicVolume = () => {
  return (
    <Box title="MUSIC VOLUME" className="my-2">
      <div className="flex items-center justify-between mt-2">
        <img src={volumeDownIcon} alt="volumeMinIcon" />
        <p className="flex-1 mx-[18px]">this is slider</p>
        <img src={volumeUpIcon} alt="volumeMaxIcon" />
      </div>
    </Box>
  );
};

export default MusicVolume;
