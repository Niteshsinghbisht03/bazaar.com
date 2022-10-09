import React, { useState } from "react";
import productimage from "./mug-white-4.jpeg";
import { IoIosCloseCircleOutline } from "react-icons/io";

import Loading from "./Loading";

function CartRow({
  thumbnail,
  title,
  price,
  quantity,
  id,
  Cart,
  updateCart,
  onQuantityChange,
}) {
  const [loading, setLoading] = useState(false);

  console.log("function", updateCart);

  function handlechange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");
    onQuantityChange(newValue, productId);
  }

  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("productid");

    const cartdata = { ...Cart };

    delete cartdata[productId];

    updateCart(cartdata);
    setLoading(true);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-row items-center px-4 py-2 space-x-4 text-left bg-white border-t border-t-black">
      <span className="w-10 h-10" productid={id} onClick={handleRemove}>
        <IoIosCloseCircleOutline className="text-4xl text-gray-200" />
      </span>
      <div className="w-20 h-20">
        <img src={thumbnail} className="object-cover w-full h-full" />
      </div>
      <h2 className="text-2xl font-bold text-orange-600 grow">{title}</h2>
      <p className="w-20 font-bold">${price}</p>
      <div className="w-32">
        <input
          productid={id}
          onChange={handlechange}
          type="number"
          value={quantity}
          className="w-12 p-1 mx-2 border border-black rounded-md "
        />
      </div>
      <p className="w-20 font-bold ">{quantity * price}</p>
    </div>
  );
}

export default CartRow;
