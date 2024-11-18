import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
