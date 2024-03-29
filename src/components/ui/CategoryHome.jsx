import Image from "next/image";
import categoryData from "../../../public/assets/data/category";

const CategoryHome = () => {
  return (
    <div className="w-[1183px] mx-auto">
      <div className="text-center mt-[56px] mb-[62px]">
        <h1 className="font-bold text-[32px]">Browse The Range</h1>
        <p className="text-[20px] text-textColor2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {categoryData.map((cat, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <Image src={cat.img} alt={cat.name} />
            <h1 className="mt-[30px] font-semibold text-[24px] text-textColor1">
              {cat.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
