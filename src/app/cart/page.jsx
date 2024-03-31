"use client";

import Banner from "../../components/ui/Banner";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import SamplePict from "../../../public/assets/all-image/Asgaard Sofa.png";
import { formatToRupiah } from "@/utils/format";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter()
  return (
    <div>
      <Banner title="Cart" />
      <div className="flex md:flex-row md:space-x-4 flex-col lg:m-16 m-4 justify-between">
        <div className="md:w-8/12 w-full">
          <table className="w-full rounded-lg">
            <thead className="bg-[#F9F1E7] text-black rounded-lg">
              <tr>
                <th className="md:py-4 md:px-4 px-1 py-1 border-0 text-[12px]">
                  Preview
                </th>
                <th className="md:py-2 md:px-4 border-0 text-[12px]">
                  Products
                </th>
                <th className="md:py-2 md:px-4 border-0 text-[12px]">Price</th>
                <th className="md:py-2 md:px-4 border-0 text-[12px]">
                  Quantity
                </th>
                <th className="md:py-2 md:px-4 border-0 text-[12px]">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex justify-center items-center py-2">
                  <Image
                    src={SamplePict}
                    className="w-[80px] h-[80px] rounded-lg"
                    alt={"product checkout"}
                  />
                </td>
                <td className="text-center py-2 text-textColor4 text-[8px] lg:text-base md:text-[10px]">
                  Asgaard sofa
                </td>
                <td className="text-center py-2 text-textColor4 text-[8px] lg:text-base md:text-[10px]">
                  {formatToRupiah(2500000)}
                </td>
                <td className="text-center py-2 text-[8px] lg:text-base md:text-[10px]">
                  1
                </td>
                <td className="text-center py-2 text-[8px] lg:text-base md:text-[10px]">
                  <h1 className="flex justify-center items-center md:space-x-2 text-[8px] lg:text-base md:text-[10px]">
                    <span>{formatToRupiah(2500000)}</span>
                    <span className="text-primary2 md:text-[24px] text-[12px]">
                      <CiTrash />
                    </span>
                  </h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#F9F1E7] md:px-16">
          <h1 className="mt-4 font-semibold md:text-[32px] text-[20px]  text-center">
            Cart Totals
          </h1>
          <div className=" md:block flex justify-center flex-col md:px-0 px-4">
            <div className="md:mt-8 my-2">
              <h1 className="flex text-[16px]  justify-between w-full space-x-12">
                <span className="font-medium">Subtotal</span>
                <span className="text-textColor4 ">
                  {formatToRupiah(2500000)}
                </span>
              </h1>
              <h1 className="flex text-[16px] justify-between w-full space-x-12 md:my-4">
                <span>Total</span>
                <span className="font-medium text-primary2 text-[20px]">
                  {formatToRupiah(2500000)}
                </span>
              </h1>
            </div>
            <div className="md:-[215px] md:h-[64px] text-[20px] md:px-0 md:py-0 px-2 py-2  border-[1px] rounded-[10px] border-textColor4 flex justify-center items-center hover:bg-primary5 cursor-pointer  md:my-8 my-4">
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
