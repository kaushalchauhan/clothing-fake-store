import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  // destructure product
  const { description, image, title, price, rating } = product;
  console.log(product);

  // // if product is not found
  // if (!product) {
  //   return (
  //     <section className="h-screen justify-center items-center">
  //       loading...
  //     </section>
  //   );
  // }
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container xl:px-5 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg-mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            {/* <div className="flex justify-between items-center mb-6 text-xl max-w-[450px] mx-auto">
              <div className=" text-blue-400 font-medium ">$ {price}</div>
              <div className=" text-blue-400 font-medium  items-start">
                {rating.rate} ⭐️{" "}
                <span>({rating.count > 500 ? "500+" : rating.count})</span>
              </div>
            </div> */}
            <p className="mb-8">{description}</p>
            <button
              onClick={() => {
                addToCart(product, product.id);
              }}
              className="bg-green-600 py-4 px-8 text-white hover:bg-green-700 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
