"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import image from "../../../public/assets/all-image/Asgaard Sofa.png";
import image1 from "../../../public/assets/all-image/Asgaard Sofa 1.png";
import image2 from "../../../public/assets/all-image/Asgaard Sofa 2.png";
import image3 from "../../../public/assets/all-image/Asgaard Sofa 3.png";
import image4 from "../../../public/assets/all-image/Asgaard Sofa 4.png";
import reviewStar from "../../../public/assets/all-image/Group 88.png";
import { useEffect, useState } from "react";
import productData from "../../../public/assets/data/products";

const Products = () => {
  const [isSize, setIsSize] = useState("L");
  const [isColor, setIsColor] = useState("");
  const [amount, setAmount] = useState(1);
  const size = ["L", "XL", "XS"];
  const color = ["#816DFA", "#000000", "#B88E2F"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const find = productData.findIndex((val) => val.name == "Asgaard Sofa");
    setData([productData[find]]);
  }, []);
  console.log({ data });
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
      <section className="pt-[35px] px-[100px]">
        <div className="grid grid-cols-2 ">
          {/* Left Side : Product Image*/}
          <div className="flex">
            <div className="flex flex-col gap-[32px]">
              <div className="rounded-md w-[76px] h-[80px] bg-primary5 hover:outline hover:outline-2 outline-primary2">
                <Image
                  src={image1}
                  alt="Product Image"
                  className="min-w-[76px]"
                />
              </div>
              <Image src={image2} alt="Product Image" />
              <Image src={image3} alt="Product Image" />
              <Image src={image4} alt="Product Image" />
            </div>
            <div className="w-[481px] h-[500px] bg- rounded-md">
              <Image src={image} alt="Product Image" className="min-w-full" />
            </div>
            <div></div>
          </div>

          {/* Right Side : Desc and Add to cart button*/}
          <div className="">
            {/* Product Title, Price and description */}
            <div>
              <p className=" font-normal text-[42px]">Asgaard Sofa</p>
              <p className=" text-textColor4 font-medium text-[24px]">
                Rp 5.000.000
              </p>
              <div className="mt-[15px] flex items-center">
                <Image src={reviewStar} alt={"review rating"} />
                <div className="flex align-middle items-center border-l-[1px] border-textColor4 ml-[18px] pl-[22px] py-[5px]">
                  <p className=" font-normal text-textColor4 cursor-pointer hover:underline">
                    5 Customer Review
                  </p>
                </div>
              </div>
              <p className="text-[13px] font-normal mt-[13px]">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
            </div>

            {/* Size and Color Option */}
            <div className="mt-[22px]">
              <p className=" text-textColor4 font-normal ">Size</p>
              <div className="flex gap-[16px] mt-[12px]">
                {size.map((val, id) => {
                  return (
                    <div
                      key={id}
                      className={` ${
                        isSize == val ? "bg-primary2 text-white" : "bg-primary5"
                      }  hover:opacity-60 w-[30px] h-[30px] cursor-pointer rounded-[5px] flex justify-center items-center`}
                      onClick={() => {
                        return setIsSize(val);
                      }}
                    >
                      <p>{val}</p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-[18px] text-textColor4 font-normal ">Color</p>
              <div className="flex gap-[16px] mt-[12px]">
                {color.map((val, id) => {
                  return (
                    <div
                      key={id}
                      className={` ${
                        isColor == val ? "outline outline-blue-500" : ""
                      }  hover:opacity-60 w-[30px] h-[30px] cursor-pointer rounded-full bg-[${val}] flex`}
                      onClick={() => {
                        return setIsColor(val);
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* Input Amount, add to cart */}
            <div className="flex mt-[32px] gap-[18px]">
              {/* Amount */}
              <div className="flex justify-center items-center border-[1px] rounded-[10px] w-[123px] h-[64px] border-textColor4 px-[15px]">
                <div
                  className="w-fit cursor-pointer hover:opacity-60"
                  onClick={() => {
                    if (amount < 2) {
                      alert("Oops minimum product to add is 1");
                      setAmount(1);
                    } else {
                      setAmount(amount - 1);
                    }
                  }}
                >
                  -
                </div>
                <input
                  type="number"
                  inputMode="numeric"
                  className="w-[75px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none text-center"
                  defaultValue={amount}
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div
                  className="w-fit cursor-pointer hover:opacity-60"
                  onClick={() => {
                    setAmount(amount + 1);
                  }}
                >
                  +
                </div>
              </div>
              {/* Add to cart */}
              <div className="w-[215px] h-[64px] text-[20px]  border-[1px] rounded-[10px] border-textColor4 flex justify-center items-center hover:bg-primary5 cursor-pointer ">
                Add To Cart
              </div>
            </div>

            {/* Detail Produk */}
            <div className="mt-[60px] pt-[41px] border-t-[1px] border-[#D9D9D9]">
              {data.map((val, id) => {
                return (
                  <div key={id} className="flex flex-col gap-[12px]">
                    <div className=" text-textColor4 text-[16px] flex">
                      <p className="min-w-[75px]">SKU</p>
                      <p className="ml-[16px] mr-[12px]">:</p>
                      <p>{val.sku}</p>
                    </div>
                    <div className=" text-textColor4 text-[16px] flex">
                      <p className="min-w-[75px]">Category</p>
                      <p className="ml-[16px] mr-[12px]">:</p>
                      <p>{val.category}</p>
                    </div>
                    <div className=" text-textColor4 text-[16px] flex">
                      <p className="min-w-[75px]">Tags</p>
                      <p className="ml-[16px] mr-[12px]">:</p>
                      <p>{val.tag}</p>
                    </div>
                  </div>
                );
              })}
              <div className=" text-textColor4 text-[16px] flex">
                <p className="min-w-[75px]">Share</p>
                <p className="ml-[16px] mr-[12px]">:</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Products;
