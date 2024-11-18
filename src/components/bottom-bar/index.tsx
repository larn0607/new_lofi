import React from "react";
import Button from "../Button.tsx";
import {
  mixerIcon,
  scenesIcon,
  templateIcon,
} from "../../assets/icons/index.js";
import Scenes from "./tab/Scenes.tsx";
import Mixer from "./tab/mixer/Mixer.tsx";
import Templates from "./tab/templates/Templates.tsx";

const BottomBar = () => {
  return (
    <>
      <div className="absolute left-1/2 bottom-[22px] -translate-x-1/2 flex items-center h-[50px] py-4 px-8 bg-bgd-100 border border-[color:hsla(0,0%,100%,.2)] rounded-[10px]">
        <Button className="w-10 flex justify-center" onClick={() => {}}>
          <img
            src={mixerIcon}
            alt="mixer"
            className="hover:bg-gray-100/20 p-2 rounded-md hover:scale-110"
          />
        </Button>
        <Button className="w-10 flex justify-center" onClick={() => {}}>
          <img
            src={templateIcon}
            alt="template"
            className="hover:bg-gray-100/20 p-2 rounded-md hover:scale-110"
          />
        </Button>
        <Button className="w-10 flex justify-center" onClick={() => {}}>
          <img
            src={scenesIcon}
            alt="scenes"
            className="hover:bg-gray-100/20 p-2 rounded-md hover:scale-110"
          />
        </Button>
      </div>
      {/* <Mixer /> */}
      <Scenes />
      {/* <Templates /> */}
    </>
  );
};

export default BottomBar;
