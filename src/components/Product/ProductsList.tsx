import React from "react";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../models/Product/Product";

export const ProductsList: React.FC = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <table className="min-w-full shadow-md rounded-md overflow-hidden divide-y divide-gray-200">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="px-3 py-3 text-left text-sm font-medium uppercase">
            #
          </th>
          <th className="px-3 py-3 text-left text-sm font-medium uppercase">
            Title
          </th>
          <th className="px-3 py-3 text-left text-sm font-medium uppercase">
            Category
          </th>
          <th className="px-3 py-3 text-left text-sm font-medium uppercase">
            Price
          </th>
          <th className="px-3 py-3 text-left text-sm font-medium uppercase">
            Rate
          </th>
          <th className="px-3 py-3 text-left text-sm font-medium uppercase">
            Rates
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {products.map((product: Product) => (
          <tr className="hover:bg-gray-100">
            <td className="px-3 py-3 text-sm">{product.id}</td>
            <td className="px-3 py-3 text-sm">{product.title}</td>
            <td className="px-3 py-3 text-sm">{product.category}</td>
            <td className="px-3 py-3 text-sm">$ {product.price}</td>
            <td className="px-3 py-3 text-sm">{product.rating.rate}</td>
            <td className="px-3 py-3 text-sm">{product.rating.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
