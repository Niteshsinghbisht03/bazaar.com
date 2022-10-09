import React, { useState } from "react";
import { useEffect } from "react";
import { CartValue } from "./CartList";
import { useContext } from "react";

function UpdateCart() {
  const cartdata = useContext(CartValue);
  const [localcart, setLocalcart] = useState(cartdata);

  useEffect(
    function () {
      setLocalcart(cartdata);
    },
    [cartdata]
  );

  function updateCart() {}

  return (
    <div>
      <button
        onClick={updateCart}
        type="submit"
        className="px-12 py-2 text-xl bg-orange-400 rounded-md"
      >
        UPDATE CART
      </button>
    </div>
  );
}

export default UpdateCart;
