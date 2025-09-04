import React from "react";

interface WaveIconProps {
  className?: string;
}

export const WaveIcon: React.FC<WaveIconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 12l3-3 3 3 3-3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16l3-3 3 3 3-3"
    />
  </svg>
);
