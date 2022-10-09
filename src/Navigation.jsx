import React from "react";
import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Mobilemenu from "./Mobilemenu";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation({ productCount }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="px-4 py-4 bg-white">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <img
            src="https://th.bing.com/th/id/OIP.U-S8SR9DmfcIM_40pgeLigHaCp?pid=ImgDet&rs=1"
            alt="logo"
            className="w-48"
          />

          <div className="flex flex-row items-center">
            <Mobilemenu props={"hidden md:flex"} />
            <div className="relative mb-4">
              <Link to={"/Cart/"}>
                <BsFillBagFill className="text-5xl text-orange-600 " />
                <span className="absolute text-lg font-bold text-white bottom-1 left-4">
                  {productCount}
                </span>
              </Link>
            </div>
            <div className="">
              <GiHamburgerMenu
                className="mr-2 text-3xl text-orange-600 md:hidden"
                onClick={handleMenuClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div>{isMenuOpen && <Mobilemenu className="md:hidden" />}</div>
    </>
  );
}

export default Navigation;
