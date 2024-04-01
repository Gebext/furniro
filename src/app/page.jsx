"use client";

import Hero from "../components/ui/Hero";
import CategoryHome from "../components/ui/CategoryHome";
import productData from "../../public/assets/data/products";
import Card from "../components/cards/Card";
import Carousel from "../components/shared/Carousel";
import Image from "next/image";
import Banner from "../../public/assets/all-image/setup-banner.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const productDataSubset = productData.slice(0, 8);
  const router = useRouter();

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const find = cart.find((item) => item.name === product.name);
    if (!find) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const handleOuterDivClick = (event, product) => {
    event.preventDefault();
    setSelectedProduct(product.name);
    router.push(`/products/${product.name}`);
  };

  return (
    <main>
      <Hero />
      <CategoryHome />
      <div className="lg:w-10/12 w-full mx-auto mt-[56px]">
        <h1 className="font-bold text-[40px] text-center">Our Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 gap-1 mt-8 lg:w-full w-11/12 mx-auto">
          {productDataSubset.map((product) => (
            <Card
              key={product.id}
              img={product.img}
              name={product.name}
              shortDescription={product.shortDescription}
              price={product.price}
              isDiscount={product.isDiscount}
              discount={product.discount}
              link={`/products/${product.name}`}
              handleOuterDivClick={(event) =>
                handleOuterDivClick(event, product)
              }
              handleAddToCart={(event) => handleAddToCart(event, product)}
            />
          ))}
        </div>
        <div className="w-[245px] h-[48px] mx-auto mt-8">
          <button
            className="border border-primary2 font-semibold text-[16px] text-primary2 px-[74px] py-[12px] "
            onClick={() => router.push("/shop")}
          >
            Show More
          </button>
        </div>
      </div>

      <div className="mt-[70px] bg-primary4 w-full lg:h-[500px] h-auto mb-8 flex justify-between items-center lg:px-32 px-4 md:flex-row flex-col">
        <div className="px-8 lg:py-0 py-4 lg:w-auto w-auto md:w-1/2">
          <h1 className="font-bold lg:text-[40px] text-2xl lg:w-8/12 w-10/12">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-medium lg:text-[16px] text-[14px] text-textColor2">
            Our designer already made a lot of beautiful prototype rooms that
            inspire you
          </p>
          <div>
            <button className="bg-primary2 text-white px-[36px] py-[12px] lg:mt-0 mt-4 hover:bg-gray-200 hover:text-gray-800 hover:font-bold">
              Explore More
            </button>
          </div>
        </div>
        <div className="lg:my-0 my-4">
          <Carousel />
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-[20px] text-center">
          Share your setup with
        </h1>
        <h1 className="text-[40px] font-bold text-center">#FurniroFurniture</h1>
        <Image src={Banner} alt="image" className="w-screen mb-16" />
      </div>
    </main>
  );
}
