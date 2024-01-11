import React, { useContext } from "react";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
