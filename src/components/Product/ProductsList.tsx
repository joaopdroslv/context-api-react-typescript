import React, { type FC } from "react";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../models/Product/Product";

export const ProductsList: FC = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <table className="min-w-full shadow-md rounded-md overflow-hidden divide-y divide-gray-200">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-3 py-3 text-left text-sm font-medium">#</th>
          <th className="px-3 py-3 text-left text-sm font-medium">Name</th>
          <th className="px-3 py-3 text-left text-sm font-medium">
            Categories
          </th>
          <th className="px-3 py-3 text-left text-sm font-medium">Suppliers</th>
          <th className="px-3 py-3 text-left text-sm font-medium">Price</th>
          <th className="px-3 py-3 text-left text-sm font-medium">Rate</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {products.map((product: Product) => (
          <tr key={product.id} className="hover:bg-gray-100 cursor-pointer">
            <td className="px-3 py-3 text-sm">{product.id}</td>
            <td className="px-3 py-3 text-sm">{product.name}</td>
            <td className="px-3 py-3 text-sm uppercase">
              {product.categories
                ?.filter((c) => c?.name)
                .map((c) => c.name)
                .join(", ") || "-"}
            </td>
            <td className="px-3 py-3 text-sm uppercase">
              {product.suppliers
                ?.filter((s) => s?.name)
                .map((s) => s.name)
                .join(", ") || "-"}
            </td>
            <td className="px-3 py-3 text-sm">
              {product.price.amount} {product.price.currency}
            </td>
            <td className="px-3 py-3 text-sm">{product.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
