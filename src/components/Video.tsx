import React from "react";

interface Props {
  src: string;
  className?: string;
}

const Video: React.FC<Props> = ({ src, className }) => {
  return (
    <div className="absolute inset-0 z-0 w-screen h-screen">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={`object-cover w-screen h-screen ${className} transition-opacity duration-500 ease-in-out`}
      />
    </div>
  );
};

export default Video;
