import { IBook } from "@/types/types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Product = (product: IBook) => {
  return (
    <>
      <Link to={`/product/${product?.product?._id}`}>
        <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
          <CardHeader>
            <div className="mb-5">
              <img
                className="object-contain h-56 w-96 transition duration-300 ease-in-out hover:scale-110"
                src={product?.product?.image}
                alt={product?.product?.title}
              />
            </div>
            <CardTitle>{product?.product?.title.slice(0, 20)}</CardTitle>
            <CardDescription>
              {product.product.description.slice(0, 100)} <br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <small>
              Category:{" "}
              <span className="text-red-800">{product?.product?.category}</span>
            </small>
            <CardContent></CardContent>

            <p>
              ${" "}
              <span className="font-semibold text-red-800">
                {product.product.price}
              </span>
            </p>
          </CardContent>

          <CardFooter>
            <Button className="w-2/4">
              <Link to={`/service/${product?.product?._id}`}>Book Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default Product;
