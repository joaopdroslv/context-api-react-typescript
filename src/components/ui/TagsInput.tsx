import React, { useState } from "react";
import type { KeyboardEvent } from "react";

interface TagsInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  placeholder?: string;
}

export const TagsInput: React.FC<TagsInputProps> = ({
  tags,
  setTags,
  placeholder = "Type a keyword and press enter...",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();

      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }

      setInputValue("");
    }

    if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border border-gray-300 rounded-md p-1 shadow-xs">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="ml-1 text-blue-600 hover:text-blue-900"
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 border-none outline-none text-sm p-1 bg-transparent text-gray-400"
      />
    </div>
  );
};
