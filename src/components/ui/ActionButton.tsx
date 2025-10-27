import React from "react";
import type { ButtonHTMLAttributes, MouseEvent } from "react";

type ActionButtonColor =
  | "default"
  | "dark"
  | "green"
  | "red"
  | "yellow"
  | "purple";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ActionButtonColor;
  onClickCallback?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const colorClasses: Record<ActionButtonColor, string> = {
  default:
    "text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white",
  dark: "text-gray-900 border border-gray-800 hover:bg-gray-900 hover:text-white dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white",
  green:
    "text-green-700 border border-green-700 hover:bg-green-800 hover:text-white dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white",
  red: "text-red-800 border border-red-800 hover:bg-red-800 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white",
  yellow:
    "text-yellow-400 border border-yellow-400 hover:bg-yellow-500 hover:text-white dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white",
  purple:
    "text-purple-700 border border-purple-700 hover:bg-purple-800 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white",
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  color = "default",
  className = "",
  children,
  onClickCallback,
  ...props
}) => {
  const classes = `font-medium rounded-lg text-sm px-4 py-2.5 text-center focus:outline-none cursor-pointer ${colorClasses[color]} ${className}`;

  return (
    <button
      className={classes}
      {...props}
      onClick={(event) => {
        event.preventDefault();
        onClickCallback?.(event);
      }}
    >
      {children}
    </button>
  );
};
