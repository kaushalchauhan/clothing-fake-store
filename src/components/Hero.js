import React from "react";
import WomanImg from "../img/hero-img.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-no-repeat bg-cover bg-top py-24 overflow-hidden bg-hero">
      <div className="container mx-auto xl:px-7 flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div>New Trend</div>
          </div>
          <h1 className="text-7xl leading-[1.1] font-light mb-4">
            SPRING SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary hover:border-blue-500"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img className="grayscale" src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
