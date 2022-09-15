import React, { useState, useRef, useEffect } from 'react';

import Nextpage from './Nextpage';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import { getAlldata } from './Api';
import Loading from './Loading';

function ProductListPage() {
  const [productlist, setproductlist] = useState([]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('Default');
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    const pro = getAlldata();

    pro.then(function(products) {
      setproductlist(products);

      setLoading(false);
    });
  }, []);

  const data = productlist.filter(function(item) {
    const lowercaseTitle = item.title.toLowerCase();
    const lowercaseQuery = query.toLowerCase();
    return lowercaseTitle.indexOf(lowercaseQuery) != -1;
  });

  if (sort == 'LowtoHigh') {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == 'HightoLow') {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  } else if (sort == 'Name') {
    data.sort(function(x, y) {
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
      <div className="bg-white max-w-6xl mx-auto px-9 py-12 my-16 ">
        <div className="  px-2 sm:flex sm:justify-between font-normal font-sans text-base  ">
          <input
            placeholder="Search"
            className="bg-slate-100 mt-6 px-4 sm:w-2/3 py-2 border border-slate-600 border-solid"
            onChange={handlechange}
            value={query}
          />

          <select
            className="bg-slate-100 mt-6 px-2 py-2"
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
