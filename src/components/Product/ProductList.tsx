import React from "react";
import { useProduct } from "../../hooks/useProduct";
import type { Product } from "../../models/Product";

export const ProductList: React.FC = () => {
  const { products, loading } = useProduct();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              #
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Category
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Rate
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase">
              Rates
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product: Product) => (
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 text-sm">{product.id}</td>
              <td className="px-6 py-4 text-sm">{product.title}</td>
              <td className="px-6 py-4 text-sm">{product.category}</td>
              <td className="px-6 py-4 text-sm">$ {product.price}</td>
              <td className="px-6 py-4 text-sm">{product.rating.rate}</td>
              <td className="px-6 py-4 text-sm">{product.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
