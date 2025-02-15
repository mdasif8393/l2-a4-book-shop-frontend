import { useGetAllProductsQuery } from "@/redux/features/Products/Products.api";
import { IBook } from "@/types/types";
import Spinner from "@/utils/Spinner";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-[90%] mx-auto mt-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {products?.data?.result.map((product: IBook) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
