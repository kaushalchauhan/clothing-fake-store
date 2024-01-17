import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:mx-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({cart.length})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {cart.length > 0 ? (
        <div>
          <div className="flex flex-col gap-y-2 h-[60vh]  overflow-y-auto overflow-x-hidden border-b">
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
          <div className="flex flex-col gap-y-3 py-4 mt-4">
            <div className="flex w-full justify-between items-center">
              <div className="uppercase font-semibold">
                <span className="mr-2">Total:</span>${" "}
                {parseFloat(total).toFixed(2)}
              </div>
              <div
                onClick={() => {
                  clearCart();
                }}
                className="cursor-pointer py-4 bg-[#5d3131] hover:bg-orange-600 text-white w-12 h-12 flex justify-center items-center text-xl"
              >
                <FiTrash2 title="Clear Cart" />
              </div>
            </div>
            <Link
              to={"/"}
              className="bg-gray-200 hover:bg-gray-400 flex p-4 items-center text-primary w-full justify-center font-medium"
            >
              View Cart
            </Link>
            <Link
              to={"/"}
              className="bg-[#000000c7] hover:bg-primary flex p-4 items-center text-white w-full justify-center font-medium"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[480px] lg:h-[580px] overflow-y-auto overflow-x-hidden border-b flex-col">
          <h3 className="font-bold text-3xl">Cart is empty</h3>
          <Link to={"/"}>
            <button
              onClick={handleClose}
              className="border-b py-2 px-6 bg-green-300 rounded-md my-3 hover:bg-green-600"
            >
              Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
