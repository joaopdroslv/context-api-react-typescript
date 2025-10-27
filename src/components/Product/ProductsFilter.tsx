import React, { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { TagsInput } from "../ui/TagsInput";
import { MultiSelectInput } from "../ui/MultiSelectInput";
import { categories as availableCategories } from "../../database";
import { suppliers as availableSuppliers } from "../../database";
import { ActionButton } from "../ui/ActionButton";
import { RangeSliderInput } from "../ui/RangeSliderInput";

export const ProductsFilter: React.FC = () => {
  const { filters, updateFilters, clearFilters, refreshProducts } =
    useProducts();

  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <label htmlFor="keywords" className="block mb-2 text-sm font-medium">
            By name
          </label>
          <TagsInput
            tags={filters.keywords ?? []}
            setTags={(tags) => updateFilters("keywords", tags)}
            placeholder="Use one/many keywords..."
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium"
          >
            By category
          </label>
          <MultiSelectInput
            options={availableCategories}
            selected={filters.categories_ids ?? []}
            setSelected={(ids) =>
              updateFilters("categories_ids", ids as number[])
            }
            keyToSelect="id"
            keyToDisplay="name"
            placeholder="Select one/many categories..."
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="suppliers" className="block mb-2 text-sm font-medium">
            By supplier
          </label>
          <MultiSelectInput
            options={availableSuppliers}
            selected={filters.suppliers_ids ?? []}
            setSelected={(ids) =>
              updateFilters("suppliers_ids", ids as number[])
            }
            keyToSelect="id"
            keyToDisplay="name"
            placeholder="Select one/many suppliers..."
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-6">
        <div className="col-span-3">
          <label htmlFor="price" className="block mb-2 text-sm font-medium">
            By price
          </label>
          <RangeSliderInput
            min={0}
            max={9999}
            step={1}
            values={[filters.price_min ?? 0, filters.price_max ?? 9999]}
            setValues={(values) => {
              updateFilters("price_min", values[0]);
              updateFilters("price_max", values[1]);
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-6">
        <ActionButton color="red" handleClick={clearFilters} className="w-30">
          Clear
        </ActionButton>
        <ActionButton
          color="green"
          handleClick={() => refreshProducts(filters)}
          className="ms-4 w-30"
        >
          Apply
        </ActionButton>
      </div>
    </div>
  );
};
