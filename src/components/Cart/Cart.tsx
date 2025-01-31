/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);

  return (
    <div>
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
