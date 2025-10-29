import type { FC } from "react";

interface InfoBadgeProps {
  value: number;
  text: string;
}

export const InfoBadge: FC<InfoBadgeProps> = ({ value, text }) => {
  return (
    <div className="inline-flex items-center rounded-md overflow-hidden text-sm font-medium">
      <span className="bg-blue-600 text-white px-3 py-2">{value}</span>
      <span className="bg-blue-200 text-blue-800 px-3 py-2">{text}</span>
    </div>
  );
};
