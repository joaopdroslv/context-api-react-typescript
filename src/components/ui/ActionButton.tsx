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
  callback?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const colorClasses: Record<ActionButtonColor, string> = {
  default:
    "text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800",
  dark: "text-gray-900 border border-gray-800 hover:bg-gray-900 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800",
  green:
    "text-green-700 border border-green-700 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800",
  red: "text-red-700 border border-red-700 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900",
  yellow:
    "text-yellow-400 border border-yellow-400 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900",
  purple:
    "text-purple-700 border border-purple-700 hover:bg-purple-800 hover:text-white focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white dark:focus:ring-purple-900",
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  color = "default",
  className = "",
  children,
  callback,
  ...props
}) => {
  const classes = `font-medium rounded-lg text-sm px-4 py-2.5 text-center focus:outline-none focus:ring-4 cursor-pointer ${colorClasses[color]} ${className}`;

  return (
    <button
      className={classes}
      {...props}
      onClick={(event) => {
        event.preventDefault();
        callback;
      }}
    >
      {children}
    </button>
  );
};
