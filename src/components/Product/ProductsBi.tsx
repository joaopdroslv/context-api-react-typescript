import type { FC } from "react";
import { useProducts } from "../../hooks/useProducts";
import { InfoBadge } from "../ui/InfoBadge";

export const ProductsBi: FC = () => {
  const { loadingBiData, biData } = useProducts();

  if (loadingBiData) return <p>Loading...</p>;

  return (
    <div className="w-full flex justify-center gap-4 flex-wrap">
      {biData.productStats.map((stat, index) => (
        <InfoBadge key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};
