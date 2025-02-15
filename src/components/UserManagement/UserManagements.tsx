/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllUsersQuery } from "@/redux/features/auth/authApi";
import Spinner from "@/utils/Spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import UserManagement from "./UserManagement";

const UserManagements = () => {
  const { data, isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-[90%] mx-auto">
      <Table>
        <TableCaption>A list of Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.result?.map((user: any) => (
            <UserManagement user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagements;
