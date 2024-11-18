import React from "react";
import Box from "../Box.tsx";
import NoisePlayer from "./NoisePlayer.tsx";

const Noises = () => {
  return (
    <Box className="mt-2" title="NOISES">
      <div className="mt-2">
        <NoisePlayer label="fire" />
        <NoisePlayer label="fire" />
        <NoisePlayer label="fire" />
      </div>
    </Box>
  );
};

export default Noises;
