import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
