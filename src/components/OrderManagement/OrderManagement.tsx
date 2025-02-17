/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "@/redux/features/order/order.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { TableCell, TableRow } from "../ui/table";

const OrderManagement = ({ order }: any) => {
  const navigate = useNavigate();

  //delete
  const [deleteOrder, { isLoading: dIsLoading }] = useDeleteOrderMutation();

  const handleOrderDelete = async (orderId: string) => {
    const confirmPronPrompt = prompt("Write delete to remove order");
    if (confirmPronPrompt === "delete") {
      deleteOrder(orderId);
      toast("Order is deleted successfully");
      navigate("/order-management");
    } else {
      toast("Wrong Input");
    }
  };

  const [formData, setFormData] = useState({
    status: "",
    totalPrice: 0,
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    category: "",
  });

  useEffect(() => {
    setFormData(order);
  }, [order]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [updateData, { isLoading: uIsLoading }] = useUpdateOrderMutation();

  const handleUpdateFormSubmit = (e: any) => {
    e.preventDefault();
    const typeChangeFormData = {
      status: formData?.status,
      totalPrice: Number(formData?.totalPrice),
      name: formData?.name,
      email: formData?.email,
      contactNumber: formData?.contactNumber,
      address: formData?.address,
      category: formData?.category,
    };

    const options = {
      id: order?._id,
      data: typeChangeFormData,
    };

    updateData(options);
    toast.success("Order is updated successfully");
    navigate("/order-management");
  };

  return (
    <TableRow key={order?._id}>
      <TableCell>{order?._id}</TableCell>
      <TableCell
        className={order?.status === "paid" ? "text-green-600" : "text-red-600"}
      >
        {order?.status}
      </TableCell>
      <TableCell>$ {order?.totalPrice}</TableCell>
      <TableCell>{order?.name}</TableCell>
      <TableCell>{order?.email}</TableCell>
      <TableCell>{order?.contactNumber}</TableCell>
      <TableCell>{order?.address}</TableCell>
      <TableCell>
        {/* Delete */}
        <Button
          variant="destructive"
          onClick={() => handleOrderDelete(order?._id)}
        >
          Delete
        </Button>
        {/* Update */}
        <Sheet>
          <SheetTrigger>
            <Button className="bg-slate-600 ms-1">Update</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                Update Information of Order _id: {order?._id}
              </SheetTitle>
              <SheetDescription>
                <form onSubmit={handleUpdateFormSubmit}>
                  <Label htmlFor="title">Order Status</Label>
                  <Input
                    type="text"
                    placeholder="Order Status"
                    id="status"
                    name="status"
                    defaultValue={order?.status || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="title">Order Price</Label>
                  <Input
                    type="number"
                    placeholder="Order Price"
                    id="totalPrice"
                    name="totalPrice"
                    defaultValue={order?.totalPrice || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="price">User Name</Label>
                  <Input
                    type="text"
                    placeholder="User Name"
                    id="name"
                    name="name"
                    defaultValue={order?.name || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="stockQuantity">User Email</Label>
                  <Input
                    type="text"
                    placeholder="User Email"
                    id="email"
                    name="email"
                    defaultValue={order?.email || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="description">User Contact Number</Label>
                  <Input
                    type="string"
                    placeholder="User Contact Number"
                    id="contactNumber"
                    name="contactNumber"
                    defaultValue={order?.contactNumber || ""}
                    onChange={handleChange}
                  />
                  <Label htmlFor="stock">User Address</Label>
                  <Input
                    type="string"
                    placeholder="User Address"
                    id="address"
                    name="address"
                    defaultValue={order?.address || ""}
                    onChange={handleChange}
                  />

                  <br />
                  <Button type="submit" className="w-full">
                    Update Product Info
                  </Button>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </TableCell>
    </TableRow>
  );
};

export default OrderManagement;
