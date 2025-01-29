/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/features/Products/Products.api";
import Spinner from "@/utils/Spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ProductManagementContent from "./ProductManagementContent";

const ProductManagement = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  // const [deleteProduct] = useDeleteProductMutation();

  // const handleProductDelete = (productId: string) => {
  //   const confirmPronPrompt = prompt("Write delete to remove product");
  //   if (confirmPronPrompt === "delete") {
  //     deleteProduct(productId);
  //     toast("Product is deleted successfully");
  //   } else {
  //     toast("Wrong Input");
  //   }
  // };

  console.log(data?.data?.result);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Table>
        <TableCaption>A list of Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.result?.map((product: any) => (
            <ProductManagementContent product={product} />
          ))}
        </TableBody>
      </Table>
      <h1>Product management</h1>
    </div>
  );
};

export default ProductManagement;
