import React from "react";

interface NotificationIconProps {
  className?: string;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
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
      d="M15 17h5l-5 5v-5zM4 19h6l-6 6v-6zM4 13h6l-6 6v-6zM4 7h6l-6 6V7zM10 19h6l-6 6v-6zM10 13h6l-6 6v-6zM10 7h6l-6 6V7z"
    />
  </svg>
);
