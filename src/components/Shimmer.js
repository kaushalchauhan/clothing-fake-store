import React from "react";
import ProductCardShimmer from "./ProductCardShimmer";

const Shimmer = () => {
  return (
    <div>
      {/* Header Shimmer */}
      <div className="bg-gray-300 py-3">
        <div className="container mx-auto flex items-center justify-between h-full xl:px-5">
          <div className="bg-gray-400 w-[40px] h-[40px] animate-pulse rounded"></div>
          <div className="cursor-pointer flex relative">
            <div className="p-2">
              <div className="bg-gray-400 text-gray-600 text-2xl w-[24px] h-[24px] animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Shimmer */}

      <section className="py-16">
        <div className="container mx-auto xl:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
            <ProductCardShimmer />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shimmer;
