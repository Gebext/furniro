import BannerImage from "../../../public/assets/all-image/main-banner.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-primary1 w-[643px] h-[443px] rounded-lg absolute bottom-2 right-12 px-12 flex flex-col justify-center">
        <h1 className="font-semibold text-[16px] tracking-[3px] text-textColor1">
          New Arrival
        </h1>
        <h1 className="text-primary2 font-bold text-[52px]">
          Discover Our New Collection
        </h1>
        <p className="text-textColor1 font-semibold text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-primary2 font-semibold text-white py-[25px] px-[72px] w-5/12 mt-[46px]">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
