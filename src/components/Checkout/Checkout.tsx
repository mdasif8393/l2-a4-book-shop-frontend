/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

import { clearCart } from "@/redux/features/cart/cartSlice";
import { usePostOrderMutation } from "@/redux/features/order/order.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Spinner from "@/utils/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CartDetails from "../Cart/CartDetails";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Checkout = () => {
  const navigate = useNavigate();

  const { products, total } = useAppSelector((state: any) => state.cart);
  const { email: userEmail } = useAppSelector((state: any) => state.auth.user);

  const [user, setUser] = useState({
    name: "",
    contactNumber: "",
    email: "",
    totalPrice: 0,
    address: "",
    status: "",
    products: [],
  });

  const [postOrder, { isLoading: pIsLoading }] = usePostOrderMutation();

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    user.products = products.map((product: any) => ({
      product: product._id,
      quantity: product.quantity,
    }));
    user.email = userEmail;
    user.status = "pending";
    user.totalPrice = Number(total.toFixed(2));
    const res = await postOrder(user);
    if (res?.data?.status) {
      dispatch(clearCart());
      navigate("/success");
      toast.success("Order created successfully");
    }
  };

  if (pIsLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 my-6 container">
      <div>
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-3/4">
            <Label htmlFor="name">Your Name</Label>
            <Input
              onBlur={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
            />

            <Label htmlFor="number">Your Phone Number</Label>
            <Input
              type="number"
              id="contactNumber"
              name="contactNumber"
              placeholder="Your Phone Number"
              onBlur={(e) =>
                setUser({ ...user, contactNumber: e.target.value })
              }
            />
            <Label htmlFor="number">Your Address</Label>
            <Input
              type="text"
              placeholder="Your Address"
              name="address"
              id="address"
              onBlur={(e) => setUser({ ...user, address: e.target.value })}
            />
            <Button
              disabled={products.length === 0}
              type="submit"
              className="w-full mt-4"
            >
              Create Order
            </Button>
          </form>
        </div>
      </div>
      <div>
        <div>
          {products.length <= 0 && (
            <p className="text-3xl font-bold text-center text-red-500">
              Cart is empty
            </p>
          )}
          {products.length > 0 && (
            <p>
              Total Price: <span className="font-semibold">$ {total}</span>
            </p>
          )}

          <div>
            {products.map((product: any) => (
              <CartDetails product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
