import React, { useState } from 'react';
import App from './App';

function Option() {


 



  return (
    <div className="flex flex-wrap justify-center sm:justify-between font-normal font-sans text-base gap-2 ">
 <input placeholder="Search" className="bg-slate-100 mt-6 px-2 py-2 border border-slate-600 border-solid" onChange={handlechange} value={query} />

     
      <select className="bg-slate-100 mt-6 px-2 py-2">
        <option>Default Sorting</option>
        <option>Sort by popularity</option>
        <option>Sort by avrage rating</option>
        <option>Sort by latest</option>
        <option>Sort by price:low to high</option>
        <option>Sort by price:high to low</option>
      </select>
    </div>);
}

export default Option;