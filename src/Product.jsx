import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="max-w-xs p-2 rounded-md shadow-2xl">
      <div className="w-full aspect-square">
        <img src={thumbnail} className="object-cover w-full h-full" />
      </div>
      <div>
        <h2 className="text-xl font-normal text-gray-400">{category}</h2>
        <h3 className="text-2xl font-semibold text-gray-600">{title}</h3>
        <span className="text-yellow-500 fa fa-star-o" />
        <span className="text-yellow-500 fa fa-star-o" />
        <span className="text-yellow-500 fa fa-star-o" />
        <span className="text-yellow-500 fa fa-star-o" />
        <span className="text-yellow-500 fa fa-star-o" />
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-600">${price}</p>
          <Link
            to={"/Product/" + id}
            className="px-2 py-1 text-white bg-red-500  hover:bg-red-700 rounded-2xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
