import type { FC } from "react";

interface InfoBadgeProps {
  value: number;
  label: string;
}

export const InfoBadge: FC<InfoBadgeProps> = ({ value, label: label }) => {
  return (
    <div className="inline-flex items-center rounded-md overflow-hidden text-sm font-medium">
      <span className="bg-purple-200 text-purple-800 px-3 py-2">{label}</span>
      <span className="bg-purple-600 text-white px-3 py-2">{value}</span>
    </div>
  );
};
