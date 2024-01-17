import React from "react";

const ProductCardShimmer = () => {
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative p-3 flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center bg-gray-300 animate-pulse rounded"></div>

        {/* Shimmer effect for other details */}
      </div>
      <div className="text-gray-300 mb-1 bg-gray-300 h-3 animate-pulse w-3/5 rounded"></div>
      <div className="text-gray-700 mb-1 bg-gray-300 h-4 animate-pulse w-5/5 rounded"></div>
      <div className="text-gray-700 mb-1 bg-gray-300 h-4 animate-pulse w-5/5 rounded"></div>
      <div className="text-gray-300 mb-1 bg-gray-300 h-4 animate-pulse w-1/5 rounded"></div>
    </div>
  );
};

export default ProductCardShimmer;
