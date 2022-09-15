import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navigation({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <img
          src="https://th.bing.com/th/id/OIP.U-S8SR9DmfcIM_40pgeLigHaCp?pid=ImgDet&rs=1"
          alt=" logo"
          className="w-48"
        />
        <div className="flex flex-col items-center">
          <Link to={"/Cart/"}>
            <BsFillBagFill className="text-4xl text-orange-600" />
            <span>{productCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
