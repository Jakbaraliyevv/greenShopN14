import type { FC } from "react";
import type { DataTYpe } from "../../../@types";
import { Rate } from "antd";
import AvatarItem from "../avatar";

const ShopDescription: FC<DataTYpe> = ({ data, isLoading, isError }) => {
  return (
    <section>
      <div className="border-b-2 pb-5  border-[#A6D1Ac] flex items-end justify-between">
        {isLoading || isError ? (
          ""
        ) : (
          <div className="flex items-center gap-5">
            <AvatarItem created_by={data?.created_by as string} />
            <div>
              <h2 className="text-[#3D3D3D] text-[28px] font-bold">
                {data?.title}
              </h2>
              <p className="font-bold text-[#46A358] text-[22px]">
                ${data?.price}
              </p>
            </div>
          </div>
        )}
        <div>
          <Rate />
          <p>{data?.comments.length}Customer Rewiev</p>
        </div>
      </div>

      <div>
        <h3>Short description</h3>
        <p
          dangerouslySetInnerHTML={{ __html: data?.description as string }}
        ></p>
      </div>
    </section>
  );
};

export default ShopDescription;
