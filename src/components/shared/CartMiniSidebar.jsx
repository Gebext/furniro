import Image from "next/image";
import closeButton from "../../../public/assets/all-image/mini cart sidebar/close cart.png";
import CardCartSidebar from "../cards/CardCartSidebar";
import productData from "../../../public/assets/data/products";
import { useEffect, useState } from "react";

const CartMiniSidebar = (props) => {
  const [findProduct, setFindProduct] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const dummyCart = [
    {
      productId: 1,
      qty: 2,
    },
    {
      productId: 2,
      qty: 4,
    },
    {
      productId: 3,
      qty: 3,
    },
  ];

  useEffect(() => {
    // Use Effect untuk fetching data dan memasukkan data produk yang masuk cart ke variabel findProduct
    const data = [];
    dummyCart.map((val1, id) => {
      const product = productData.findIndex(
        (val2) => val2.id == dummyCart[id].productId
      );
      //   memasukkan data product dari database sekaligus qty ke dalam array data
      data.push({ ...productData[product], ...val1 });
    });
    setFindProduct(data);
  }, []);

  useEffect(() => {
    // ini use effect untuk menjumlah total harga
    let total = 0
    findProduct.map((val,id)=>{
        total += (val.qty*val.price)
    })
    setSubTotal(total)
  }, [findProduct]);
  return (
    <div className="absolute right-0 top-0 bg-white w-[417px] h-[746px] flex flex-col justify-between px-[33px] pt-[28px] shadow">
      <div>
        <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] w-[287px] pb-[26px] mb-[42px]">
          <div className="text-left flex items-center ">
            <p className="text-[24px] font-semibold">Shopping Cart</p>
          </div>
          <Image src={closeButton} alt="close" className=" cursor-pointer" onClick={props.onHandleCloseButton}/>
        </div>
        <div className="flex flex-col gap-[20px]">
          {findProduct.map((val, id) => {
            return <CardCartSidebar key={id} data={val} />;
          })}
        </div>
      </div>
      <div className="px-[]">
        <div className="flex justify-between">
          <p className="font-normal">Subtotal</p>
          <p className="font-base text-[#B88E2F]">Rp {subTotal.toLocaleString("id")}</p>
        </div>
        <div className="flex justify-end gap-2 mt-[23px] border-t-[1px] border-[#D9D9D9] pt-[26px]">
          <button className="px-[30px] py-[6px] border-[1px] border-black rounded-[50px] hover:bg-primary2">
            Cart
          </button>
          <button className="px-[30px] py-[6px] border-[1px] border-black rounded-[50px] hover:bg-primary2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartMiniSidebar;
