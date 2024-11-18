import React from "react";

const NoisePlayer = ({ label }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="leading-4 text-[14px] text-white opacity-40">
        {label}
      </span>
      <div className="w-[180px] px-4 text-white">this is player</div>
    </div>
  );
};

export default NoisePlayer;
