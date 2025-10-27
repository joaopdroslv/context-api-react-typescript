import React, { useState, useRef, useEffect } from "react";
import type { Dispatch, KeyboardEvent, SetStateAction } from "react";

interface MultiSelectInputProps<T, U extends string | number> {
  options: T[];
  selected: U[];
  setSelected: Dispatch<SetStateAction<U[]>>;
  keyToSelect: keyof T;
  keyToDisplay: keyof T;
  placeholder?: string;
}

export function MultiSelectInput<T, U extends string | number>({
  options,
  selected,
  setSelected,
  keyToSelect,
  keyToDisplay,
  placeholder = "Choose a option...",
}: MultiSelectInputProps<T, U>) {
  const [listOpen, setListOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const toggleSelect = (value: U) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
    setInputValue("");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setListOpen(false);
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue === "" && selected.length > 0) {
      setSelected(selected.slice(0, selected.length - 1));
      setInputValue("");
    }
  };

  const filteredOptions = options.filter((opt) =>
    String(opt[keyToDisplay]).toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div ref={ref} className="relative w-full">
      <div
        onClick={() => setListOpen(!listOpen)}
        className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-md p-1 cursor-text"
      >
        {selected.map((val) => {
          const item = options.find((o) => o[keyToSelect] === val);
          return (
            <div
              key={val}
              className="flex items-center bg-blue-200 text-blue-800 px-2 rounded-md text-sm"
            >
              {item ? String(item[keyToDisplay]) : val}
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
        })}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setListOpen(true);
            setInputValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 border-none outline-none text-sm p-1 bg-transparen text-gray-400"
        />
      </div>

      {listOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, i) => {
              const val = opt[keyToSelect] as U;
              const name = String(opt[keyToDisplay]);
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
            <div className="px-3 py-2 text-sm text-gray-400">
              No result found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
