import React from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function CartPage() {
  return (
    <div className="px-4 py-6">
      <div className="px-8 py-24 bg-white ">
        <div className="max-w-6xl mx-auto">
          <CartList />
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
