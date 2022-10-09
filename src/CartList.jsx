import React, { useState } from "react";
import { useEffect } from "react";
import { UpdatedCart } from "./App";
import Button from "./Button";
import CartRow from "./CartRow";
import CouponCode from "./CouponCode";
import Loading from "./Loading";
import { useContext } from "react";

function CartList({ cart, products }) {
  const [Localcart, setLocalcart] = useState(cart);
  const updateCart = useContext(UpdatedCart);
  useEffect(
    function () {
      setLocalcart(cart);
    },
    [cart]
  );

  function handleQuantitychange(newValue, productId) {
    const newLocalCart = { ...Localcart, [productId]: newValue };
    setLocalcart(newLocalCart);
  }

  function updatemyCart() {
    updateCart(Localcart);
  }
  return (
    <div className="border border-black ">
      <div className="flex px-6 py-2 space-x-5 text-lg font-bold bg-gray-100 ">
        <h2 className="ml-36 grow">Product</h2>
        <h2 className="w-20">Price</h2>
        <h2 className="w-28">Quantity</h2>
        <h2 className="w-20">Subtotal</h2>
      </div>
      <div>
        {products.map(function (item) {
          return (
            <CartRow
              key={item.id}
              quantity={Localcart[item.id]}
              Cart={cart}
              updateCart={updateCart}
              onQuantityChange={handleQuantitychange}
              {...item}
            />
          );
        })}
      </div>
      <div className="flex justify-between px-2 py-2 border-t border-t-black">
        <div className="flex ">
          <CouponCode />
          <Button>Apply Coupon</Button>
        </div>
        <div>
          <Button onClick={updatemyCart} type="submit">
            UPDATE CART
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
