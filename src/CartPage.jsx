import React, { useState } from "react";
import { useEffect } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

import Loading from "./Loading";
import { getdata } from "./Api";

function CartPage({ Cart, totalCount }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const productId = Object.keys(Cart);
  useEffect(
    function () {
      const myproductpromise = productId.map(function (id) {
        return getdata(id);
      });

      Promise.all(myproductpromise).then(function (products) {
        setProducts(products);
        setLoading(false);
      });
    },
    [Cart]
  );

  if (loading) {
    return <Loading />;
  }

  console.log("Cartpage ka ", Cart);
  return (
    <div className="px-4 py-6">
      <div className="px-8 py-24 bg-white ">
        <div className="max-w-6xl mx-auto">
          <CartList cart={Cart} products={products} />
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
