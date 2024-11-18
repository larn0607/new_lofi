import React from "react";

interface MoodProps {
  icon: string;
  title: string;
  onClick: () => void;
}

const Mood: React.FC<MoodProps> = ({ icon, title, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-[hsla(0,0%,85%,.2)] rounded-full">
        <img
          src={icon}
          alt="sleepy"
          className="max-w-[78px] brightness-0 invert opacity-30"
          draggable={false}
        />
      </div>
      <span className="mt-2 text-xs text-[hsla(0,0%,100%,.3)]">{title}</span>
    </div>
  );
};

export default Mood;
