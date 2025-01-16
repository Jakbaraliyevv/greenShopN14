import { Image } from "antd";
import type { FC } from "react";

const ShopSWipper: FC = ({ data, isError, isLoading }) => {
  console.log(data, "data");
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-7 justify-between h-full">
        {data?.detailed_images.map((value) => (
          <div className="w-[120px] h-[120px] bg-[#e5e5e5] cursor-pointer border-2 hover:border-[#46A358] transition-colors">
            <img className="w-full h-full" src={value} alt="" />
          </div>
        ))}
      </div>
      <Image src={data?.main_image} alt="" />
    </div>
  );
};

export default ShopSWipper;
