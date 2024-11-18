import React from "react";
import { sunIcon, moonIcon } from "../../assets/icons/index.js";

interface SwitchProps {
  isToggle: boolean;
  handleChangeDayNight: () => void;
}

const Switch: React.FC<SwitchProps> = ({
  isToggle = false,
  handleChangeDayNight,
}) => {
  return (
    <div
      onClick={handleChangeDayNight}
      className={`w-[60px] h-[29px] relative cursor-pointer rounded-[50px] ${
        isToggle ? "bg-dark" : "bg-light"
      }`}
    >
      <div
        className={`absolute h-[23px] w-[23px] rounded-full bg-[#f2f2f2] top-[3px] left-[3px] shadow-[0_0_5px_0_#f2f2f2] transition-transform duration-500 ${
          isToggle ? "translate-x-[30px]" : "translate-x-0"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-[55%] ${
          isToggle
            ? "-translate-x-7 -translate-y-[9.4px]"
            : "-translate-x-[20%] -translate-y-[50%]"
        } transition-transform duration-500`}
      >
        {isToggle ? (
          <img
            className="w-10 h-5 brightness-0 invert outline-none bg-none"
            src={moonIcon}
            alt=""
          />
        ) : (
          <img
            className="w-10 h-5 brightness-0 invert outline-none bg-none"
            src={sunIcon}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Switch;
