import React, { useState, useRef, useEffect } from "react";

interface MultiSelectInputProps<T, U extends string | number> {
  options: T[];
  selected: U[];
  setSelected: React.Dispatch<React.SetStateAction<U[]>>;
  toSelect: keyof T;
  toDisplay: keyof T;
  placeholder?: string;
}

export function MultiSelectInput<T, U extends string | number>({
  options,
  selected,
  setSelected,
  toSelect,
  toDisplay,
  placeholder = "Choose a option...",
}: MultiSelectInputProps<T, U>) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const toggleSelect = (value: U) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    String(opt[toDisplay]).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div ref={ref} className="relative w-full">
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-md p-2 cursor-text"
      >
        {selected.length > 0 ? (
          selected.map((val) => {
            const item = options.find((o) => o[toSelect] === val);
            return (
              <div
                key={val}
                className="flex items-center bg-blue-200 text-blue-800 px-2 rounded-md text-sm"
              >
                {item ? String(item[toDisplay]) : val}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelect(val);
                  }}
                  className="ml-2 text-blue-600 hover:text-blue-900 cursor-pointer text-xl"
                >
                  ×
                </button>
              </div>
            );
          })
        ) : (
          <span className="text-gray-400 text-sm">{placeholder}</span>
        )}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder=""
          className="flex-1 border-none outline-none text-sm p-1 bg-transparent"
        />
      </div>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, i) => {
              const val = opt[toSelect] as U;
              const name = String(opt[toDisplay]);
              const isSelected = selected.includes(val);
              return (
                <div
                  key={i}
                  onClick={() => toggleSelect(val)}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-blue-100 ${
                    isSelected ? "bg-blue-200" : ""
                  }`}
                  // className="px-3 py-2 text-sm cursor-pointer hover:bg-blue-100"
                >
                  {name}
                </div>
              );
            })
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No result found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
