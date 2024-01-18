import React, { useContext, useState } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import product component
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get only men's & women's clothing
  const filteredProducts = products.filter((items) => {
    return (
      items.category === "men's clothing" ||
      items.category === "women's clothing"
    );
  });

  const [selectedCategory, setSelectedCategory] = useState("men's clothing");

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto xl:px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="flex justify-center items-center px-4">
          <h1 className="text-center text-3xl leading-[1.1] font-light mb-4 capitalize lg:text-7xl">
            {selectedCategory} Products
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 my-4">
          {Array.from(new Set(products.map((product) => product.category)))
            .slice(0, 5)
            .map((category) => (
              <button
                key={category}
                className={`rounded-md px-4 py-2 capitalize
          ${
            selectedCategory === category
              ? "bg-green-500 text-white"
              : "bg-orange-200 text-black"
          }
          hover:bg-opacity-75 transition-all`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
        </div>

        <div className="container mx-auto xl:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products
              .filter((product) =>
                selectedCategory ? product.category === selectedCategory : true
              )
              .map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  filterCategory={selectedCategory}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
