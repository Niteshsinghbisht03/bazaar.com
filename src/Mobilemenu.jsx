import React from "react";
import { Link } from "react-router-dom";

function Mobilemenu({ props }) {
  console.log(props);
  return (
    <>
      <div
        className={
          "flex flex-col px-4 py-4 bg-white md:flex-row text-md gap-y-2 gap-x-10" +
          " " +
          props
        }
      >
        <Link className="hover:text-orange-600">HOME</Link>
        <Link className="hover:text-orange-600">ALL PRODUCTS</Link>

        <Link className="hover:text-orange-600">ABOUT</Link>

        <Link className="hover:text-orange-600">CONTACT</Link>
        <Link to={"/Product/Login"} className="hover:text-orange-600">
          ACCOUNT
        </Link>
      </div>
    </>
  );
}

export default Mobilemenu;
