import Hero from "@/components/ui/Hero";
import CategoryHome from "@/components/ui/CategoryHome";
import productData from "../../public/assets/data/products";
import Card from "@/components/cards/Card";
import Carousel from "@/components/shared/Carousel";
import Image from "next/image";
import Banner from "../../public/assets/all-image/setup-banner.png";

export default function Home() {
  const productDataSubset = productData.slice(0, 8);

  return (
    <main>
      <Hero />
      <CategoryHome />
      <div className="w-10/12 mx-auto mt-[56px]">
        <h1 className="font-bold text-[40px] text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {productDataSubset.map((product) => (
            <Card
              key={product.id}
              img={product.img}
              name={product.name}
              shortDescription={product.shortDescription}
              price={product.price}
              isDiscount={product.isDiscount}
              discount={product.discount}
            />
          ))}
        </div>
        <div className="w-[245px] h-[48px] mx-auto mt-8">
          <button className="border border-primary2 font-semibold text-[16px] text-primary2 px-[74px] py-[12px]">
            Show More
          </button>
        </div>
      </div>

      <div className="mt-[70px] bg-primary4 w-full h-[500px] mb-8 flex justify-between items-center px-32">
        <div className="px-8">
          <h1 className="font-bold text-[40px] w-8/12">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-medium text-[16px] text-textColor2">
            Our designer already made a lot of beautiful prototype rooms that
            inspire you
          </p>
          <div>
            <button className="bg-primary2 text-white px-[36px] py-[12px]">
              Explore More
            </button>
          </div>
        </div>
        <div>
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
