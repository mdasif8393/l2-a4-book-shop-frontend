import { useGetAllProductsQuery } from "@/redux/features/Products/Products.api";
import { IBook } from "@/types/types";
import Spinner from "@/utils/Spinner";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
  console.log(products?.data?.result);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex flex-row mt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {products?.data?.result.map((product: IBook) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
