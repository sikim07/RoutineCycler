import React from "react";

interface ClockIconProps {
  className?: string;
}

export const ClockIcon: React.FC<ClockIconProps> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);
