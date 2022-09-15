import React from 'react';
import { Link } from 'react-router-dom';

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="p-2 rounded-md max-w-xs shadow-2xl">
      <div className="w-full aspect-square">
        <img src={thumbnail} className="h-full w-full object-cover" />
      </div>
      <div>
        <h2 className="font-normal text-xl text-gray-400">{category}</h2>
        <h3 className="font-semibold text-2xl text-gray-600">{title}</h3>
        <span className="fa fa-star-o text-yellow-500" />
        <span className="fa fa-star-o text-yellow-500" />
        <span className="fa fa-star-o text-yellow-500" />
        <span className="fa fa-star-o text-yellow-500" />
        <span className="fa fa-star-o text-yellow-500" />
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-lg font-bold">${price}</p>
          <Link
            to={'/Product/' + id}
            className=" px-2 py-1 bg-red-500 hover:bg-red-700 text-white rounded-2xl"
          >
            View Details
					</Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
