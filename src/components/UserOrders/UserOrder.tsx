import { TableCell, TableRow } from "../ui/table";

/* eslint-disable @typescript-eslint/no-explicit-any */
const UserOrder = ({ order }: any) => {
  console.log(order);
  return (
    <TableRow key={order?._id}>
      <TableCell>{order?._id}</TableCell>
      <TableCell>{order?.name}</TableCell>
      <TableCell>{order?.email}</TableCell>
      <TableCell>{order?.address}</TableCell>
      <TableCell>$ {order?.totalPrice}</TableCell>
      <TableCell
        className={
          order?.status === "pending" ? "text-red-500" : "text-green-500"
        }
      >
        {order?.status}
      </TableCell>
    </TableRow>
  );
};

export default UserOrder;
