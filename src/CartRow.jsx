import React from "react";
import productimage from "./mug-white-4.jpeg";
import { IoIosCloseCircleOutline } from "react-icons/io";
function CartRow() {
  return (
    <div className="flex grid items-center max-w-6xl grid-cols-9 mx-auto bg-white border-t border-t-black">
      <div className="justify-self-center">
        <IoIosCloseCircleOutline className="text-4xl text-gray-200" />
      </div>
      <img src={productimage} className="w-40 p-1" />
      <h2 className="col-span-4 pl-10 text-2xl font-bold text-orange-600 ">
        Product Name
      </h2>
      <p className="pl-4 font-bold text-left">$15.00</p>
      <input
        type="number"
        value="2"
        className="w-12 pl-4 border border-black justify-self-center"
      />
      <p className="font-bold text-left justify-self-center">$30.00</p>
    </div>
  );
}

export default CartRow;
