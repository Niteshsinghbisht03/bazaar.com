import React from "react";
import ApplyCoupon from "./ApplyCoupon";
import CartRow from "./CartRow";
import CartTotal from "./CartTotal";
import CouponCode from "./CouponCode";
import UpdateCart from "./UpdateCart";

function CartList() {
  return (
    <div className="border border-black ">
      <div className="grid items-center content-center grid-cols-8 gap-4 py-4 text-lg font-bold bg-gray-100 justify-items-center">
        <h2 className="col-span-5">Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
      </div>
      <CartRow />
      <CartRow />
      <div className="flex justify-between px-2 py-2 border-t border-t-black">
        <div className="flex ">
          <CouponCode />
          <ApplyCoupon />
        </div>
        <UpdateCart />
      </div>
    </div>
  );
}

export default CartList;
