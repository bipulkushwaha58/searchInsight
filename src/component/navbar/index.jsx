import React from "react";
import Searchbar from "./searchbar";
import SearchOption from "./searchOption";

export default function Navbar({ setQuery, setSearchType, setApiCall }) {
  return (
    <div class="bg-gray-800 flex items-center justify-center p-3 font-normal text-white">
      <div class="p-2">
        <SearchOption setSearchType={setSearchType} />
      </div>
      <Searchbar setQuery={setQuery} setApiCall={setApiCall} />
    </div>
  );
}
