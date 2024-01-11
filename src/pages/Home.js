import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import product component
import Product from "../components/Product";
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
  console.log(filteredProducts, "fff");

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
