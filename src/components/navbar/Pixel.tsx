import { useState } from "react";
import { pixel, pixelHover } from "../../assets/icons";
import React from "react";

interface PixelProps {
  onClick: () => void;
}

const Pixel: React.FC<PixelProps> = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClick}
    >
      <img
        src={hover ? pixelHover : pixel}
        alt="pixel"
        width={35}
        height={35}
        className="max-w-[32px]"
      />
    </div>
  );
};

export default Pixel;
