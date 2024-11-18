import React, { useState } from "react";

import Switch from "./Switch.tsx";
import { logoGif } from "../../assets/images/index.js";
import Button from "../Button.tsx";
import {
  fullscreenIcon,
  volumeActiveIcon,
  volumeMutedIcon,
} from "../../assets/icons/index.js";
import Pixel from "./Pixel.tsx";
import Audio from "./Audio.tsx";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [pixel, setPixel] = useState(false);
  const [isVolumeActive, setIsVolumeActive] = useState(true);

  const handleChangeDayNight = () => {
    setIsToggle(!isToggle);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleActiveVolume = () => {
    // const audio = document.querySelectorAll('audio')
    setIsVolumeActive(!isVolumeActive);
    debugger
    // audio.forEach(el => el.muted = isVolumeActive)
  };

  const handleChangePixel = () => {
    // dispatch(changePixelBackground({
    //   set: background.set,
    //   scene: background.scene,
    //   pixel: !pixel
    // }))
    setPixel(!pixel);
  };

  return (
    <div className="fixed top-0 flex justify-between items-center gap-8 left-0 w-full z-10 h-[50px] py-12 px-0 sm:p-12 bg-gradient-to-b from-[#383636]/80">
      <div className="flex-1 hidden sm:block">
        <img src={logoGif} alt="" className="max-w-[170px]" />
      </div>
      <div className="flex flex-1 sm:flex-initial items-center justify-center gap-4">
        <Audio />
        <Button className="w-8 h-8" onClick={handleActiveVolume}>
          <img
            src={isVolumeActive ? volumeActiveIcon : volumeMutedIcon}
            width={32}
            alt="volume-active"
            className="max-w-[32px]"
          />
        </Button>
        <Button className="w-8 h-8" onClick={handleFullScreen}>
          <img
            src={fullscreenIcon}
            alt="full-screen"
            className="max-w-[32px]"
          />
        </Button>
        <Pixel onClick={handleChangePixel} />
        <Switch
          isToggle={isToggle}
          handleChangeDayNight={handleChangeDayNight}
        />
      </div>
    </div>
  );
};

export default Navbar;
