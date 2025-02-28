/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOrdersQuery } from "@/redux/features/order/order.api";
import Spinner from "@/utils/Spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import OrderManagement from "./OrderManagement";

const OrderManagements = () => {
  const { data: products, isLoading } = useGetAllOrdersQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <Table>
        <TableCaption>A list of Products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order id</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Order Amount</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>User Number</TableHead>
            <TableHead>User Address</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.data?.result?.map((order: any) => (
            <OrderManagement order={order} key={order._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderManagements;
