import React, { useState } from "react";
import App from "./App";

function Option() {
  return (
    <div className="flex flex-wrap justify-center gap-2 font-sans text-base font-normal sm:justify-between ">
      <input
        placeholder="Search"
        className="px-2 py-2 mt-6 border border-solid bg-slate-100 border-slate-600"
        onChange={handlechange}
        value={query}
      />

      <select className="px-2 py-2 mt-6 bg-slate-100">
        <option>Default Sorting</option>
        <option>Sort by popularity</option>
        <option>Sort by avrage rating</option>
        <option>Sort by latest</option>
        <option>Sort by price:low to high</option>
        <option>Sort by price:high to low</option>
      </select>
    </div>
  );
}

export default Option;
