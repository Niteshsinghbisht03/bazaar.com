import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="py-20">
        <div className="max-w-6xl px-8 py-8 mx-auto bg-white sm:px-20 sm:py-24">
          <h1 className="text-2xl font-semibold">Sign Up</h1>
          <form className="p-5 mt-6 border border-black">
            <div>
              <label htmlFor="name" className="text-base font-bold ">
                Name
              </label>

              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                className="w-[100%] h-12 p-2 my-2 border border-black border-1"
              ></input>
            </div>
            <div>
              <label htmlFor="email-address" className="text-base font-bold ">
                Email-address
              </label>

              <input
                required
                id="email-address"
                type="email"
                autoComplete="email"
                className="w-[100%] h-12 p-2 my-2 border border-black border-1"
              ></input>
            </div>
            <div>
              <label htmlFor="mnumber" className="text-base font-bold ">
                User Name
              </label>

              <input
                required
                id="mnumber"
                type="number"
                autoComplete="mnumber"
                className="w-[100%] h-12 p-2 my-2 border border-black border-1"
              ></input>
            </div>

            <div>
              <label htmlFor="password" className="text-base font-bold">
                Password
              </label>

              <input
                required
                id="password"
                type="password"
                autoComplete="Password"
                className="w-[100%] h-12 p-2 my-2 border border-black border-1"
              ></input>
            </div>
            <div>
              <label htmlFor="Cpassword" className="text-base font-bold ">
                Confirm Password
              </label>

              <input
                id="Cpassword"
                type="password"
                autoComplete="Cpassword"
                required
                className="w-[100%] h-12 p-2 my-2 border border-black border-1"
              ></input>
            </div>

            <button
              type="submit"
              className="px-10 py-2.5 font-bold text-white rounded-md text-md bg-rose-500"
            >
              Sign Up
            </button>
            <Link
              to={"/Product/Login"}
              className="px-10 py-2.5 ml-4 font-bold text-white rounded-md text-md bg-rose-500"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
