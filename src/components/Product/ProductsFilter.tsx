import React, { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { TagsInput } from "../ui/TagsInput";
import { MultiSelectInput } from "../ui/MultiSelectInput";
import { categories as availableCategories } from "../../database";

export const ProductsFilter: React.FC = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [categories, setCategories] = useState<number[]>([]);
  const { updateFilters } = useProducts();

  useEffect(() => {
    updateFilters("keywords", keywords);
    updateFilters("categoriesIds", categories);
  }, [keywords, categories]);

  return (
    <div className="w-full grid grid-cols-6 gap-4">
      <div className="col-span-2">
        <label htmlFor="keywords" className="block mb-2 text-sm font-medium">
          By name
        </label>
        <TagsInput
          tags={keywords}
          setTags={setKeywords}
          placeholder="Use one/many keywords..."
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="categories" className="block mb-2 text-sm font-medium">
          By category
        </label>
        <MultiSelectInput
          options={availableCategories}
          selected={categories}
          setSelected={setCategories}
          keyToSelect="id"
          keyToDisplay="name"
          placeholder="Select one/many categories..."
        />
      </div>
    </div>
  );
};
