import { Fragment } from "react/jsx-runtime";
import React, { useState, type FC } from "react";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../models/Product/Product";
import { ActionButton } from "../ui/ActionButton";

export const ProductsList: FC = () => {
  const { products, loadingProducts } = useProducts();
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  if (loadingProducts) return <p>Loading...</p>;

  return (
    <>
      <div className="w-full flex justify-end">
        <ActionButton
          className="w-30"
          handleClick={() => alert("Not implemented!")}
        >
          Create
        </ActionButton>
      </div>
      <table className="min-w-full shadow-md rounded-md overflow-hidden divide-y divide-gray-200 mt-8">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-3 py-3 text-left text-sm font-medium">#</th>
            <th className="px-3 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-3 py-3 text-left text-sm font-medium">
              Categories
            </th>
            <th className="px-3 py-3 text-left text-sm font-medium">
              Suppliers
            </th>
            <th className="px-3 py-3 text-left text-sm font-medium">Cost</th>
            <th className="px-3 py-3 text-left text-sm font-medium">Price</th>
            <th className="px-3 py-3 text-left text-sm font-medium">Stock</th>
            <th className="px-3 py-3 text-left text-sm font-medium">Rate</th>
            <th className="px-3 py-3 text-left text-sm font-medium">-</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product: Product) => {
            const isExpanded = expandedRows.includes(product.id);
            return (
              <Fragment key={product.id}>
                <tr className="hover:bg-gray-100">
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
                    {product.cost.amount} {product.cost.currency}
                  </td>
                  <td className="px-3 py-3 text-sm">
                    {product.price.amount} {product.price.currency}
                  </td>
                  <td className="px-3 py-3 text-sm">{product.stockQuantity}</td>
                  <td className="px-3 py-3 text-sm">{product.rating}</td>
                  <td className="px-3 py-3 text-sm">
                    <ActionButton
                      color={isExpanded ? "red" : "default"}
                      className="w-25"
                      handleClick={() => toggleRow(product.id)}
                    >
                      {isExpanded ? "Close" : "Details"}
                    </ActionButton>
                  </td>
                </tr>

                {isExpanded && (
                  <tr className="bg-gray-50">
                    <td colSpan={9} className="px-6 py-6">
                      <div className="grid grid-cols-7 gap-10 w-full">
                        <div className="col-span-3 flex flex-col">
                          <h3 className="font-bold"># Description</h3>
                          <p className="mt-5">{product.longDescription}</p>
                          <div className="flex flex-wrap gap-2 mt-5">
                            {product.tags?.map((t) => (
                              <span
                                key={t}
                                className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-3 flex flex-col gap-2">
                          <h3 className="font-bold"># Weight/Dimensions</h3>
                          <div className="grid grid-cols-2 mt-5">
                            <p>Weight</p>
                            <p>{product.weightGrams} grams</p>
                          </div>
                          <div className="grid grid-cols-2">
                            <p>Width</p>
                            <p>{product.dimensions?.widthMm} mm</p>
                          </div>
                          <div className="grid grid-cols-2">
                            <p>Height</p>
                            <p>{product.dimensions?.heightMm} mm</p>
                          </div>
                          <div className="grid grid-cols-2">
                            <p>Depth</p>
                            <p>{product.dimensions?.depthMm} mm</p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                          <ActionButton
                            handleClick={() => alert("Not implemented!")}
                          >
                            Update
                          </ActionButton>
                          <ActionButton
                            handleClick={() => alert("Not implemented!")}
                          >
                            Add
                          </ActionButton>
                          <ActionButton
                            handleClick={() => alert("Not implemented!")}
                            color="red"
                          >
                            Delete
                          </ActionButton>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
