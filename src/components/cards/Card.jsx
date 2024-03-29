"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShareAlt, FaHeart } from "react-icons/fa";

import { formatToRupiah } from "@/utils/format";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[285px] h-[446px] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={props.img} alt={props.name} layout="fill" objectFit="cover" />
      <div className="bg-primary3 px-[15px] py-[16px] absolute bottom-0 left-0 right-0">
        <h1 className="font-semibold text-[24px]">{props.name}</h1>
        <p className="text-textColor2 font-medium text-[16px]">
          {props.shortDescription}
        </p>
        <h1 className="flex justify-between items-center">
          <span className="text-[20px] font-semibold">
            {formatToRupiah(props.price)}
          </span>
          {props.isDiscount && (
            <s className="text-[16px] text-[#B0B0B0]">
              <span>
                {formatToRupiah((props.price * props.discount) / 100)}
              </span>
            </s>
          )}
        </h1>
      </div>
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-center items-center">
          <div className="bg-white text-[16px] text-primary2 font-semibold py-[12px] px-[52px]  shadow-md hover:shadow-lg transition-shadow duration-300">
            <button className="mr-2">Add to cart</button>
          </div>
          <div className="flex my-4">
            <FaShareAlt
              className="mr-8 cursor-pointer"
              size={24}
              color="white"
            />
            <FaHeart className="cursor-pointer" size={24} color="white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
