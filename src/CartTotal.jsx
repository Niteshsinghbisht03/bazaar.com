import React from "react";

function CartTotal() {
  return (
    <div className="flex justify-end">
      <div className="mt-8 border border-black ">
        <div>
          <h2 className="px-4 py-2 text-xl font-bold bg-gray-100 border border-b-black">
            Cart Totals
          </h2>
        </div>
        <div className="px-4 py-6 font-bold ">
          <div className="grid grid-cols-2 px-2 text-lg border-b-2 border-b-black">
            <h3>Subtotal</h3>
            <p>$199.00</p>
          </div>
          <div className="grid grid-cols-2 px-2 py-2 text-lg border-b-2 border-b-black">
            <h3>Subtotal</h3>
            <p>$199.00</p>
          </div>
          <button
            type="submit"
            className="px-24 py-2 mt-4 text-lg text-white bg-orange-600 rounded-md"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
