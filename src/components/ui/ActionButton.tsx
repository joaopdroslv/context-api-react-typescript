import React, {
  type FC,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";

type ActionButtonColor =
  | "default"
  | "dark"
  | "green"
  | "red"
  | "yellow"
  | "blue";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ActionButtonColor;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const colorClasses: Record<ActionButtonColor, string> = {
  default:
    "text-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purpler-600 hover:text-white",
  dark: "text-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white",
  green:
    "text-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600 hover:text-white",
  red: "text-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600 hover:text-white",
  yellow:
    "text-yellow-500 border border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 hover:text-white",
  blue: "text-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white",
};

export const ActionButton: FC<ActionButtonProps> = ({
  color = "default",
  className = "",
  children,
  handleClick,
  ...props
}) => {
  const classes = `shadow-sm font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer ${colorClasses[color]} ${className}`;

  return (
    <button
      className={classes}
      {...props}
      onClick={(event) => {
        event.preventDefault();
        handleClick?.(event);
      }}
    >
      {children}
    </button>
  );
};
