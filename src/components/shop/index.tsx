import { useParams } from "react-router-dom";
import { useQuerHandler } from "../../hooks/useQuery";
import type { DataTYpe } from "../../@types";
import ShopSWipper from "./shop-swipper";
import ShopDescription from "./shop-description";

interface ParamsType {
  category?: string;
  id?: string;
}
function ShopComponents() {
  const { category, id }: ParamsType = useParams();
  const { data, isError, isLoading }: DataTYpe = useQuerHandler({
    pathname: "id_card",
    url: `/flower/category/${category}/${id}`,
  });

  return (
    <section className="w-[90%] m-auto mt-[20px]">
      <div className="grid grid-cols-2 gap-5">
        <ShopSWipper data={data} isLoading={isLoading} isError={isError} />
        <ShopDescription data={data} isLoading={isLoading} isError={isError}  />
      </div>
    </section>
  );
}

export default ShopComponents;
