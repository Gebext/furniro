import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import image1 from "../../../public/assets/all-image/Asgaard Sofa 1";
import image2 from "../../../public/assets/all-image/Asgaard Sofa 2";
import image3 from "../../../public/assets/all-image/Asgaard Sofa 3";
import image4 from "../../../public/assets/all-image/Asgaard Sofa 4";

const Products = () => {
  return (
    <main>
      {/* Section 1 : Page Address */}
      <section>
        <div className="h-[100px] bg-primary5 flex items-center gap-[21px] px-[99px]">
          <p className="text-textColor4">Home</p>
          <p>
            <MdKeyboardArrowRight className="font-bold text-2xl" />
          </p>
          <p className="text-textColor4">Shop</p>
          <p>
            <MdKeyboardArrowRight className="text-2xl font-bold" />
          </p>
          <div className="border-l-[2.5px] border-textColor4 pl-[21px] py-[5px]">
            <p>Asgaard Sofa</p>
          </div>
        </div>
      </section>

      {/* Section 2 : Product Image (Left side) & Product Desc + Add to cart button (Right Side)*/}
      <section>
        <div className="grid grid-cols-2 ">
          {/* Left Side : Product Image*/}
          <div className="bg-red-200">
            <div className="">
              <Image src={image1} alt="product image" />
              <Image src={image2} alt="product image" />
              <Image src={image3} alt="product image" />
              <Image src={image4} alt="product image" />
            </div>
            <div>
              <Image src={image1} alt="product image" />
            </div>
          </div>

          {/* Right Side : Desc and Add to cart button*/}
          <div className="bg-yellow-200">
            <h1>kanan</h1>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Products;
