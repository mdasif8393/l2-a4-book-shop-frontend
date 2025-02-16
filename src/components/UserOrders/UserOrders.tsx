/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetUserOrderQuery } from "@/redux/features/order/order.api";
import { useAppSelector } from "@/redux/hooks";
import Spinner from "@/utils/Spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import UserOrder from "./UserOrder";

const UserOrders = () => {
  const user = useAppSelector((state) => state?.auth?.user);

  const { data, isLoading } = useGetUserOrderQuery(user?.email);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-[90%] mx-auto">
      <Table>
        <TableCaption>A list of User Orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order Id</TableHead>
            <TableHead>Receiver Name</TableHead>
            <TableHead>Receiver Email</TableHead>
            <TableHead>Receiver Address</TableHead>
            <TableHead>Order Price</TableHead>
            <TableHead>Order Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((order: any) => (
            <UserOrder order={order} key={order?._id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserOrders;
