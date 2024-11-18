import React from "react";

interface BoxProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-[hsla(0,0%,100%,.05)] border border-[hsla(0,0%,100%,1)] rounded-lg px-3 py-2 ${className}`}
    >
      {title && <p className="text-[hsla(0,0%,100%,.7)] font-bold text-sm">{title}</p>}
      {children}
    </div>
  );
};

export default Box;
