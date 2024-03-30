import BannerImage from "../../../public/assets/all-image/bg-image.jpg";
import { FaChevronRight } from "react-icons/fa6";

const Banner = (props) => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="py-32">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Shop</h1>
            <p className="mt-2 text-lg flex items-center">
              <span className="cursor-pointer hover:text-primary2">Home</span>
              <FaChevronRight className="mx-2" />
              <span className="cursor-pointer ">{props.title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
