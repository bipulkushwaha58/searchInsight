import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
export default function Searchbar({ setQuery, setApiCall }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      setApiCall(true);
    }
  };
  return (
    <div class="relative">
      <input
        type="search"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Type your query"
        class="bg-slate-700 rounded p-2 md:min-w-[600px] outline-none "
      />
      <button
        onClick={() => setApiCall(true)}
        class="absolute right-1 top-1 bg-slate-800 rounded-full p-2 shadow hover:shadow-lg"
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
}
