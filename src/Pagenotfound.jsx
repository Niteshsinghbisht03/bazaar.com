import React from "react";
import sadimage from "./pngegg.png";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <div className="justify-center p-10 sm:flex ">
      <div className="w-[40vw] aspect-square text-center">
        <img
          src={sadimage}
          alt="error"
          className="object-cover w-full h-full animate-bounce"
        />
        <h1 className="-mt-10 text-4xl font-bold text-orange-600">
          Page Not Found!
        </h1>
      </div>
      <div className="flex flex-col sm:justify-center gap-2 sm:gap-10 w-[40vw] text-center">
        <div>
          <h2 className="sm:text-[150px]  text-3xl animate-pulse font-bold">
            404
          </h2>
        </div>
        <div>
          <p className="text-3xl">Aha! You See! You Can Be Wrong! </p>
          <p className="text-2xl">(or it could be us )....</p>
        </div>
        <div>
          <p className="text-3xl">....either way , you should probably</p>
          <p className="text-3xl text-slate-800">
            go back to the{" "}
            <Link
              to="/"
              className="px-2 text-2xl bg-orange-600 border-2 border-black border-solid rounded-full hover:text-white"
            >
              HOME
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pagenotfound;
