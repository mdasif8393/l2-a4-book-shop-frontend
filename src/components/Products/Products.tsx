/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/features/Products/Products.api";
import Spinner from "@/utils/Spinner";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Product from "./Product";

const Products = () => {
  const query: any = {};

  const [searchTerm, setSearchTerm] = useState("");
  query.searchTerm = searchTerm;

  const { data: products, isLoading } = useGetAllProductsQuery(query);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-[90%] mx-auto mt-10">
      <div className="flex justify-center mb-4">
        <Input
          onBlur={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder="Search your chosen products"
          className="w-1/2"
        />
        <Button className="ml-2 ">Search Books</Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
        {products?.data?.result.map((product: any) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
