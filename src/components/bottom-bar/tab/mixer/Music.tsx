import React from "react";
import Box from "../Box.tsx";
import Mood from "./Mood.tsx";
import {
  chillIcon,
  jazzyIcon,
  sleepyIcon,
} from "../../../../assets/icons/index.js";

const Music = () => {
  const moods = [
    {
      icon: sleepyIcon,
      title: "Sleepy",
    },
    {
      icon: jazzyIcon,
      title: "Jazzy",
    },
    {
      icon: chillIcon,
      title: "Chill",
    },
  ];

  return (
    <Box title="MUSIC" className="mt-2">
      <div className="flex items-center justify-between mt-3">
        {moods.map((mood, i) => (
          <Mood
            key={i}
            icon={mood.icon}
            title={mood.title}
            onClick={() => {}}
          />
        ))}
      </div>
    </Box>
  );
};

export default Music;
