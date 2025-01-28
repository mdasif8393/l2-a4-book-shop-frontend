import { addToCart } from "@/redux/features/cart/cartSlice";
import { useGetSingleProductQuery } from "@/redux/features/Products/Products.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import Cart from "../Cart/Cart";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productId);

  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.cart);

  const cartProduct = products.find((p: any) => p._id === productId);

  return (
    <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 px-6">
      <div className="basis-1/4">
        <img
          className="object-contain max-w-lg"
          src={data?.data?.image}
          alt=""
        />
      </div>
      <Card className="basis-2/4">
        <CardHeader>
          <CardTitle>{data?.data?.title}</CardTitle>
          <CardDescription>{data?.data?.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Category: {data?.data?.category}</p>
        </CardContent>
        <CardContent>
          <p>
            Price:{" "}
            <span className="text-gray-900 font-semibold">
              $ {data?.data?.price}
            </span>
          </p>
        </CardContent>
        <CardFooter>
          <Button
            disabled={
              cartProduct && cartProduct?.quantity >= data?.data?.stockQuantity
            }
            onClick={() => {
              dispatch(addToCart(data?.data));
              toast.success("product is added to cart");
            }}
          >
            add to cart
          </Button>
        </CardFooter>
      </Card>
      <div className="basis-1/4">
        <Cart />
      </div>
    </div>
  );
};

export default ProductDetails;
