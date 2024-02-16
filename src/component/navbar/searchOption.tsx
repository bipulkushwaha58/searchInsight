import React from "react";

export default function SearchOption({ setSearchType }) {
  const options = ["Keyword", "Vector", "Text to Image"];
  const handleChange = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <div class="bg-slate-900 p-2 rounded-md outline-none">
      <select
        onChange={handleChange}
        name="searchOption"
        id="searchOption"
        class="bg-slate-900 text-gray-400 outline-none"
      >
        {options.map((item) => (
          <option
            value={item == "Text to Image" ? "textToImage" : item.toLowerCase()}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
