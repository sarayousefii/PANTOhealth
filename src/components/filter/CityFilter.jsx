import { useState, useEffect } from "react";

export default function CityFilter({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleClear = () => {
    setInputValue("");
    setTimeout(() => onChange(""), 100);
  };

  return (
    <div
      className={`flex w-full mb-4 border rounded-md transition-colors ${
        focused ? "border-blue-400 ring-2 ring-blue-300" : "border-gray-300"
      }`}
    >
      <input
        type="text"
        placeholder="Filter by city..."
        className="flex-1 p-2 rounded-l-md focus:outline-none"
        value={inputValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="bg-gray-200 hover:bg-gray-300 px-3 rounded-r-md flex items-center justify-center transition-colors"
          aria-label="Clear filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
