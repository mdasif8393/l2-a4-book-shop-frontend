/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  return (
    <div className="w-3/4 mx-auto mt-10">
      {products.length <= 0 && (
        <h1 className="text-3xl text-red-500 font-bold text-center">
          No Items in cart
        </h1>
      )}
      {products.length > 0 && (
        <p className="text-lg">
          Total Price:{" "}
          <span className="font-semibold text-gray-950">TK {total}</span>
        </p>
      )}

      <div>
        {products.map((product: any) => (
          <CartDetails product={product} key={product._id} />
        ))}
      </div>

      {products.length > 0 && (
        <Link to="/checkout">
          <Button className="w-full">Checkout</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
