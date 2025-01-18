import { Skeleton } from "antd";

const useLoader = () => {
  const category_loader = () => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <div key={idx} className="mb-1">
        <Skeleton.Input className="!w-full " active />
      </div>
    ));
  };
  const cart_loading = () => {
    return Array.from({ length: 6 }).map((__dirname, idx) => {
      return (
        <div className="flex flex-col gap-[0.7rem]" key={idx}>
          <div className="w-full">
            <Skeleton.Image className="!w-full !h-[220px]" active />
          </div>
          <Skeleton.Input active className="w-full" />
          <Skeleton.Input active className="w-full" />
        </div>
      );
    });
  };

  const imageLoading = () => {
    return Array.from({ length: 4 }).map((__, idx) => (
      <Skeleton.Image key={idx} active={true} />
    ));
  };

  return { category_loader, cart_loading, imageLoading };
};

export { useLoader };
