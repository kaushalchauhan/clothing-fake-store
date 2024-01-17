import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-green-400 py-4 shadow-md" : "bg-green-300 py-3"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container  mx-auto flex items-center justify-between h-full xl:px-5">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={LOGO_URL} alt="" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="p-2">
            <BsBag className="text-2xl" />{" "}
            <div className="bg-red-400 absolute -right-0 top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {cart.length}
            </div>
            {/* <sup className="text-xl">{itemAmount}</sup> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
