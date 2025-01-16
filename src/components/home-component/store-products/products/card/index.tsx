import type { FC } from "react";
import type { CartType } from "../../../../../@types";
import { useNavigate } from "react-router-dom";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Card: FC<CartType> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-[0.6rem]">
      <div className="h-[30rem] bg-[#f5f5f5] flex justify-center items-center transition-all duration-700  relative group">
        <img className="w-4/5 h-[80%]" src={props.main_image} alt="" />
        <div className="hidden group-hover:flex transition-all duration-700 items-center gap-[1rem] absolute bottom-[1.7rem]">
          <button className="text-[1.8rem] text-[#3D3D3D] hover:text-[#46A358] w-[3.5rem] h-[3.5rem] bg-[#ffff] rounded-[0.4rem] flex items-center justify-center">
            <ShoppingCartOutlined />
          </button>
          <button className="text-[1.8rem] text-[#3D3D3D] hover:text-[#46A358] w-[3.5rem] h-[3.5rem] bg-[#ffff] rounded-[0.4rem] flex items-center justify-center">
            <HeartOutlined />
          </button>
          <button
            onClick={() => navigate(`/shop/${props.category}/${props._id}`)}
            className="text-[1.8rem] text-[#3D3D3D] hover:text-[#46A358] w-[3.5rem] h-[3.5rem] bg-[#ffff] rounded-[0.4rem] flex items-center justify-center"
          >
            <SearchOutlined />
          </button>
        </div>
      </div>
      <h4 className="font-[500] text-[1.6rem] text-[#3D3D3D] ">
        {props.title}
      </h4>
      <div className="price flex items-center gap-[1.7rem]">
        <h5 className="text-[#46A358] font-[700] text-[1.8rem]">
          {props.price} $
        </h5>
        <h6 className="text-[#A5A5A5] font-[400] text-[1.5rem] line-through">
          {props.discount_price} $
        </h6>
      </div>
    </div>
  );
};

// http://localhost:5173/shop/house-plants/66d09a759fa7aef6c5d0012f

export default Card;
