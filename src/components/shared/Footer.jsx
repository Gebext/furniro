const Footer = () => {
  return (
    <div className="border-t-2 border-[#9F9F9F] h-[500px] flex flex-col justify-between">
      <div className="flex w-10/12 mx-auto justify-between mt-[48px]">
        <div>
          <h1 className="font-bold text-[24px] mb-16">Furniro.</h1>
          <p className="text-textColor4 text-[16px]">Lorem ipsum dolor sit.</p>
          <p className="text-textColor4 text-[16px]">Lorem, </p>
          <p className="text-textColor4 text-[16px]">Lorem, ipsum.</p>
        </div>

        <div>
          <h1 className="text-textColor4 text-[16px] font-medium mb-16">
            Links
          </h1>
          <ul className="space-y-8">
            <li className="font-medium text-[16px] cursor-pointer">Home</li>
            <li className="font-medium text-[16px] cursor-pointer">Shop</li>
            <li className="font-medium text-[16px] cursor-pointer">About</li>
            <li className="font-medium text-[16px] cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-textColor4 text-[16px] font-medium mb-16">
            Help
          </h1>
          <ul className="space-y-8">
            <li className="font-medium text-[16px] cursor-pointer">
              Payment Options
            </li>
            <li className="font-medium text-[16px] cursor-pointer">Returns</li>
            <li className="font-medium text-[16px] cursor-pointer">
              Privacy Policies
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-textColor4 text-[16px] font-medium mb-16">
            Newsletter
          </h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-b-2 border-gray-500 focus:border-primary2 outline-none mr-4"
            />

            <button className="border-b-2 border-gray-500 hover:border-primary2 outline-none mr-4 hover:text-textColor2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#9F9F9F] w-10/12 mx-auto">
        <h1 className="my-[38px] text-[16px]">
          2023 furino. All rights reverved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
