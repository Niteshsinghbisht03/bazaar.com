import React, { useState, useRef, useEffect } from "react";

import Nextpage from "./Nextpage";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching";
import { getAlldata } from "./Api";
import Loading from "./Loading";

function ProductListPage() {
  const [productlist, setproductlist] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Default");
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const pro = getAlldata();

    pro.then(function (products) {
      setproductlist(products);

      setLoading(false);
    });
  }, []);

  const data = productlist.filter(function (item) {
    const lowercaseTitle = item.title.toLowerCase();
    const lowercaseQuery = query.toLowerCase();
    return lowercaseTitle.indexOf(lowercaseQuery) != -1;
  });

  if (sort == "LowtoHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "HightoLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "Name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handlechange(event) {
    setQuery(event.target.value);
  }

  function SortChange() {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-6xl py-12 mx-auto my-16 bg-white px-9 ">
        <div className="px-2 font-sans text-base font-normal  sm:flex sm:justify-between">
          <input
            placeholder="Search"
            className="px-4 py-2 mt-6 border border-solid bg-slate-100 sm:w-2/3 border-slate-600"
            onChange={handlechange}
            value={query}
          />

          <select
            className="px-2 py-2 mt-6 bg-slate-100"
            onChange={SortChange}
            value={sort}
          >
            <option value="Default">Default Sorting</option>
            <option value="Name">Sort by Name(A to Z)</option>
            <option value="LowtoHigh">Sort by Price : Low to High</option>
            <option value="HightoLow">Sort by Price : High to Low</option>
            {/* <option>Sort by avrage rating</option>*/}
            {/*<option>Sort by popularity</option>*/}
          </select>
        </div>
        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && (
          <NoMatching>No Matching Product Found!!</NoMatching>
        )}
        {data.length <= 1 && <NoMatching>Also try other Products!!</NoMatching>}

        <Nextpage />
      </div>
    </>
  );
}

export default ProductListPage;
