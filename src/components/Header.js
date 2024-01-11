import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <header className="bg-green-200 flex justify-between">
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="p-2">
          <BsBag className="text-2xl" />{" "}
          <sup className="text-xl">{cart.length}</sup>
        </div>
      </div>
    </header>
  );
};

export default Header;
