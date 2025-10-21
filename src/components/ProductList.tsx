import React from "react";
// import { useProductContext } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";
import type { Product } from "../models/Product";

export const ProductList: React.FC = () => {
  const { products, loading } = useProduct();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-2 border-b border-slate-300 bg-slate-50">#</th>
            <th className="p-2 border-b border-slate-300 bg-slate-50">Title</th>
            <th className="p-2 border-b border-slate-300 bg-slate-50">
              Category
            </th>
            {/* <th className="p-2 border-b border-slate-300 bg-slate-50">Description</th> */}
            <th className="p-2 border-b border-slate-300 bg-slate-50">Price</th>
            <th className="p-2 border-b border-slate-300 bg-slate-50">
              Rating
            </th>
            <th className="p-2 border-b border-slate-300 bg-slate-50">
              Rate Count
            </th>
            <th className="p-2 border-b border-slate-300 bg-slate-50">
              Classification
            </th>
            <th className="p-2 border-b border-slate-300 bg-slate-50">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: Product) => (
            <tr className="hover:bg-slate-50">
              <td className="p-2 border-b border-slate-300">
                <img
                  src={p.image}
                  alt={p.title}
                  className="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-contain object-center p-1"
                />
              </td>
              <td className="p-2 border-b border-slate-300">
                <p className="block text-sm text-slate-800">{p.title}</p>
              </td>
              <td className="p-2 border-b border-slate-300">
                <p className="block text-sm text-slate-800 capitalize">{p.category}</p>
              </td>
              {/* <td className="p-2 border-b border-slate-300">
                <p className="block text-sm text-slate-800">{p.description}</p>
              </td> */}
              <td className="p-2 border-b border-slate-300">
                <p className="block text-sm text-slate-800">$ {p.price}</p>
              </td>
              <td className="p-2 border-b border-slate-300">
                <p className="block text-sm text-slate-800">{p.rating.rate}</p>
              </td>
              <td className="p-2 border-b border-slate-300">
                <p className="block text-sm text-slate-800">{p.rating.count}</p>
              </td>
              <td className="p-2 border-b border-slate-300">
                <div
                  className={`inline-flex items-center px-2 py-1 text-xs font-bold uppercase rounded-md select-none whitespace-nowrap
                  ${
                    p.rating.rate < 2
                      ? "bg-red-500/20 text-red-900"
                      : p.rating.rate < 4
                      ? "bg-yellow-500/20 text-yellow-900"
                      : "bg-green-500/20 text-green-900"
                  }`}
                ><span>{p.rating.rate < 2 ? "Poor" : p.rating.rate < 4 ? "Average" : "Excellent"}</span></div>
              </td>
              <td className="p-2 border-b border-slate-300">
                <a
                  href="#"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
