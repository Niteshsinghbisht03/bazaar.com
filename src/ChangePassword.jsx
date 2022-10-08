import React from "react";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <>
      <div className="py-20">
        <div className="max-w-6xl px-8 py-8 mx-auto bg-white sm:px-24 sm:py-24">
          <h1 className="text-lg ">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </h1>
          <form className="">
            <div className="flex flex-col mt-6">
              <label htmlFor="email-address" className="text-base font-bold ">
                Username or email-address
              </label>

              <input
                id="email-address"
                type="email"
                autoComplete="email"
                className="h-12 p-2 my-2 border border-black w-[100%] border-1"
                required
              ></input>
            </div>
            <button
              type="submit"
              className="px-10 py-2.5  font-bold text-white rounded-md text-md bg-rose-500"
            >
              RESET PASSWORD
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
